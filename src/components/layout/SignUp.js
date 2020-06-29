import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import bg from '../../res/login.jpg';
import { useContext } from 'react';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';
import { useEffect } from 'react';

const Signup = () => {
  const context = useContext(UserGlobalContext);
  const { RegisterUser, ClearError, error, response, ClearResponse } = context;
  const history = useHistory();
  useEffect(() => {
    ClearError();
  }, []);

  useEffect(() => {
    if (response) {
      document.getElementById('viewModal').style.display = 'block';

      ClearResponse();
    }
  }, [response]);

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (newUser.password === newUser.confirmPassword) {
      RegisterUser({
        name: newUser.name,
        age: newUser.age,
        password: newUser.password,
        email: newUser.email,
        gender: newUser.gender,
      });

      setNewUser({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: '',
        gender: '',
      });
    } else {
      alert('check your password..');
    }
  };
  const onChangeHandler = (e) => {
    ClearError();
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: '75% 60%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: '3rem',
        paddingBottom: '3rem',
      }}
    >
      <div id='viewModal' style={{ display: 'none' }}>
        <div id='viewModalContentSignUp'>
          <h4>Success!!</h4>
          <br />
          <span
            style={{ cursor: 'pointer', textDecoration: ' underline' }}
            onClick={() => {
              history.push('/login');
              document.getElementById('viewModal').style.display = 'none';
            }}
          >
            press here to continue!
          </span>
        </div>
      </div>
      <div className='container wite'>
        <br />
        <form onSubmit={HandleSubmit}>
          <div className='form-group' style={{ color: 'white' }}>
            <h1 className='flex-center' style={{ paddingBottom: '1.5rem' }}>
              Create your new account
            </h1>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              value={newUser.name}
              name='name'
              placeholder='FullName'
              style={{
                width: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                color: 'white',
              }}
              onChange={onChangeHandler}
              required
            />
            <div role='alert' style={{ width: '50%' }}>
              {error.name && (
                <strong style={{ color: 'red' }}>&times; {error.name} </strong>
              )}
            </div>
          </div>
          <div className='form-group'>
            <label>Email address</label>
            <input
              type='email'
              className='form-control'
              value={newUser.email}
              name='email'
              placeholder='Email'
              style={{
                width: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                color: 'white',
              }}
              onChange={onChangeHandler}
              required
            />
            <div role='alert' style={{ width: '50%' }}>
              {error.message && (
                <strong style={{ color: 'red' }}>
                  &times; {error.message}{' '}
                </strong>
              )}
            </div>
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              value={newUser.password}
              placeholder='Password'
              name='password'
              style={{
                width: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                color: 'white',
              }}
              onChange={onChangeHandler}
              required
            />
            <div role='alert' style={{ width: '50%' }}>
              {error.password && (
                <strong style={{ color: 'red' }}>
                  &times; {error.password}{' '}
                </strong>
              )}
            </div>
          </div>
          <div className='form-group'>
            <label>reEnter Password</label>
            <input
              type='password'
              className='form-control'
              value={newUser.confirmPassword}
              placeholder='Password'
              name='confirmPassword'
              style={{
                width: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                color: 'white',
              }}
              onChange={onChangeHandler}
              required
            />
            <div role='alert' style={{ width: '50%' }}>
              {error.confirmPassword && (
                <strong style={{ color: 'red' }}>
                  &times; {error.confirmPassword}{' '}
                </strong>
              )}
            </div>
          </div>

          <div className='form-group'>
            <label>Gender</label>
            <select
              onChange={onChangeHandler}
              value={newUser.gender}
              required
              name='gender'
              className='form-control'
              style={{
                width: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                color: 'grey',
              }}
            >
              <option value='' hidden>
                Select Gender
              </option>
              <option value='false'>Female</option>
              <option value='true'>Male</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Age</label>
            <input
              onChange={onChangeHandler}
              className='form-control'
              placeholder='Age'
              name='age'
              value={newUser.age}
              type='number'
              min='18'
              max='100'
              required
              style={{
                width: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                color: 'white',
              }}
            />
          </div>

          <div className='form-group form-check'>
            <input
              type='checkbox'
              className='form-check-input'
              id='exampleCheck1'
              required
            />
            <label className='form-check-label'>
              by clicking here you are accepting our
            </label>
            <Link to='/termsAndConditions' className='blu'>
              {' '}
              Terms and Conditions.
            </Link>
          </div>
          <button type='submit' className='btn btn-primary'>
            Signup
          </button>
          <br />
          <br />
          <small> Do you have an account? You can login by clicking</small>
          <Link to='/login' className='blu'>
            {' '}
            here
          </Link>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Signup;
