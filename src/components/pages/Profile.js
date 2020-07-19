/* eslint-disable no-lone-blocks */
import React, { Fragment } from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import { useContext } from 'react';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';
import { useEffect } from 'react';
import bg from '../../res/Page-Turner.svg';
import Spinner from '../layout/Spinner';
import { useState } from 'react';
import Ticket from '../layout/Ticket';

const Profile = () => {
  const context = useContext(UserGlobalContext);
  const { LoadUser, GetTickets } = context;
  const [state, setState] = useState({
    name: context.user.name,
    email: context.user.email,
    age: context.user.age,
    gender: context.user.gender,
    id: context.user.id,
  });

  useEffect(() => {
    LoadUser();
  }, []);

  useEffect(() => {
    GetTickets(context.user.id);
  }, [context.user.id]);
  const closeModal = () => {
    document.getElementById('viewModal').style.display = 'none';
  };
  const openModal = () => {
    document.getElementById('viewModal').style.display = 'block';
    setState({
      name: context.user.name,
      email: context.user.email,
      age: context.user.age,
      gender: context.user.gender,
    });
  };
  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    closeModal();
  };

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
            <h1
              style={{
                textAlign: 'center',
                border: 'dotted 2px grey',
                color: 'white',
              }}
            >
              My Profile
            </h1>
            <hr />
            <div className='row' style={{ textAlign: 'center' }}>
              <div className='col-sm-4'>
                <h2 style={{ textAlign: 'center', border: 'solid 2px grey' }}>
                  My information
                </h2>
                <hr />
                <h5>Name : {context.user.name}</h5>
                <h5>Credits : {context.user.credit}</h5>
                <h5>Email: {context.user.email}</h5>
                <h5>Age : {context.user.age}</h5>
                <h5>Gender : {context.user.gender ? 'Male' : 'Female'}</h5>
                <h5>Created At: {context.user.createdAt}</h5>
                <h5>Last Update: {context.user.updatedAt}</h5>
                <button className='btn btn-dark' onClick={openModal}>
                  Edit My information
                </button>
              </div>
              <div
                className='col-sm-8'
                style={{ borderLeft: '2px solid black' }}
              >
                <h2 style={{ textAlign: 'center', border: 'solid 2px grey' }}>
                  My Tickets
                </h2>
                <hr />

                <div className='container'>
                  <div className='MyCards'>
                    {context.tickets === [] ? (
                      <h3>There's no tickets....</h3>
                    ) : (
                      context.tickets.map((item) => (
                        <Ticket ticket={item} key={item.id} />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div id='viewModal' style={{ display: 'none' }}>
            <div
              id='viewModalContent'
              className='container'
              style={{ backgroundColor: '#fff' }}
            >
              <form onSubmit={onSubmitHandler}>
                <h1 style={{ textAlign: 'center' }}>Edit My information</h1>
                <span id='closeModal' onClick={closeModal}>
                  &times;
                </span>
                <hr />
                <div className='form-group'>
                  <label>Name(*only Letters)</label>
                  <input
                    type='text'
                    pattern='^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$'
                    maxLength='20'
                    minLength='2'
                    className='form-control'
                    value={state.name}
                    name='name'
                    placeholder='FullName'
                    style={{
                      width: '50%',
                      backgroundColor: '#fff',
                      color: 'black',
                    }}
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Email address</label>
                  <input
                    type='email'
                    className='form-control'
                    value={state.email}
                    name='email'
                    placeholder='Email'
                    style={{
                      width: '50%',
                      backgroundColor: '#fff',
                      color: 'black',
                    }}
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Gender</label>
                  <select
                    required
                    value={state.gender}
                    onChange={onChangeHandler}
                    name='gender'
                    className='form-control'
                    style={{
                      width: '50%',
                      backgroundColor: '#fff',
                      color: 'black',
                    }}
                  >
                    <option value='' hidden style={{ color: 'grey' }}>
                      Select Gender
                    </option>
                    <option
                      value='false'
                      style={{
                        color: 'black',
                        backgroundColor: 'grey',
                      }}
                    >
                      Female
                    </option>
                    <option
                      value='true'
                      style={{
                        color: 'black',
                        backgroundColor: 'grey',
                      }}
                    >
                      Male
                    </option>
                  </select>
                </div>
                <div className='form-group'>
                  <label>Age</label>
                  <input
                    onChange={onChangeHandler}
                    className='form-control'
                    placeholder='Age'
                    name='age'
                    value={state.age}
                    type='number'
                    min='18'
                    max='100'
                    required
                    style={{
                      width: '50%',
                      backgroundColor: '#fff',
                      color: 'black',
                    }}
                  />
                </div>
                <div className='form-group'>
                  <button className='btn btn-dark'>Edit My information</button>
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
};

export default Profile;
