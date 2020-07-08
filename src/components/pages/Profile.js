/* eslint-disable no-lone-blocks */
import React, { Fragment } from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import { useContext } from 'react';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import bg from '../../res/Page-Turner.svg';
import Spinner from '../layout/Spinner';

const Profile = () => {
  const history = useHistory();
  const context = useContext(UserGlobalContext);
  useEffect(() => {
    context.LoadUser();
  }, []);

  {
    while (context.isLoading) {
      return <Spinner />;
    }
    return (
      <Fragment>
        <NavBar />
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            backgroundPositionX: '75%',
            color: 'black',
          }}
        >
          <div className='container'>
            <br />
            <h1 style={{ textAlign: 'center', border: 'dotted 2px grey' }}>
              My Profile
            </h1>
            <hr />
            <div className='row' style={{ textAlign: 'center' }}>
              <div className='col-md-3'>
                <h2 style={{ textAlign: 'center', border: 'solid 2px grey' }}>
                  My information
                </h2>
                <hr />
                <h5>Name : {context.user.name}</h5>
                <h5>Credits : {context.user.credit}</h5>
              </div>
              <div
                className='col-md-9'
                style={{ borderLeft: '2px solid black' }}
              >
                <h2 style={{ textAlign: 'center', border: 'solid 2px grey' }}>
                  My Tickets
                </h2>
                <hr />
                <div className='container'></div>
              </div>
            </div>
          </div>
          <br />
        </div>

        <Footer />
      </Fragment>
    );
  }
};

export default Profile;
