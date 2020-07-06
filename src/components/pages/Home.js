import React, { useEffect } from 'react';
import ImageSlider from '../layout/ImageSlider';
import Matches from '../layout/match/Matches';
import Navbar from '../layout/NavBar';
import NavImg from '../../res/footer.png';
import Footer from '../layout/Footer';
import Specs from '../layout/Specs';
import ScrollButton from '../layout/ScrollButton';
import Tables from '../layout/Tables';
import News from '../News';
import bg from '../../res/bghome.jpg';
import epl from '../../res/pl.png';
import laliga from '../../res/laliga.png';
import sa from '../../res/sa.png';
import bundes from '../../res/bundes.png';
import liver from '../../res/liver.png';
import mc from '../../res/mc.png';
import mu from '../../res/mu.png';
import che from '../../res/che.png';
import fcb from '../../res/fcb.png';
import rm from '../../res/rm.png';
import atl from '../../res/atl.png';
import vl from '../../res/vl.png';
import juve from '../../res/juve.png';
import inter from '../../res/inter.png';
import ac from '../../res/ac.png';
import nap from '../../res/nap.png';
import bm from '../../res/bm.png';
import bvb from '../../res/bvb.png';
import b04 from '../../res/b04.png';
import rb from '../../res/rb.png';
import Covid19Tracker from '../Covid19Tracker';
import { useContext } from 'react';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';

const Home = () => {
  const context = useContext(UserGlobalContext);

  useEffect(() => {
    context.LoadUser();
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPositionX: '75%',
      }}
    >
      <Navbar bg={NavImg} />
      <ImageSlider scrollStepInPx='1' delayInMs='16.66' />
      <Specs />
      <Covid19Tracker />

      <div
        style={{
          textAlign: 'center',
          border: 'solid #151719 2px',
          backgroundColor: '#FF5E5B',
          color: '#FFFFEA',
        }}
      >
        <h1 style={{ fontSize: '4rem' }}>Upcoming Matches</h1>
      </div>

      <br />
      <div className='row' style={{ width: '100%' }}>
        <div className='col-md-3 container'>
          <Tables />
        </div>
        <div className='col-md-9 container'>
          <Matches />
        </div>
      </div>

      <News />

      <div
        className='crimsonRedBg wite'
        style={{ textAlign: 'center', border: 'solid #151719 2px' }}
      >
        <h1 style={{ fontSize: '4rem' }}>Top Leagues</h1>
      </div>
      <div className='row' style={{ padding: '1.5rem', width: '100%' }}>
        <div className='col-sm-3'>
          <ul className='list-group'>
            <li className='list-group-item crimsonRedBg wite links'>
              <a
                style={{
                  color: '#FFFFEA',
                  cursor: 'pointer',
                }}
                className='links'
                href='https://www.premierleague.com'
                target='_blank'
              >
                <img src={epl} width='35px' height='35px' alt='logo' /> Premium
                League
              </a>
            </li>
            <li className='list-group-item'>
              <a
                style={{
                  color: '#FFFFEA',
                  cursor: 'pointer',
                }}
                className='links'
                href='https://www.liverpoolfc.com/'
                target='_blank'
              >
                <img src={liver} width='35px' height='35px' alt='logo' />{' '}
                Liverpool
              </a>
            </li>
            <li className='list-group-item'>
              <a
                style={{
                  color: '#FFFFEA',
                  cursor: 'pointer',
                }}
                className='links'
                href='https://www.mancity.com/'
                target='_blank'
              >
                <img src={mc} width='35px' height='35px' alt='logo' />{' '}
                Manchester City
              </a>
            </li>
            <li className='list-group-item'>
              <a
                style={{
                  color: '#FFFFEA',
                  cursor: 'pointer',
                }}
                className='links'
                href='https://www.manutd.com/'
                target='_blank'
              >
                <img src={mu} width='35px' height='35px' alt='logo' />{' '}
                Manchester United
              </a>
            </li>
            <li className='list-group-item'>
              <a
                style={{
                  color: '#FFFFEA',
                  cursor: 'pointer',
                }}
                className='links'
                href='https://www.chelseafc.com/en'
                target='_blank'
              >
                <img src={che} width='35px' height='35px' alt='logo' /> Chelsea
              </a>
            </li>
          </ul>
        </div>
        <div className='col-sm-3'>
          <ul className='list-group'>
            <li className='list-group-item crimsonRedBg wite links'>
              <a
                style={{
                  color: '#FFFFEA',
                  cursor: 'pointer',
                }}
                className='links'
                href='https://www.laliga.com/en-GB'
                target='_blank'
              >
                <img src={laliga} width='35px' height='35px' alt='logo' /> La
                Liga
              </a>
            </li>
            <li className='list-group-item'>
              <img src={fcb} width='35px' height='35px' alt='logo' /> Barcelona
            </li>
            <li className='list-group-item'>
              <img src={rm} width='35px' height='35px' alt='logo' /> Real Madrid
            </li>
            <li className='list-group-item'>
              <img src={atl} width='35px' height='35px' alt='logo' /> Atletico
              Madrid
            </li>
            <li className='list-group-item'>
              <img src={vl} width='35px' height='35px' alt='logo' /> Valencia
            </li>
          </ul>
        </div>
        <div className='col-sm-3'>
          <ul className='list-group'>
            <li className='list-group-item crimsonRedBg wite links'>
              <a
                style={{
                  color: '#FFFFEA',
                  cursor: 'pointer',
                }}
                className='links'
                href='http://www.legaseriea.it/en'
                target='_blank'
              >
                <img src={sa} width='35px' height='35px' alt='logo' /> Serie A
              </a>
            </li>
            <li className='list-group-item'>
              <img src={inter} width='35px' height='35px' alt='logo' /> Inter
              Milan
            </li>
            <li className='list-group-item'>
              <img src={ac} width='35px' height='35px' alt='logo' /> AC Milan
            </li>
            <li className='list-group-item'>
              <img src={juve} width='35px' height='35px' alt='logo' /> Juventus
            </li>
            <li className='list-group-item'>
              <img src={nap} width='35px' height='35px' alt='logo' /> Napoli
            </li>
          </ul>
        </div>
        <div className='col-sm-3'>
          <ul className='list-group'>
            <li className='list-group-item crimsonRedBg wite links'>
              <a
                style={{
                  color: '#FFFFEA',
                  cursor: 'pointer',
                }}
                className='links'
                href='https://www.bundesliga.com/en/bundesliga'
                target='_blank'
              >
                <img src={bundes} width='35px' height='35px' alt='logo' />{' '}
                BundesLiga
              </a>
            </li>
            <li className='list-group-item'>
              <img src={bm} width='35px' height='35px' alt='logo' /> Bayern
              Munchin
            </li>
            <li className='list-group-item'>
              <img src={bvb} width='35px' height='35px' alt='logo' /> Borussia
              Dortmund
            </li>
            <li className='list-group-item'>
              <img src={b04} width='35px' height='35px' alt='logo' /> RB Liepzig
            </li>
            <li className='list-group-item'>
              <img src={rb} width='35px' height='35px' alt='logo' /> Bayern
              Leverkusen
            </li>
          </ul>
        </div>
      </div>

      <Footer />
      <ScrollButton />
    </div>
  );
};
export default Home;
