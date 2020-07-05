import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Covid19GlobalContext } from '../contexts/Covid19Tracker/Covid19GlobalState';
import covid19 from '../res/covid19.jpg';
import Spinner from './pages/Spinner';

const Covid19Tracker = () => {
  const context = useContext(Covid19GlobalContext);

  useEffect(() => {
    context.GetDataCovid19();
  }, [context, context.worldData]);

  const closeModal = () => {
    document.getElementById('trackerUI').style.display = 'none';
  };
  if (context.isLoading) {
    return <Spinner />;
  } else
    return (
      <div
        id='trackerUI'
        className='wite'
        style={{
          backgroundImage: `url(${covid19})`,
          backgroundSize: 'cover',
          backgroundPosition: '50%',
        }}
      >
        <span id='closeModal' onClick={closeModal} style={{ fontSize: '20px' }}>
          &times;
        </span>
        <h2 style={{ textAlign: 'center', paddingTop: '1%' }}>
          Covid-19 Global State
        </h2>

        <div className='row' style={{ padding: '3%', width: '100%' }}>
          <div className='col-sm-2'>
            <div
              style={{
                background: 'rgba(250,250,250,0.5)',
                color: 'black',
                borderRadius: '5%',
                textAlign: 'center',
              }}
            >
              <p>
                New Confirmed <i className='fas fa-procedures' />
              </p>
              <hr />
              {context.worldData.NewConfirmed}
            </div>
          </div>
          <div className='col-sm-2'>
            <div
              style={{
                background: 'rgba(250,250,250,0.5)',
                color: 'black',
                borderRadius: '5%',
                textAlign: 'center',
              }}
            >
              <p>
                Total Confirmed <i className='fas fa-procedures' />
              </p>
              <hr />
              {context.worldData.TotalConfirmed}
            </div>
          </div>
          <div className='col-sm-2'>
            <div
              style={{
                background: 'rgba(250,250,250,0.5)',
                color: 'red',
                borderRadius: '5%',
                textAlign: 'center',
              }}
            >
              <p>
                New Deaths <i className='fas fa-skull-crossbones' />
              </p>

              <hr />
              {context.worldData.NewDeaths}
            </div>
          </div>
          <div className='col-sm-2'>
            <div
              style={{
                background: 'rgba(250,250,250,0.5)',
                color: 'red',
                borderRadius: '5%',
                textAlign: 'center',
              }}
            >
              <p>
                Total Deaths <i className='fas fa-skull-crossbones' />
              </p>
              <hr />
              {context.worldData.TotalDeaths}
            </div>
          </div>
          <div className='col-sm-2'>
            <div
              style={{
                background: 'rgba(250,250,250,0.5)',
                color: 'green',
                borderRadius: '5%',
                textAlign: 'center',
              }}
            >
              <p>
                New Recovered <i className='fas fa-user-check' />
              </p>
              <hr />
              {context.worldData.NewRecovered}
            </div>
          </div>
          <div className='col-sm-2'>
            <div
              style={{
                background: 'rgba(250,250,250,0.5)',
                color: 'green',
                borderRadius: '5%',
                textAlign: 'center',
              }}
            >
              <p>
                Total Recovered <i className='fas fa-user-check' />
              </p>
              <hr />
              {context.worldData.TotalRecovered}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Covid19Tracker;
