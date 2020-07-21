import React, { useRef, Fragment } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { GameGlobalContext } from '../../../../contexts/gameContext/GameGlobalState';

const TicketsTableRow = ({ Game, Stad, host, guest }) => {
  const context = useContext(GameGlobalContext);
  const hostRef = useRef({});
  const guestRef = useRef({});

  useEffect(() => {
    context.SetHost(host).then((res) => {
      var txt = JSON.stringify(res);
      var obj = JSON.parse(txt);
      hostRef.current = obj;
    });
  }, []);

  useEffect(() => {
    context.SetHost(guest).then((res) => {
      var txt = JSON.stringify(res);
      var obj = JSON.parse(txt);
      guestRef.current = obj;
    });
  }, []);
  useEffect(() => {
    context.SetHost(983498239482).then((res) => {
      var txt = JSON.stringify(res);
      var obj = JSON.parse(txt);
    });
  }, []);

  const clickHandler = () => {
    context.ViewTickets(Game.id);
  };

  return (
    <Fragment>
      <tr>
        <td>{Game.id}</td>
        <td>{hostRef.current.name}</td>
        <td>{guestRef.current.name}</td>
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
