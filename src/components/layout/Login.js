import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import bg from '../../res/login.jpg';

const Login = () => {
  const history = useHistory();
  const HandleSubmit = (e) => {
    e.preventDefault();
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
      <div className='container wite'>
        <br />
        <form onSubmit={HandleSubmit}>
          <div className='form-group wite'>
            <h1
              className='flex-center wite'
              style={{ paddingBottom: '1.5rem' }}
            >
              Login to your account
            </h1>
            <label>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              style={{
                width: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                color: 'white',
              }}
              placeholder='Enter email'
              name='email'
              required
            />
            <div role='alert' style={{ width: '50%' }}>
              <strong style={{ color: 'red' }}> </strong>
            </div>
          </div>
          <div className='form-group' style={{ color: 'white' }}>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              style={{ width: '50%', backgroundColor: 'rgba(0, 0, 0, 0)' }}
              name='password'
              placeholder='Password'
              required
            />
            <div role='alert' style={{ width: '50%' }}>
              <strong style={{ color: 'red' }}> </strong>
            </div>
          </div>
          <div className='form-group form-check' style={{ color: 'white' }}>
            <input
              type='checkbox'
              className='form-check-input'
              id='exampleCheck1'
            />
            <label className='form-check-label'>Save my password</label>
          </div>
          <button
            type='submit'
            onSubmit={HandleSubmit}
            className='btn bg-blue btn-primary'
          >
            Login
          </button>
          <br />
          <br />
          <small className='wite'> Forget your password? Click</small>
          <Link to='/forgetPassword' className='blu'>
            {' '}
            here
          </Link>
          <br />
          <small className='wite'>
            {' '}
            Don't have an account? You can SignUp by clicking{' '}
          </small>
          <Link to='/register' className='blu'>
            {' '}
            here
          </Link>
        </form>
        <br />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Login;
