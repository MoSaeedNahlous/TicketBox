import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameGlobalContext } from '../../../contexts/gameContext/GameGlobalState';
import { useEffect } from 'react';

const Match = ({ game }) => {
  const context = useContext(GameGlobalContext);
  const { GetGameByID } = context;
  useEffect(() => {
    context.SetGuest(game.gameTeams.guest);
    context.SetHost(game.gameTeams.host);
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
            <div>
              <img
                width='75'
                height='75'
                src={context.host.image}
                alt={context.host.name + 'Logo'}
              />{' '}
              {context.host.name}
            </div>
          </div>
          <div className='col-sm-2'>
            <br />
            <div style={{ padding: 'auto', margin: 'auto' }}>
              <strong>V.S</strong>
            </div>
          </div>
          <div className='col-sm-5'>
            <div>
              {context.guest.name}
              <img
                width='75'
                height='75'
                src={context.guest.image}
                alt={context.guest.name + 'Logo'}
              />
            </div>
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
