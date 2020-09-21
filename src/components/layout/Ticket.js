import React, { useContext } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';
import bg from '../../res/syria.svg';
import { scaleService } from 'chart.js';
import { TestGlobalContext } from '../../contexts/testContext/TestGlobalState';

const Ticket = ({ ticket }) => {
  const context = useContext(UserGlobalContext);
  const context2 = useContext(TestGlobalContext);

  const refund = () => {
    var data = {
      userId: context.user.id,
      ticketId: ticket.ticket.id,
      returnDate: ticket.ticket.returnDate,
      price: ticket.ticket.price,
      brId: ticket.tkt.bookRequest.id,
    };
    if (window.confirm('are you sure?')) {
      context2.Refund(data);
    }
  };

  return (
    <div>
      <br />
      <br />
      <div
        id='tkt'
        className='container printme scaled'
        style={{
          border: '1px solid black',
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className='row'>
          <div className='col-sm-9' style={{ borderRight: '3px dotted black' }}>
            <div>
              <h4 style={{ textAlign: 'center' }}>
                at {ticket.ticket.game.stadium.name} Stadium in{' '}
                {ticket.ticket.game.stadium.city} City
              </h4>
            </div>
            <h3 style={{ textAlign: 'center' }}>
              {ticket.hostName}
              {'      '} V.S {'      '}
              {ticket.guestName}
            </h3>
            <h5 style={{ textAlign: 'center' }}>
              Match Date: {ticket.ticket.game.deadLine}
            </h5>
            <h5 style={{ textAlign: 'center' }}>Gates:{ticket.ticket.gates}</h5>
            <h5 style={{ textAlign: 'center' }}>
              Retrunable:{ticket.ticket.returnable ? ' Yes' : ' NO'}
            </h5>
            <h5 style={{ textAlign: 'center' }}>
              Release Date:{ticket.ticket.releaseDate}
            </h5>
            <h5 style={{ textAlign: 'center' }}>
              {ticket.ticket.returnable
                ? 'Last Date to Return: ' + ticket.ticket.returnDate
                : null}
            </h5>
            <h6>{context.user.name}</h6>
          </div>
          <div className='col-sm-3' style={{ borderLeft: '2px doted black' }}>
            <img
              src={`data:image/jpeg;base64,${ticket.QrImage}`}
              width='195px'
              height='195px'
              alt='QR'
              border='2px black solid'
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <h6 style={{ textAlign: 'center' }}>---QR Code---</h6>
          </div>
        </div>
      </div>

      {ticket.ticket.returnable ? (
        <button className='btn-danger btn no-printme' onClick={refund}>
          Return <i className='fas fa-coins'></i>
        </button>
      ) : null}
      <br />
      <br />
    </div>
  );
};

export default Ticket;
