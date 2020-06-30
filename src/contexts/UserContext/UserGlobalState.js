import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';
import axios from 'axios';

//intial state

const intialState = {
  user: {},
  users: [],
  error: {},
  currentUser: null,
  count: '',
  malesCount: '',
  femalesCount: '',
  ageStatics: '',
  response: '',
  token: localStorage.getItem('jwtToken'),
  isAuthenticated: null,
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
      .post('/auth/signup', user)
      .then((res) => {
        dispatch({ type: 'REGISTER_USER', payload: res.data.success });
      })
      .catch((err) => {
        dispatch({ type: 'SET_ERROR', payload: err.response.data });
      });
  };
  //LoginUser
  const LoginUser = (user) => {
    axios
      .post('/auth/signin', user)
      .then((res) => {
        dispatch({ type: 'LOGIN_USER', payload: res.data });

        console.log(res);
        localStorage.setItem(
          'jwtToken',
          res.data.tokenType + ' ' + res.data.accessToken
        );
        console.log(localStorage.getItem('jwtToken'));
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

  //UsersCount
  const UsersCount = () => {
    axios.get('/users/count').then((res) => {
      dispatch({ type: 'USERS_COUNT', payload: res.date });
    });
  };

  //DeleteAllUsers
  const DeleteAllUsers = () => {
    axios.delete('/users/deleteAll').then((res) => {
      dispatch({ type: 'DELETE_ALL_USERS' });
    });
  };

  //CountMaleUsers
  const CountMaleUsers = () => {
    axios.get('/users/statistics/countMaleUsers').then((res) => {
      dispatch({ type: 'COUNT_MALE_USERS', payload: res.data });
    });
  };

  //CountMaleUsers
  const CountFemaleUsers = () => {
    axios.get('/users/statistics/countFemaleUsers').then((res) => {
      dispatch({ type: 'COUNT_FEMALE_USERS', payload: res.data });
    });
  };

  //GetAgeStatics
  const GetAgeStatics = () => {
    axios.get('/users/statistics/countAgeGroupsOfUsers').then((res) => {
      console.log(res.data[0]);
      dispatch({ type: 'GET_AGE_STATICS', payload: res.data[0] });
    });
  };

  //ClearResponse
  const ClearResponse = () => {
    dispatch({ type: 'CLEAR_RESPONSE' });
  };

  //LogOutUser
  const LogOutUser = () => {
    localStorage.removeItem('jwtToken');
    dispatch({ type: 'LOGOUT_USER' });
  };

  return (
    <UserGlobalContext.Provider
      value={{
        user: state.user,
        users: state.users,
        error: state.error,
        currentUser: state.currentUser,
        count: state.count,
        malesCount: state.malesCount,
        femalesCount: state.femalesCount,
        ageStatics: state.ageStatics,
        response: state.response,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        ClearResponse,
        RegisterUser,
        ClearError,
        LoginUser,
        GetUsers,
        SetCurrentUser,
        ClearCurrentUser,
        DeleteUser,
        UpdateUser,
        UsersCount,
        DeleteAllUsers,
        CountMaleUsers,
        CountFemaleUsers,
        GetAgeStatics,
        LogOutUser,
      }}
    >
      {children}
    </UserGlobalContext.Provider>
  );
};
