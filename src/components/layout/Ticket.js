import React, { useState } from 'react';
import { useContext } from 'react';
import { GameGlobalContext } from '../../contexts/gameContext/GameGlobalState';
import { useEffect } from 'react';
import Spinner from './Spinner';

const Ticket = ({ ticket }) => {
  const context = useContext(GameGlobalContext);
  useEffect(() => {
    context.SetGuest(ticket.game.gameTeams.guest);
    context.SetHost(ticket.game.gameTeams.host);
  }, []);
  return (
    <div className='container' style={{ border: '1px solid black' }}>
      <p>
        {context.host.name} v.s {context.guest.name}
      </p>
      <hr />
      <p>{ticket.game.stadium.name}</p>
    </div>
  );
};

export default Ticket;
