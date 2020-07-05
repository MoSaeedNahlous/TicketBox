import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

import bg from '../../res/login.jpg';
import { UserGlobalContext } from '../../contexts/UserContext/UserGlobalState';
import { useEffect } from 'react';
import Home from '../pages/Home';

const Login = () => {
  const context = useContext(UserGlobalContext);
  const { LoginUser, ClearError, error, LoadUser } = context;
  const [user, setUser] = useState({ email: '', password: '' });
  const history = useHistory();
  const onChangeHandler = (e) => {
    ClearError();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    LoadUser();
    ClearError();
    if (context.isAuthenticated) {
      history.push('/');
    }
  }, [context.isAuthenticated]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    LoginUser(user);

    setUser({ email: '', password: '' });
  };
  const showPassword = () => {
    var icon = document.getElementById('eyeIcon');
    var input = document.getElementById('input');
    if (icon.className === 'fa fa-eye' && input.type === 'password') {
      icon.className = 'fa fa-eye-slash';
      input.type = 'text';
    } else {
      icon.className = 'fa fa-eye';
      input.type = 'password';
    }
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
              name='email'
              aria-describedby='emailHelp'
              style={{
                width: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                color: 'white',
              }}
              placeholder='Enter email'
              onChange={onChangeHandler}
              required
            />
            <div role='alert' style={{ width: '50%' }}>
              {error.email && (
                <strong style={{ color: 'red' }}>&times; {error.email} </strong>
              )}
            </div>
          </div>
          <div className='form-group' style={{ color: 'white' }}>
            <label>Password</label>

            <input
              type='password'
              className='form-control'
              onChange={onChangeHandler}
              style={{
                width: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                color: 'white',
              }}
              name='password'
              placeholder='Password'
              required
              id='input'
            />
            <i
              id='eyeIcon'
              class='fa fa-eye'
              aria-hidden='true'
              onClick={showPassword}
              style={{
                position: 'absolute',
                top: '61.3%',
                right: '53%',
                color: 'grey',
                cursor: 'pointer',
              }}
            ></i>
            <div role='alert' style={{ width: '50%' }}>
              {error.password && (
                <strong style={{ color: 'red' }}>
                  &times; {error.password}{' '}
                </strong>
              )}
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
          <Link to='/forgetPassword' className='red'>
            {' '}
            here
          </Link>
          <br />
          <small className='wite'>
            {' '}
            Don't have an account? You can SignUp by clicking{' '}
          </small>
          <Link to='/register' className='red'>
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
