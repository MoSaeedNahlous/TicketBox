import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='/admin'>
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
              <Link className='dropdown-item' to='/addEmp'>
                Add Employee
              </Link>
              <Link className='dropdown-item' to='/deleteEmp'>
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
              <Link className='dropdown-item' to='/deleteUser'>
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
              <Link className='dropdown-item' to='/addGame'>
                Add Game
              </Link>
              <Link className='dropdown-item' to='/editGame'>
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
              <Link className='dropdown-item' to='/addTeam'>
                Add Team
              </Link>
              <Link className='dropdown-item' to='/editTeam'>
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
              <Link className='dropdown-item' to='/editTicket'>
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
              <Link className='dropdown-item' to='/addStadium'>
                Add Stadium
              </Link>
              <Link className='dropdown-item' to='/editStadium'>
                Edit Stadium
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNav;
