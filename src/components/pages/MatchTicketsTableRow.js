import React, { Fragment } from 'react';
import { useContext } from 'react';
import { GameGlobalContext } from '../../contexts/gameContext/GameGlobalState';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';

const MatchTicketsTableRow = ({ ticket }) => {
  const context = useContext(GameGlobalContext);
  const context2 = useContext(UserGlobalContext);

  const onClickHandler = () => {
    if (context2.user.id === '') {
      alert('You cant book a ticket!! you should login first!!');
    } else {
      var data = {
        ticketId: ticket.id,
        email: context2.user.email,
      };
    }

    if (window.confirm('are you sure?')) {
      context.TicketBooking(data);
    }
  };

  return (
    <Fragment>
      <tr style={{ background: 'white', textAlign: 'center' }}>
        <td>{ticket.price}</td>
        <td>{ticket.gates}</td>
        <td>{ticket.counter}</td>
        <td>{ticket.returnable ? 'Yes' : 'No'}</td>

        <td>
          <button className='btn-dark btn' onClick={onClickHandler}>
            Book Now!
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default MatchTicketsTableRow;
