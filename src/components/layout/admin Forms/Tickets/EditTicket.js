import React, { useEffect } from 'react';
import TicketsTable from './TicketsTable';
import GameTicketsTable from './GameTicketsTable';
import { useContext } from 'react';
import { GameGlobalContext } from '../../../../contexts/gameContext/GameGlobalState';
import { useState } from 'react';

const EditTicket = () => {
  const context = useContext(GameGlobalContext);
  const { current, AddTicket, ClearCurrent, EditTickets } = context;

  useEffect(() => {
    context.ClearCurrent();
  }, []);

  useEffect(() => {
    if (current === null) {
      setTicketInfo({
        id: '',
        gameId: '',
        counter: '',
        releaseDate: '',
        endDate: '',
        price: '',
        returnable: 'false',
        returnDate: '',
        gates: '',
        ticketSequence: '',
      });
      document.getElementById('ticketId').disabled = true;
      document.getElementById('gameId').disabled = false;
      document.getElementById('formTitle').innerHTML = 'Add Ticket';
      document.getElementById('formBtn').innerHTML = 'AddTicket';
    } else {
      setTicketInfo({
        id: current.id,
        gameId: '',
        counter: current.counter,
        releaseDate: current.releaseDate,
        endDate: current.endDate,
        price: current.price,
        returnable: current.returnable,
        returnDate: current.returnDate,
        gates: current.gates,
        ticketSequence: current.ticketSequence,
      });
      document.getElementById('gameId').disabled = true;
      document.getElementById('ticketId').disabled = true;
      document.getElementById('formTitle').innerHTML = 'Edit Ticket';
      document.getElementById('formBtn').innerHTML = 'EditTicket';
    }
  }, [current]);

  const closeModal = () => {
    document.getElementById('viewModal').style.display = 'none';
  };

  const [ticketInfo, setTicketInfo] = useState({
    id: '',
    gameId: '',
    counter: '',
    releaseDate: '',
    endDate: '',
    price: '',
    returnable: 'false',
    returnDate: '',
    gates: '',
    ticketSequence: '',
  });

  const formAction = (e) => {
    e.preventDefault();
    if (document.getElementById('formTitle').innerHTML === 'Add Ticket') {
      setTicketInfo({
        ...ticketInfo,
        ticketSequence: (Math.floor(Math.random() * 1000000) + 1).toString(),
      });
      console.log(ticketInfo);
      var tkt = {
        counter: ticketInfo.counter,
        releaseDate: ticketInfo.releaseDate,
        endDate: ticketInfo.endDate,
        price: ticketInfo.price,
        returnable: ticketInfo.returnable,
        returnDate: ticketInfo.returnDate,
        gates: ticketInfo.gates,
        ticketSequence: ticketInfo.ticketSequence,
      };
      AddTicket(tkt, ticketInfo.gameId);
    } else if (
      document.getElementById('formTitle').innerHTML === 'Edit Ticket'
    ) {
      var tikt = {
        id: ticketInfo.id,
        counter: ticketInfo.counter,
        releaseDate: ticketInfo.releaseDate,
        endDate: ticketInfo.endDate,
        price: ticketInfo.price,
        returnable: ticketInfo.returnable,
        returnDate: ticketInfo.returnDate,
        gates: ticketInfo.gates,
      };
      EditTickets(tikt);
    }
    ClearCurrent();
  };

  const onChangeHandler1 = (e) => {
    setTicketInfo({ ...ticketInfo, [e.target.name]: e.target.value });
  };

  const onBlurHandler = (e) => {
    var str = e.target.value;
    setTicketInfo({ ...ticketInfo, [e.target.name]: str });
  };
  const clearForm = () => {
    ClearCurrent();
  };

  return (
    <div style={{ backgroundColor: '#F1F1F1' }}>
      <div className='container'>
        <br />
        <h2>Games</h2>
        <TicketsTable />
        <br />
        <br />
        <h2>Tickets for selected game</h2>
        <GameTicketsTable />

        <br />
        <hr />
        <form onSubmit={formAction}>
          <span
            id='closeModal'
            style={{ background: 'rgb(150,0,0)' }}
            onClick={clearForm}
          >
            &times;
          </span>
          <h3 id='formTitle'>Add Ticket</h3>

          <div className='form-group'>
            <label>Game Id</label>
            <input
              type='number'
              id='gameId'
              name='gameId'
              className='form-control'
              placeholder='GameId'
              value={ticketInfo.gameId}
              onChange={onChangeHandler1}
              required
            />
          </div>
          <div className='form-group'>
            <label>Ticket Id</label>
            <input
              type='number'
              id='ticketId'
              name='id'
              className='form-control'
              placeholder='Ticket Id'
              value={ticketInfo.id}
              onChange={onChangeHandler1}
              disabled
              required
            />
          </div>
          <div className='form-group'>
            <label>Counter</label>
            <input
              type='number'
              name='counter'
              className='form-control'
              placeholder='Counter'
              value={ticketInfo.counter}
              onChange={onChangeHandler1}
              required
            />
          </div>
          <div className='form-group'>
            <label>Price</label>
            <input
              type='number'
              name='price'
              className='form-control'
              placeholder='Price'
              value={ticketInfo.price}
              onChange={onChangeHandler1}
              required
            />
          </div>
          <div className='form-group'>
            <label>Gates</label>
            <input
              type='text'
              id='gates'
              name='gates'
              className='form-control'
              placeholder='Gates'
              value={ticketInfo.gates}
              onBlur={onBlurHandler}
              onChange={onChangeHandler1}
              required
            />
          </div>
          <div className='form-group'>
            <label>Release date</label>
            <input
              type='date'
              name='releaseDate'
              className='form-control'
              placeholder='Release Date ex: 5/5/2021'
              value={ticketInfo.releaseDate}
              onChange={onChangeHandler1}
              required
            />
          </div>
          <div className='form-group'>
            <label>End date</label>
            <input
              type='date'
              name='endDate'
              className='form-control'
              placeholder='End Date ex: 5/5/2021'
              value={ticketInfo.endDate}
              onChange={onChangeHandler1}
              required
            />
          </div>
          <div className='form-group'>
            <label>Returnable</label>

            <div
              className='btn-group btn-group-toggle'
              data-toggle='buttons'
              style={{ marginLeft: '3%' }}
            >
              <label className='btn btn-secondary'>
                <input
                  type='radio'
                  name='returnable'
                  value='true'
                  required
                  onClick={() => {
                    setTicketInfo({
                      ...ticketInfo,
                      returnable: true,
                      ticketSequence: (
                        Math.floor(Math.random() * 1000000) + 1
                      ).toString(),
                    });
                    document.getElementById('returnDate').disabled = false;
                  }}
                />{' '}
                Yes
              </label>

              <label className='btn btn-secondary'>
                <input
                  type='radio'
                  name='returnable'
                  value='false'
                  onClick={() => {
                    setTicketInfo({
                      ...ticketInfo,
                      returnDate: '',
                      returnable: false,
                      ticketSequence: (
                        Math.floor(Math.random() * 1000000) + 1
                      ).toString(),
                    });
                    document.getElementById('returnDate').disabled = true;
                  }}
                />{' '}
                No
              </label>
            </div>
          </div>

          <div className='form-group'>
            <label>Return date</label>
            <input
              type='date'
              name='returnDate'
              id='returnDate'
              className='form-control'
              placeholder='Return Date'
              value={ticketInfo.returnDate}
              onChange={onChangeHandler1}
              required
            />
          </div>

          <div className='form-group'>
            <button id='formBtn' type='submit' className='btn btn-primary'>
              Add Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTicket;
