import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { StadiumGlobalContext } from './../../contexts/stadiumContext/StadiumGlobalState';
import { TeamGlobalContext } from './../../contexts/teamContext/TeamGlobalState';
import Row from './Row';
import Row2 from './Row2';

const Tables = () => {
  const context = useContext(StadiumGlobalContext);
  const context2 = useContext(TeamGlobalContext);

  useEffect(() => {
    context.GetStadiums();
    context2.GetTeams();
  }, []);

  return (
    <div className='container'>
      <ul className='list-group'>
        <li
          className='list-group-item links'
          style={{ backgroundColor: '#FF5E5B', color: '#FFFFEA' }}
        >
          Teams
        </li>

        {context2.teams.length > 5 ? (
          <Fragment>
            {context2.teams.slice(0, 5).map((team) => (
              <Row2 team={team} key={team.id} />
            ))}
            <li
              className='list-group-item   links '
              style={{ backgroundColor: '#151719' }}
            >
              <Link to='/Teams'>
                <button className='btn btn-primary'> more </button>
              </Link>
            </li>
          </Fragment>
        ) : (
          context2.teams.map((team1) => <Row2 team={team1} key={team1.id} />)
        )}
      </ul>
      <br />
      <ul className='list-group'>
        <li
          className='list-group-item links'
          style={{ backgroundColor: '#FF5E5B', color: '#FFFFEA' }}
        >
          Stadiums
        </li>

        {context.stadiums.length > 5 ? (
          <Fragment>
            {context.stadiums.slice(0, 5).map((stad) => (
              <Row stadium={stad} key={stad.stadiumId} />
            ))}
            <li
              className='list-group-item   links '
              style={{ backgroundColor: '#151719' }}
            >
              <Link to='/Stadiums'>
                <button className='btn btn-primary'> more </button>
              </Link>
            </li>
          </Fragment>
        ) : (
          context.stadiums.map((stad1) => (
            <Row stadium={stad1} key={stad1.stadiumId} />
          ))
        )}
      </ul>
    </div>
  );
};

export default Tables;
