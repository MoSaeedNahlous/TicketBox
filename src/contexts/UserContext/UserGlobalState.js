import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';
import axios from 'axios';
import setJwtToken from './SetJwtToken';

//intial state

const intialState = {
  user: { id: '', roles: [{ id: '', name: '' }] },
  users: [],
  error: '',
  currentUser: null,
  count: '',
  malesCount: '',
  femalesCount: '',
  ageStatics: '',
  response: '',
  token: localStorage.getItem('jwtToken'),
  isAuthenticated: null,
  isLoading: true,
  ticket: {},
  tickets: [],
  ticketsLoading: true,
  notReady: true,
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
        localStorage.setItem('jwtToken', res.data.accessToken);
        LoadUser();
      })
      .catch((err) => {
        localStorage.removeItem('jwtToken');
        dispatch({ type: 'SET_ERROR', payload: 'Wrong data!' });
      });
  };
  //Clear Error
  const ClearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  //GetUsers
  const GetUsers = () => {
    axios
      .get('/users/show/admin/findAll', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
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
      .post('/users/save', user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({ type: 'UPDATE_USER', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'SET_ERROR', payload: err.response.data });
      });
  };

  //UsersCount
  const UsersCount = () => {
    axios
      .get('/users/admin/count', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
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
    axios
      .get('/users/admin/statistics/countMaleUsers', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({ type: 'COUNT_MALE_USERS', payload: res.data });
      });
  };

  //CountMaleUsers
  const CountFemaleUsers = () => {
    axios
      .get('/users/admin/statistics/countFemaleUsers', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({ type: 'COUNT_FEMALE_USERS', payload: res.data });
      });
  };

  //GetAgeStatics
  const GetAgeStatics = () => {
    axios
      .get('/users/admin/statistics/countAgeGroupsOfUsers', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
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

  //LoadUser
  const LoadUser = () => {
    axios
      .post(
        '/auth/getIdFromToken',
        { token: localStorage.getItem('jwtToken') },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
          },
        }
      )
      .then((res) => {
        axios
          .get(`/users/show/findById/${res.data}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
            },
          })
          .then((response) => {
            dispatch({ type: 'LOAD_USER', payload: response.data });
          });
      })
      .catch((err) => {
        dispatch({ type: 'AUTH_ERROR' });
      });
  };

  //AddCredits
  const AddCredits = (data) => {
    axios
      .post('/creditRequest/admin/addCreditByEmail', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({ type: 'ADD_CREDITS' });
        alert('Success!!');
      })
      .catch((err) => {
        alert('the entered email is not vaild!!');
      });
  };

  //GetUserTickets
  const GetTickets = (userId) => {
    axios
      .get(`/users/getTicketsByUserId/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({ type: 'GET_TICKETSID', payload: res.data });
      });
  };
  //GetTicketInfo
  const GetTicketInfo = (ticketId) => {
    axios
      .get(`/ticket/findById/${ticketId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({ type: 'GET_TICKETINFO', payload: res.data });
      });
  };

  //EditUser
  const EditUser = (user) => {
    axios
      .post('/users/save', user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({ type: 'EDIT_USER', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'EDIT_ERROR', payload: err.response });
      });
  };
  //EditUserPassword
  const EditUserPassword = (passwordInfo) => {
    axios
      .post('/users/changePassword', passwordInfo, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({ type: 'EDIT_PASSWORD_SUC', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'EDIT_PASSWORD_FAIL', payload: err.response });
      });
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
        isLoading: state.isLoading,
        ticket: state.ticket,
        tickets: state.tickets,
        ticketsLoading: state.ticketsLoading,
        notReady: state.notReady,
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
        LoadUser,
        AddCredits,
        GetTicketInfo,
        GetTickets,
        EditUser,
        EditUserPassword,
      }}
    >
      {children}
    </UserGlobalContext.Provider>
  );
};
