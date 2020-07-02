import React, { Fragment } from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import { useContext } from 'react';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';
import { useEffect } from 'react';

const Profile = () => {
  const context = useContext(UserGlobalContext);
  useEffect(() => {
    context.LoadUser();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <h5>Name : {context.user.name}</h5>
            <h5>Credits : {context.user.credit}</h5>
          </div>
          <div className='col-md-9'>
            <h2 style={{ textAlign: 'center' }}>My Tickets</h2>
            <hr />
            <div className='container'></div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Profile;
