import React, { useRef, Fragment } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { GameGlobalContext } from '../../../../contexts/gameContext/GameGlobalState';

const TicketsTableRow = ({ Game, Stad }) => {
  const context = useContext(GameGlobalContext);
  const host = useRef({ name: '' });
  const guest = useRef({ name: '' });

  useEffect(() => {
    console.log(context.SetHost(Game.gameTeams.host));

    context.SetGuest(Game.gameTeams.guest);
  }, []);

  const clickHandler = () => {
    context.ViewTickets(Game.id);
  };

  return (
    <Fragment>
      <tr>
        <td>{Game.id}</td>
        <td>{context.host.name}</td>
        <td>{context.guest.name}</td>
        <td>{Stad.name}</td>
        <td>{Game.deadLine}</td>

        <td>
          <button onClick={clickHandler}>
            <i className='fas fa-eye' aria-hidden='true'></i>
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default TicketsTableRow;
