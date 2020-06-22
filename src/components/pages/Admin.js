import React, { Fragment } from 'react';
import AdminNav from '../layout/AdminNav';
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';
import GendersChart from '../Charts/GendersChart';
import AgeStaticsChart from '../Charts/AgeStaticsChart';

const Admin = () => {
  const [usersCounter, setUsersCounter] = useState(0);
  const [empsCounter, setEmpsCounter] = useState(0);

  return (
    <Fragment>
      <AdminNav />
      <div className='container'>
        <br />

        <div className='card ' style={{ width: '100%' }}>
          <div className='card-header'>
            Statics
            <button style={{ float: 'right' }}>
              <i className='fa fa-refresh' aria-hidden='true'></i>
            </button>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>Users Counter</h5>
            <p className='card-text'>Current users: {usersCounter}</p>
            <hr />
            <h5 className='card-title'>Employees Counter</h5>
            <p className='card-text'>Current employees: {empsCounter}</p>
          </div>
          <br />
          <GendersChart />
          <br />
          <AgeStaticsChart />
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
