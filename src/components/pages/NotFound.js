import React from 'react';
import img from '../../res/corona.png';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push('/');
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt='image' style={{ width: '100%', height: '100%' }} />
      <h1>ERROR 404</h1>
      <h3>Press here to navigate to homePage</h3>
      <span>
        <button className='btn btn-primary' onClick={goToHome}>
          HomePage
        </button>
      </span>
    </div>
  );
};

export default NotFound;
