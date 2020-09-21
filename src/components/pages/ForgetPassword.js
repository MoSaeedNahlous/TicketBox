import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TestGlobalContext } from '../../contexts/testContext/TestGlobalState';

const ForgetPassword = () => {
  const context = useContext(TestGlobalContext);
  const [state, setState] = useState({
    email: '',
    newPassword: '',
    newPassword2: '',
    code: '',
  });
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
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert('check your email for the recovery code!');
    var email = document.getElementById('email');
    context.SendEmailRequest(state.email);
    email.disabled = true;
    document.getElementById('AddGameModal1').style.display = 'block';
  };
  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const closeModal1 = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('are you sure?')) {
      document.getElementById('AddGameModal1').style.display = 'none';
      context.CancelRequest(state.email);
      setState({
        email: '',
        newPassword: '',
        newPassword2: '',
        code: '',
      });
    }
  };
  const onSubmitHandler2 = (e) => {
    e.preventDefault();
    var obj = {
      email: state.email,
      code: state.code,
      newPassword: state.newPassword,
    };
    if (state.newPassword === state.newPassword2) {
      context.SubmitRequest(state);
      setState({
        email: '',
        newPassword: '',
        newPassword2: '',
        code: '',
      });
    } else {
      alert('Passwords are not matched!!');
    }
  };
  return (
    <div>
      <div className='container' style={{ padding: '17%' }}>
        <h1 style={{ textAlign: 'center' }}>Change My Password</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='form-group'>
            <label>Your Email</label>
            <input
              required
              id='email'
              type='email'
              className='form-control'
              placeholder='your email'
              value={state.email}
              onChange={onChangeHandler}
              name='email'
            />
            <br />
            <button type='submit' class='btn btn-primary'>
              Send Code
            </button>
          </div>
        </form>
      </div>
      <div id='AddGameModal1' name='PasswordModal' style={{ display: 'none' }}>
        <div id='AddGameModalContent1'>
          <span onClick={closeModal1} id='closeModal'>
            &times;
          </span>
          <h2 style={{ textAlign: 'center' }}>Change Password</h2>
          <br />
          <form onSubmit={onSubmitHandler2}>
            <div className='form-group'>
              <label>Recovery Code</label>
              <input
                type='number'
                className='form-control'
                placeholder='your recovery code'
                onChange={onChangeHandler}
                value={state.code}
                name='code'
                required
              />
            </div>
            <br />
            <div className='form-group'>
              <label>New Password</label>
              <i
                onClick={showPassword}
                id='eyeIcon'
                className='fa fa-eye'
                aria-hidden='true'
                style={{
                  position: 'sticky',
                  color: 'white',
                  cursor: 'pointer',
                }}
              ></i>
              <input
                id='input'
                type='password'
                className='form-control'
                placeholder='new password'
                onChange={onChangeHandler}
                name='newPassword'
                value={state.newPassword}
                required
              />
            </div>
            <br />
            <div className='form-group'>
              <label>ReEnter New Password</label>
              <i
                id='eyeIcon2'
                className='fa fa-eye'
                aria-hidden='true'
                onClick={showPassword2}
                style={{
                  position: 'sticky',
                  color: 'white',
                  cursor: 'pointer',
                }}
              ></i>
              <input
                id='input2'
                type='password'
                className='form-control'
                placeholder='new password'
                onChange={onChangeHandler}
                name='newPassword2'
                value={state.newPassword2}
                required
              />
            </div>
            <br />
            <button type='submit' class='btn btn-primary'>
              Submit
            </button>
          </form>

          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
