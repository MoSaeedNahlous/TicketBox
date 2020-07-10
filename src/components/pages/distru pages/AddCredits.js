import React, { useState } from 'react';
import { Fragment } from 'react';
import NavBar from '../../layout/NavBar';
import Footer from '../../layout/Footer';
import UsersTable from '../../layout/admin Forms/Users/UsersTable';
import { useContext } from 'react';
import { UserGlobalContext } from '../../../contexts/UserContext/UserGlobalState';
import { useEffect } from 'react';

const AddCredits = () => {
  const context = useContext(UserGlobalContext);
  const [St, setSt] = useState({
    email: '',
    credit: '',
    distuId: context.user.id,
  });
  useEffect(() => {
    setSt({ ...St, distuId: context.user.id });
  }, [context.user]);

  const onChangeHandler = (e) => {
    setSt({ ...St, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(St);
    context.AddCredits(St);
    setSt({
      email: '',
      credit: '',
      distuId: context.user.id,
    });
  };
  return (
    <Fragment>
      <NavBar />
      <div className='container'>
        <h1 style={{ textAlign: 'center' }}>Add Credits</h1>
        <hr />
        <form onSubmit={onSubmitHandler}>
          <div className='row'>
            <div className='col-sm-9'>
              <label>User Email</label>
              <input
                onChange={onChangeHandler}
                type='email'
                className='form-control'
                placeholder='User Email'
                id='deadline'
                required
                name='email'
              />
            </div>
            <div className='col-sm-3'>
              <label style={{ textAlign: 'left' }}>Credits Ammount</label>
              <input
                onChange={onChangeHandler}
                type='number'
                className='form-control'
                placeholder='Credits '
                id='deadline'
                required
                name='credit'
                min='1'
              />
            </div>
          </div>
          <br />
          <button type='submit' className='btn-success btn'>
            AddCredits
          </button>
          <br />
          <br />
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default AddCredits;
