import React, { useContext, useState } from 'react';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import imag from '../../res/Page-Turner.svg';
import { TestGlobalContext } from '../../contexts/testContext/TestGlobalState';

const ContactUs = () => {
  const context = useContext(TestGlobalContext);
  const [state, setState] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    context.AddComplaint(state);
    setState({
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div
      className='wite'
      style={{
        backgroundImage: `url(${imag})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundPositionX: '75%',
      }}
    >
      <NavBar />
      <div className='container'>
        <br />
        <h1 style={{ textAlign: 'center' }}>Contact us</h1>
        <br />
        <div className='row'>
          <div className='col-sm-8'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quia quidem voluptatibus id nemo. Dignissimos
              suscipit perspiciatis, nam ea, vero itaque quia saepe eos unde
              magnam cupiditate est adipisci dolores.
            </p>
          </div>
          <div
            className='col-sm-4'
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderStyle: 'solid',
              borderWidth: '3px',
              borderColor: '#ff5e5b',
            }}
          >
            <form onSubmit={onSubmit}>
              <br />
              <div className='form-group row'>
                <div className='col-sm-12'>
                  <label style={{ color: '#ff5e5b', fontWeight: 'bold' }}>
                    Valid Email
                  </label>
                  <input
                    required
                    type='email'
                    name='email'
                    onChange={onChangeHandler}
                    value={state.email}
                    className=' wite'
                    placeholder='Valid Email'
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      borderStyle: 'solid',
                      borderWidth: '1px',
                      borderColor: '#ff5e5b',
                      width: '100%',
                      color: 'black',
                    }}
                  />
                </div>
              </div>
              <div className='form-group'>
                <label style={{ color: '#ff5e5b', fontWeight: 'bold' }}>
                  Subject
                </label>
                <input
                  required
                  type='text'
                  name='subject'
                  className=' wite'
                  value={state.subject}
                  onChange={onChangeHandler}
                  placeholder='Message Subject'
                  maxLength='20'
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: '#ff5e5b',
                    width: '100%',
                    color: 'black',
                  }}
                />
              </div>

              <div className='form-group'>
                <label style={{ color: '#ff5e5b', fontWeight: 'bold' }}>
                  Your Message
                </label>
                <textarea
                  className=' wite'
                  rows='10'
                  name='message'
                  value={state.message}
                  placeholder='Your Message'
                  required
                  onChange={onChangeHandler}
                  maxLength='200'
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderColor: '#ff5e5b',
                    width: '100%',
                    color: 'black',
                  }}
                ></textarea>
              </div>

              <div className='form-group row'>
                <div className='col-sm-10'>
                  <button
                    type='submit'
                    className='btn btn-primary'
                    style={{ float: 'right' }}
                  >
                    <i class='fa fa-envelope' aria-hidden='true'></i> Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default ContactUs;
