import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

//intial state

const intialState = {
  user: {},
  users: [],
  error: {},
  currentUser: null,
};

// create context

export const UserGlobalContext = createContext(intialState);

//provider

export const UserGlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, intialState);

  //Methods

  //RegisterUser
  const RegisterUser = (user) => {
    axios
      .post('/users/save', user)
      .then((res) => {
        dispatch({ type: 'REGISTER_USER', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'SET_ERROR', payload: err.response.data });
      });
  };
  //LoginUser
  const LoginUser = (user) => {
    axios
      .post('/users/login', user)
      .then((res) => {
        dispatch({ type: 'LOGIN_USER', payload: res.data });

        console.log(res);
        localStorage.setItem('jwtToken', res.data.token);
        alert('Success!! welcome to TicketBox!');
      })
      .catch((err) => {
        dispatch({ type: 'SET_ERROR', payload: err.response.data });
      });
  };
  //Clear Error
  const ClearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  //GetUsers
  const GetUsers = () => {
    axios.get('/users/findAll').then((res) => {
      dispatch({ type: 'GET_USERS', payload: res.data });
    });
  };

  //SetCurrentUser
  const SetCurrentUser = (user) => {
    dispatch({ type: 'SET_CURRENT_USER', payload: user });
  };

  //ClearCurrentUser
  const ClearCurrentUser = () => {
    dispatch({ type: 'CLEAR_CURRENT_USER' });
  };

  //DeleteUser
  const DeleteUser = (userID) => {
    axios
      .delete(`/users/deleteById/${userID}`)
      .then({ type: 'DELETE_USER', payload: userID });
  };

  //UpdateUser
  const UpdateUser = (user) => {
    axios
      .post('/users/save', user)
      .then((res) => {
        dispatch({ type: 'UPDATE_USER', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'SET_ERROR', payload: err.response.data });
      });
  };

  return (
    <UserGlobalContext.Provider
      value={{
        user: state.user,
        users: state.users,
        error: state.error,
        currentUser: state.currentUser,
        RegisterUser,
        ClearError,
        LoginUser,
        GetUsers,
        SetCurrentUser,
        ClearCurrentUser,
        DeleteUser,
        UpdateUser,
      }}
    >
      {children}
    </UserGlobalContext.Provider>
  );
};
