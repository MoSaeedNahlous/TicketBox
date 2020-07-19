import React, { Fragment } from 'react';
import AdminNav from '../layout/AdminNav';
import GendersChart from '../Charts/GendersChart';
import AgeStaticsChart from '../Charts/AgeStaticsChart';

const Admin = () => {
  return (
    <Fragment>
      <AdminNav />
      <div className='container'>
        <br />

        <div className='card ' style={{ width: '100%' }}>
          <div className='card-header'>Statics</div>

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
