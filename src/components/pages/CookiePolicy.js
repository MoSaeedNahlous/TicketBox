import React from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import imag from '../../res/Page-Turner.svg';

const CookiePolicy = () => {
  return (
    <div
      className='wite'
      style={{
        backgroundImage: `url(${imag})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPositionX: '75%',
      }}
    >
      <NavBar />
      <div
        className='container'
        style={{ textAlign: 'center', color: 'black' }}
      >
        <br />
        <h1>
          <i className='fas fa-cookie' style={{ color: '#FF922B' }} /> Cookie
          Policy <i className='fas fa-cookie' style={{ color: '#FF922B' }} />
        </h1>
        <br />
        <p>
          We employ the use of cookies. By accessing TicketBox, you agreed to
          use cookies in agreement with the TicketBox's Privacy Policy. Most
          interactive websites use cookies to let us retrieve the user’s details
          for each visit. Cookies are used by our website to enable the
          functionality of certain areas to make it easier for people visiting
          our website. Some of our affiliate/advertising partners may also use
          cookies.
        </p>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
