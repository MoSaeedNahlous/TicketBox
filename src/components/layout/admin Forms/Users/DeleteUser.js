import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserGlobalContext } from '../../../../contexts/UserContext/UserGlobalState';

const DeleteUser = () => {
  const context = useContext(UserGlobalContext);
  const { currentUser, SetCurrentUser, ClearCurrentUser, UpdateUser } = context;
  const [user, setUser] = useState({ userId: '', name: '', email: '' });

  useEffect(() => {
    if (currentUser === null) {
      setUser({ userId: '', name: '', email: '' });
    } else {
      setUser(currentUser);
    }
  }, [currentUser]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    UpdateUser(user);
  };

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: '#F1F1F1' }}>
      <div className='container'>
        <br />
        <form onSubmit={onSubmitHandler}>
          <h1>Edit User</h1>
          <div className='form-group'>
            <label>User Id</label>
            <input
              type='text'
              className='form-control'
              placeholder='User Id'
              disabled
              value={user.userId}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className='form-group'>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              name='name'
              required
              value={user.name}
              onChange={onChangeHandler}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              name='email'
              required
              value={user.email}
              onChange={onChangeHandler}
            />
          </div>

          <div className='form-group'>
            <button
              type='submit'
              className='btn btn-primary'
              style={{ float: 'right' }}
            >
              EditUser
            </button>
          </div>
        </form>
      </div>
      <h1 style={{ color: '#F1F1F1' }}>.</h1>
    </div>
  );
};

export default DeleteUser;
