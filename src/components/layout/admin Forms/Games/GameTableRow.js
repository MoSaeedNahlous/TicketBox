import React, { Fragment, useEffect, useContext, useRef } from 'react';
import { GameGlobalContext } from '../../../../contexts/gameContext/GameGlobalState';

const GameTableRow = ({ Game, Stad, host, guest }) => {
  const context = useContext(GameGlobalContext);
  const { GetGameByID } = context;
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

  const setHandler = () => {
    context.ClearCurrent();
    context.SetCurrent(Game);
    console.log('this is should be Game : ' + JSON.stringify(Game));
  };

  const deleteRowHandler = () => {
    context.DeleteGame(Game.id);
    context.ClearCurrent();
  };
  return (
    <Fragment>
      <tr>
        <td>{Game.id}</td>
        <td>{hostRef.current.name}</td>
        <td>{guestRef.current.name}</td>
        <td>{Stad.name}</td>
        <td>{Game.deadLine}</td>
        <td>{Game.createdAt}</td>
        <td>{Game.updatedAt}</td>

        <td>
          <button onClick={setHandler}>
            {' '}
            <i className='fa fa-pencil' aria-hidden='true'></i>
          </button>
          <button onClick={deleteRowHandler}>
            <i className='fa fa-trash' aria-hidden='true'></i>
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default GameTableRow;
