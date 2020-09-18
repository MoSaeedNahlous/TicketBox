import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GameGlobalContext } from '../../contexts/gameContext/GameGlobalState';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import bg from '../../res/bghome.jpg';
import MatchTicketsTable from './MatchTicketsTable';
import Spinner from '../layout/Spinner';

const MatchPage = ({ match }) => {
  const context = useContext(GameGlobalContext);

  useEffect(() => {
    context.ViewTickets(match.params.id);
    context.GetGameByID(match.params.id);

    context.SetHost(context.game.gameTeams.host);
    context.SetGuest(context.game.gameTeams.guest);
    context.SetStadium(context.game.stadium);
  }, [context.game.gameTeams.host, context.game.gameTeams.guest]);
  while (context.host === null) {
    return <Spinner />;
  }
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPositionX: '75%',
      }}
    >
      <NavBar />
      <div className='container' style={{ paddingTop: '5%' }}>
        <div className='row'>
          <div style={{ textAlign: 'center' }} className='col-sm-4'>
            <div>
              <img
                src={context.host.image}
                alt={context.host.name + ' Image'}
                className='wite'
                width='250px'
                height='250px'
              />
            </div>
            <div>
              <h2 className='wite'>{context.host.name}</h2>
            </div>
          </div>
          <div className='col-sm-4'>
            <div>
              <h1
                className='wite'
                style={{ textAlign: 'center', marginTop: '30%' }}
              >
                V.S
              </h1>
            </div>
          </div>
          <div style={{ textAlign: 'center' }} className='col-sm-4'>
            <div>
              <img
                src={context.guest.image}
                alt={context.guest.name + ' Image'}
                className='wite'
                width='250px'
                height='250px'
              />
            </div>
            <div>
              <h2 className='wite'>{context.guest.name}</h2>
            </div>
          </div>
        </div>

        <br />
        <br />
        <hr />
        <div
          className='wite'
          style={{ textAlign: 'center', borderBottom: 'white 1px solid' }}
        >
          <h3 style={{ textAlign: 'center', borderBottom: 'white 1px solid' }}>
            MatchInfo
          </h3>
          <br />
          <h4>
            Location : {context.stadium.city} City in {context.stadium.name}{' '}
            Stadium
          </h4>
          <h4>Deadline : {context.game.deadLine}</h4>
        </div>
        <hr />

        <hr className='wite' />
        <div className='row'>
          <div
            className='col-sm-6 wite'
            style={{ borderRight: 'white 4px solid' }}
          >
            <h3 style={{ textAlign: 'center' }}>Ticket Types</h3>
            <MatchTicketsTable tickets={context.tickets} />
            <br />
          </div>
          <div className='col-sm-6 wite'>
            <h3 style={{ textAlign: 'center' }}>Stadium</h3>
            <img
              src={context.stadium.image}
              alt='Stadium Imgae'
              width='100%'
              height='80%'
            />
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default MatchPage;
