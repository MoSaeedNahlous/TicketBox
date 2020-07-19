import React, { useEffect, Fragment } from 'react';
import GameTableRow from './GameTableRow';
import { useContext } from 'react';
import { GameGlobalContext } from '../../../../contexts/gameContext/GameGlobalState';

const GameTable = () => {
  const context = useContext(GameGlobalContext);

  useEffect(() => {
    context.GetGames();
  }, []);

  return (
    <Fragment>
      <br />
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Host Team</th>
            <th scope='col'>Guest Team</th>
            <th scope='col'>Stadium</th>
            <th scope='col'>DeadLine</th>
            <th scope='col'>Create Time</th>
            <th scope='col'>Last Update Time</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {context.games.map((Game) => (
            <GameTableRow
              key={Game.id}
              Game={Game}
              host={Game.gameTeams.host}
              guest={Game.gameTeams.guest}
              Stad={Game.stadium}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default GameTable;
