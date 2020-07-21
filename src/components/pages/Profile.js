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
    password: '',
    roles: context.user.roles,
    credit: context.user.credit,
  });
  const [passwordSt, setPasswordSt] = useState({
    idOfUser: context.user.id,
    oldPass: '',
    newPass: '',
    newPass2: '',
  });

  useEffect(() => {
    context.ClearError();
    context.ClearResponse();
    LoadUser();
  }, []);

  useEffect(() => {
    GetTickets(context.user.id);
  }, [context.user.id]);
  const closeModal = () => {
    document.getElementById('viewModal').style.display = 'none';
    context.ClearError();
    context.ClearResponse();
    setState({
      name: context.user.name,
      email: context.user.email,
      age: context.user.age,
      gender: context.user.gender,
      password: '',
      roles: context.user.roles,
      credit: context.user.credit,
      id: context.user.id,
    });
  };
  const closeModal3 = () => {
    document.getElementById('viewModal3').style.display = 'none';
    context.ClearError();
    context.ClearResponse();
    setPasswordSt({
      idOfUser: context.user.id,
      oldPass: '',
      newPass: '',
      newPass2: '',
    });
  };

  const openModal = () => {
    document.getElementById('viewModal').style.display = 'block';
    setState({
      name: context.user.name,
      email: context.user.email,
      age: context.user.age,
      gender: context.user.gender,
      password: '',
      roles: context.user.roles,
      credit: context.user.credit,
      id: context.user.id,
    });
  };

  const openModal3 = () => {
    document.getElementById('viewModal3').style.display = 'block';
    setPasswordSt({
      idOfUser: context.user.id,
      oldPass: '',
      newPass: '',
      newPass2: '',
    });
  };
  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onChangeHandler2 = (e) => {
    setPasswordSt({ ...passwordSt, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    context.EditUser(state);
  };
  const onSubmitHandler2 = (e) => {
    e.preventDefault();
    if (passwordSt.newPass === passwordSt.newPass2) {
      console.log({
        idOfUser: context.user.id,
        oldPass: passwordSt.oldPass,
        newPass: passwordSt.newPass,
      });
      context.EditUserPassword({
        idOfUser: context.user.id,
        oldPass: passwordSt.oldPass,
        newPass: passwordSt.newPass,
      });
    } else {
      alert('new passwords are not matched!!');
    }
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
                <br />
                <button className='btn btn-dark' onClick={openModal3}>
                  Change My Password
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
                    onChange={onChangeHandler}
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
                  <label>Enter your password</label>
                  <input
                    onChange={onChangeHandler}
                    className='form-control'
                    placeholder='Password'
                    name='password'
                    value={state.password}
                    type='password'
                    minLength='8'
                    required
                    style={{
                      width: '50%',
                      backgroundColor: '#fff',
                      color: 'black',
                    }}
                  />
                </div>
                <div role='alert' style={{ width: '50%' }}>
                  {context.error && (
                    <strong style={{ color: 'red' }}>
                      &times; {context.error}{' '}
                    </strong>
                  )}
                </div>
                <div role='alert' style={{ width: '50%' }}>
                  {context.response && (
                    <strong style={{ color: 'green' }}>
                      {context.response}{' '}
                    </strong>
                  )}
                </div>
                <div className='form-group'>
                  <button className='btn btn-dark'>Edit My information</button>
                </div>
                <br />
              </form>
            </div>
          </div>

          {/*ggregergegrgergergegregerafdsfsfdsfsdfsdfsdfsgdsgdrgshsfherherharnhinagiuasipgnpasgnasipniyngergergerg*/}

          <div id='viewModal3' style={{ display: 'none' }}>
            <div
              id='viewModalContent3'
              className='container'
              style={{ backgroundColor: '#fff' }}
            >
              <form onSubmit={onSubmitHandler2}>
                <h1 style={{ textAlign: 'center' }}>Change My Password</h1>
                <span id='closeModal' onClick={closeModal3}>
                  &times;
                </span>
                <hr />
                <div className='form-group'>
                  <label>Enter New password</label>
                  <input
                    onChange={onChangeHandler2}
                    className='form-control'
                    placeholder='New Password'
                    name='newPass'
                    value={passwordSt.newPass}
                    type='password'
                    minLength='8'
                    required
                    style={{
                      width: '50%',
                      backgroundColor: '#fff',
                      color: 'black',
                    }}
                  />
                </div>
                <div className='form-group'>
                  <label>Re-Enter New password</label>
                  <input
                    onChange={onChangeHandler2}
                    className='form-control'
                    placeholder='New Password'
                    name='newPass2'
                    value={passwordSt.newPass2}
                    type='password'
                    minLength='8'
                    required
                    style={{
                      width: '50%',
                      backgroundColor: '#fff',
                      color: 'black',
                    }}
                  />
                </div>

                <div className='form-group'>
                  <label>Enter your old password</label>
                  <input
                    onChange={onChangeHandler2}
                    className='form-control'
                    placeholder=' Old Password'
                    name='oldPass'
                    value={passwordSt.oldPass}
                    type='password'
                    minLength='8'
                    required
                    style={{
                      width: '50%',
                      backgroundColor: '#fff',
                      color: 'black',
                    }}
                  />
                </div>
                <div role='alert' style={{ width: '50%' }}>
                  {context.error && (
                    <strong style={{ color: 'red' }}>
                      &times; {context.error}{' '}
                    </strong>
                  )}
                </div>
                <div role='alert' style={{ width: '50%' }}>
                  {context.response && (
                    <strong style={{ color: 'green' }}>
                      {context.response}{' '}
                    </strong>
                  )}
                </div>
                <div className='form-group'>
                  <button className='btn btn-dark'>Change My Password</button>
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
