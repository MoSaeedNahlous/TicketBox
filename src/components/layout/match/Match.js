import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameGlobalContext } from '../../../contexts/gameContext/GameGlobalState';
import { useEffect } from 'react';
import Title from './Title';
import { useRef } from 'react';

const Match = ({ game, host, guest }) => {
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
    context.SetHost(534534534535).then((res) => {
      var txt = JSON.stringify(res);
      var obj = JSON.parse(txt);
    });
  }, []);

  return (
    <Link
      to={`/game/${game.id}`}
      onClick={() => {
        GetGameByID(game.id);
      }}
      className='zoom'
      style={{ textDecoration: 'none' }}
    >
      <div
        style={{
          backgroundColor: '#151719',
          padding: '1rem',
          margin: '1rem',
          textAlign: 'center',
        }}
      >
        <div className='wite' style={{ width: '100%' }}>
          <p
            style={{
              padding: '0',
              margin: '0',
              textAlign: 'center',
              display: 'block',
            }}
          >
            {' '}
            at {game.stadium.name}{' '}
          </p>
        </div>
        <div className='row wite'>
          <div className='col-sm-5'>
            <Title team={hostRef.current} />
          </div>
          <div className='col-sm-2'>
            <br />
            <div style={{ padding: 'auto', margin: 'auto' }}>
              <strong>V.S</strong>
            </div>
          </div>
          <div className='col-sm-5'>
            <Title team={guestRef.current} />
          </div>
        </div>
        <div className='wite' style={{ width: '100%' }}>
          {' '}
          at:{game.deadLine}
        </div>
      </div>
    </Link>
  );
};

export default Match;
