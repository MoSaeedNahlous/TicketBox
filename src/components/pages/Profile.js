/* eslint-disable no-lone-blocks */
import React, { Fragment, useRef } from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import { useContext } from 'react';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';
import { useEffect } from 'react';
import bg from '../../res/Page-Turner.svg';
import Spinner from '../layout/Spinner';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TestGlobalContext } from '../../contexts/testContext/TestGlobalState';

const Profile = () => {
  const context = useContext(UserGlobalContext);
  const context2 = useContext(TestGlobalContext);
  const { LoadUser } = context;
  const [state, setState] = useState({ email: '' });
  const [passwordSt, setPasswordSt] = useState({
    idOfUser: context.user.id,
    oldPass: '',
    newPass: '',
    newPass2: '',
  });

  const showPassword1 = () => {
    var icon = document.getElementById('eyeIcon1');
    var input = document.getElementById('input1');
    if (icon.className === 'fa fa-eye' && input.type === 'password') {
      icon.className = 'fa fa-eye-slash';
      input.type = 'text';
    } else {
      icon.className = 'fa fa-eye';
      input.type = 'password';
    }
  };
  const showPassword2 = () => {
    var icon = document.getElementById('eyeIcon2');
    var input = document.getElementById('input2');
    if (icon.className === 'fa fa-eye' && input.type === 'password') {
      icon.className = 'fa fa-eye-slash';
      input.type = 'text';
    } else {
      icon.className = 'fa fa-eye';
      input.type = 'password';
    }
  };
  const showPassword3 = () => {
    var icon = document.getElementById('eyeIcon3');
    var input = document.getElementById('input3');
    if (icon.className === 'fa fa-eye' && input.type === 'password') {
      icon.className = 'fa fa-eye-slash';
      input.type = 'text';
    } else {
      icon.className = 'fa fa-eye';
      input.type = 'password';
    }
  };

  const ref = useRef(false);

  useEffect(() => {
    LoadUser();
    context2.LoadUser();
    context.ClearError();
    context.ClearResponse();
  }, []);

  const closeModal = () => {
    document.getElementById('viewModal').style.display = 'none';
    context.ClearError();
    context.ClearResponse();
  };
  const closeModal4 = () => {
    document.getElementById('viewModal4').style.display = 'none';
    context.TicketDisplaying(context.user.email);
  };
  const closeModal3 = () => {
    document.getElementById('viewModal3').style.display = 'none';
    context.ClearError();
    context.ClearResponse();
    setPasswordSt({
      idOfUser: context.user.id,
      // oldPass: '',
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
    while (context.isLoading && !context2.ready) {
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
                <Link to='/MyTickets'>
                  <button className='btn btn-dark'>MyTickets</button>
                </Link>
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
                    defaultValue={state.email}
                    name='email'
                    placeholder='Email'
                    style={{
                      width: '50%',
                      backgroundColor: '#fff',
                      color: 'black',
                    }}
                    required
                    disabled
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
                  <i
                    id='eyeIcon1'
                    className='fa fa-eye'
                    aria-hidden='true'
                    onClick={showPassword1}
                    style={{
                      position: 'sticky',
                      color: 'black',
                      cursor: 'pointer',
                    }}
                  ></i>
                  <input
                    id='input1'
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
                  <i
                    id='eyeIcon2'
                    className='fa fa-eye'
                    aria-hidden='true'
                    onClick={showPassword2}
                    style={{
                      position: 'sticky',
                      color: 'black',
                      cursor: 'pointer',
                    }}
                  ></i>
                  <input
                    id='input2'
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
                  <i
                    id='eyeIcon3'
                    className='fa fa-eye'
                    aria-hidden='true'
                    onClick={showPassword3}
                    style={{
                      position: 'sticky',
                      color: 'black',
                      cursor: 'pointer',
                    }}
                  ></i>
                  <input
                    id='input3'
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
          <div id='viewModal4' style={{ display: 'none' }}>
            <div
              id='viewModalContent4'
              className='container'
              style={{ backgroundColor: '#fff' }}
            >
              <h1 style={{ textAlign: 'center' }}>MyTickets</h1>
              <span id='closeModal4' onClick={closeModal4}>
                &times;
              </span>
              <hr />
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
};

export default Profile;
