/* eslint-disable no-lone-blocks */
import React, { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';
import { useEffect } from 'react';

const AdminNav = () => {
  const context = useContext(UserGlobalContext);
  const history = useHistory();
  useEffect(() => {
    context.LoadUser();
  }, []);
  {
    window.onpopstate = function () {
      history.replace('/admin/home');
    };
  }
  {
    if (context.user.roles.length !== 2) {
      return <Fragment>{history.push('/404')}</Fragment>;
    } else {
      return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link to='/admin/home'>
            {' '}
            <label className='navbar-brand' style={{ fontSize: '25px' }}>
              Admin Actions
            </label>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Employees Actions
                </a>
                <div
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <Link className='dropdown-item' to='/admin/addEmp'>
                    Add Employee
                  </Link>
                  <Link className='dropdown-item' to='/admin/deleteEmp'>
                    Delete Employee
                  </Link>
                </div>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Users Actions
                </a>
                <div
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <Link className='dropdown-item' to='/admin/editUser'>
                    Edit User
                  </Link>
                </div>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Games Actions
                </a>
                <div
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <Link className='dropdown-item' to='/admin/addGame'>
                    Add Game
                  </Link>
                  <Link className='dropdown-item' to='/admin/editGame'>
                    Edit Game
                  </Link>
                </div>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Teams Actions
                </a>
                <div
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <Link className='dropdown-item' to='/admin/addTeam'>
                    Add Team
                  </Link>
                  <Link className='dropdown-item' to='/admin/editTeam'>
                    Edit Team
                  </Link>
                </div>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Tickets Actions
                </a>
                <div
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <Link className='dropdown-item' to='/admin/editTicket'>
                    Ticket Actions
                  </Link>
                </div>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Stadiums Actions
                </a>
                <div
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <Link className='dropdown-item' to='/admin/addStadium'>
                    Add Stadium
                  </Link>
                  <Link className='dropdown-item' to='/admin/editStadium'>
                    Edit Stadium
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
};

export default AdminNav;
