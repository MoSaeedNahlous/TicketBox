import React from 'react';
import youssef from '../../res/youssef.png';
import aj from '../../res/aj.jpg';
import msn from '../../res/msn.jpg';
import imag from '../../res/Page-Turner.svg';

const WorkerCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${imag})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPositionX: '75%',
      }}
    >
      <div className='container'>
        <br />
        <h1 className='wite' style={{ textAlign: 'center', fontSize: '4rem' }}>
          Our Team
        </h1>
        <br />
        <div className='row'>
          <div className='col-md-4'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img src={youssef} alt='Avatar' height='100%' width='100%' />
                </div>
                <div className='flip-card-back'>
                  <div style={{ paddingTop: '25%' }}>
                    <h1>Youssef Kafa</h1>
                    <p>BackEnd Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img src={msn} alt='Avatar' height='100%' width='100%' />
                </div>
                <div className='flip-card-back'>
                  <div style={{ paddingTop: '25%' }}>
                    <h1>Mohammad Saeed Nahlous</h1>
                    <p>FrontEnd Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img src={aj} alt='Avatar' height='100%' width='100%' />
                </div>
                <div className='flip-card-back'>
                  <div style={{ paddingTop: '25%' }}>
                    <h1>Abdullah Jeero</h1>
                    <p>Android Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default WorkerCard;
