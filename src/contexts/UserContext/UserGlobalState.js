import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';
import axios from 'axios';

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
        // localStorage.setItem('jwtToken',response.data.token)
        // alert("Success!! welcome to TicketBox!");
        // history.push("/");
        // setError({});
        // if(response.data.token){
        //   axios.defaults.headers.common['Authorization'] =`Bearer ${response.data.token}`}
        //   else{
        //     delete axios.defaults.headers.common['Authorization'];
        //   }
      })
      .catch((err) => {
        dispatch({ type: 'SET_ERROR', payload: err.response.data });
      });
  };
  //Clear Error
  const ClearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
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
      }}
    >
      {children}
    </UserGlobalContext.Provider>
  );
};
