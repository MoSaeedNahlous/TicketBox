import React from 'react';
import newsimg from '../res/news.jpg';
import goal from '../res/goal.png';
import skysports from '../res/skysports.png';
import espn from '../res/espn.png';
const News = () => {
  return (
    <div>
      <br />
      <div
        style={{
          textAlign: 'center',
          border: 'solid #151719 2px',
          backgroundColor: '#FF5E5B',
          color: '#FFFFEA',
        }}
      >
        <h1 style={{ fontSize: '4rem' }}>Latest News</h1>
      </div>
      <br />
      <div className='row' style={{ width: '100%' }}>
        <div className='col-sm-4'>
          <div className='bg-wite'>
            <div
              style={{
                backgroundImage: `url(${goal})`,
                backgroundPosition: 'center',
                height: '70px',
                width: '100%',
                backgroundSize: '170px 100px',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
          </div>
          <iframe
            width='100%'
            height='700'
            src='https://rss.app/embed/v1/8HgqAC5HDAkoydeP'
            frameBorder='0'
          />
        </div>
        <div className='col-sm-4'>
          <div className='bg-wite'>
            <div
              style={{
                backgroundImage: `url(${skysports})`,
                backgroundPosition: 'center',
                height: '70px',
                width: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
          </div>
          <iframe
            width='100%'
            height='700'
            src='https://rss.app/embed/v1/dzU8gHtMyi9o9j7I'
            frameBorder='0'
          />
        </div>
        <div className='col-sm-4'>
          <div className='bg-wite'>
            <div
              style={{
                backgroundImage: `url(${espn})`,
                backgroundPosition: 'center',
                height: '70px',
                width: '100%',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
          </div>
          <iframe
            width='100%'
            height='700'
            src='https://rss.app/embed/v1/VIKraBX4hvFh1ayg'
            frameBorder='0'
          />
        </div>
      </div>

      <br />
    </div>
  );
};

export default News;
