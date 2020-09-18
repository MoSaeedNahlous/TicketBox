import React from 'react';
import { Link } from 'react-router-dom';

const StadiumCard = ({ stadium }) => {
  return (
    <Link
      to={`/stadium/${stadium.stadiumId}`}
      style={{ textDecoration: 'none' }}
      className='linksStad'
    >
      <div
        className='bg-wite zoom links'
        style={{
          width: '2 rem',
          margin: '10%',
          padding: '5%',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderRadius: '10%',
          textDecoration: 'none',
        }}
      >
        <div className='card-body'>
          <img
            src={stadium.image}
            className='card-img-top links'
            alt={stadium.name}
            style={{ borderRadius: '10%' }}
          />
        </div>
        <h6
          className='card-text'
          style={{
            textAlign: 'center',
            textDecoration: 'none',
            border: '1px solid ',
          }}
        >
          <strong>{stadium.name}</strong>
        </h6>
      </div>
    </Link>
  );
};

export default StadiumCard;
