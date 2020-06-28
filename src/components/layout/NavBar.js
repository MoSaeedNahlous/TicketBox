import React from 'react';
import { Link } from 'react-router-dom';
import br from '../../res/wave.svg';

const NavBar = (props) => {
  const NavStyle = {
    width: '100%',
    flexGrow: '1',
    backgroundColor: '#FF5E5B',
    padding: '0',
    lineHeight: '1.2',
  };

  return (
    <nav className='navbar navbar-dark navFont' style={NavStyle}>
      <div>
        <Link
          to='/'
          className='navItem'
          style={{
            fontSize: '1.3rem',
            textDecoration: 'none',
            color: '#FFFFEA',
          }}
        >
          <i className='fas fa-ticket-alt' /> TicketBox
          <small className='margin1' style={{ fontSize: '12px' }}>
            for E-Booking Services
          </small>
        </Link>
      </div>

      <div
        style={{
          float: 'right',
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'space-around',
        }}
      >
        <Link
          to='/login'
          className='navItem links'
          style={{ padding: '1.5rem' }}
        >
          <i className='far fa-user' /> Login
        </Link>

        <Link
          to='/profile'
          className='navItem links'
          style={{ padding: '1.5rem' }}
        >
          <i className='far fa-user' /> My profile
        </Link>

        <Link
          to='/register'
          className=' navItemAlt'
          style={{
            float: 'left',
            lineHeight: '1.2',
            padding: '1.5rem',
          }}
        >
          <i className='fas fa-plus' /> Join for free
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#collapsibleNavbar'
          style={{ backgrounColor: 'orange' }}
        >
          <span style={{ backgrounColor: 'orange' }}>Menu</span>
        </button>
      </div>

      <div
        className='collapse navbar-collapse'
        id='collapsibleNavbar'
        style={{
          backgroundImage: `url(${br})`,
          backgroundSize: 'cover',
          backgroundPositionY: '30%',
        }}
      >
        <ul className='navbar-nav'>
          <li className=' menuItem'>
            <Link to='/' className=' menuItem'>
              {' '}
              <i className='fas fa-home' /> Home
            </Link>
          </li>
          <li className='nav-item menuItem'>
            <Link to='/admin' className=' menuItem'>
              {' '}
              <i className='fas fa-home' /> Admin
            </Link>
          </li>
          <li className='nav-item menuItem'>
            <Link to='/About' className=' menuItem'>
              <i className='fas fa-info-circle' /> About
            </Link>
          </li>
          <li className='nav-item menuItem'>
            <Link to='/login' className=' menuItem'>
              {' '}
              <i className='far fa-user' /> Login
            </Link>
          </li>
          <li className='nav-item menuItem'>
            <Link to='/register' className=' menuItem'>
              <i className='fas fa-sign-in-alt' /> signup
            </Link>
          </li>
          <li className='nav-item menuItem'>
            <Link to='/login' className=' menuItem'>
              {' '}
              <i className='fas fa-sign-out-alt' /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
