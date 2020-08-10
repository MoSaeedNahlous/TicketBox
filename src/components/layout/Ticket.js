import React, { useState } from 'react';
import { useContext } from 'react';
import { GameGlobalContext } from '../../contexts/gameContext/GameGlobalState';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';
import { useEffect } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const Ticket = ({ ticket }) => {
  const context = useContext(GameGlobalContext);
  const context2 = useContext(UserGlobalContext);
  const [state, setstate] = useState({
    id: '',
    gates: '',
    price: '',
    returnable: '',
    returndate: '',
    game: { id: '' },
  });
  useEffect(() => {
    context2.GetTicketInfo(ticket.ticketId);
  }, []);
  useEffect(() => {
    setstate(context2.ticket);
  }, [context2.ticket]);

  return (
    <Link
      style={{ color: 'black' }}
      to={`/ticket/${ticket.ticketId}`}
      onClick={() => {
        context.GetGameByID(state.game.id);
      }}
    >
      <div className='container' style={{ border: '1px solid black' }}>
        TicketId:{state.id}
        <br />
        Gate:{state.gates}
        <br />
        Price:{state.price}
        <br />
        Retrurnable:{state.returnable ? 'Yes' : 'NO'}
        <br />
      </div>
    </Link>
  );
};

export default Ticket;
