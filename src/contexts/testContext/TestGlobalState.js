import React, { createContext, useReducer } from 'react';
import TestReducer from './TestReducer';
import axios from 'axios';

const intialState = {
  tickets: [],
  ready: false,
  current: null,
  complaints: [],
};

// create context

export const TestGlobalContext = createContext(intialState);

//provider

export const TestGlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TestReducer, intialState);

  //Methods
  const LoadUser = async () => {
    try {
      var id = await axios.post(
        '/auth/getIdFromToken',
        { token: localStorage.getItem('jwtToken') },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
          },
        }
      );
      var user = await axios.get(`/users/show/findById/${id.data}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });
      const ticketsArr = await axios.get(
        `/qrcode/findByEmail/${user.data.email}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
          },
        }
      );
      var final = [];
      ticketsArr.data.map(async (tkt) => {
        var obj = {
          ticket: {},
          hostName: '',
          guestName: '',
          tkt: {},
          QrImage: '',
        };
        obj.tkt = tkt;
        obj.QrImage = tkt.image;
        var ticketInfo = await GetTicket(tkt.bookRequest.ticketId);
        obj.ticket = ticketInfo;
        var hostObj = await GetHost(ticketInfo.game.gameTeams.host);
        obj.hostName = hostObj.name;
        var guestObj = await GetGuest(ticketInfo.game.gameTeams.guest);
        obj.guestName = guestObj.name;
        await final.push(obj);
      });

      dispatch({ type: 'TICKETS_DISPLAYING', payload: final });
      console.log(final);
    } catch (err) {
      dispatch({ type: 'AUTH_ERROR' });
    }
  };

  const GetTicket = (tktId) => {
    var x = axios.get(`/ticket/show/findById/${tktId}`).then((res) => {
      return res.data;
    });
    return x;
  };
  const GetHost = (hostId) => {
    var x = axios.get(`/team/show/findById/${hostId}`).then((res) => {
      return res.data;
    });
    return x;
  };
  const GetGuest = (guestId) => {
    var x = axios.get(`/team/show/findById/${guestId}`).then((res) => {
      return res.data;
    });
    return x;
  };

  const GetComplaints = async () => {
    var complaints = await axios.get('/complaint/findAll', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    });
    dispatch({ type: 'GET_COMPLAINTS', payload: complaints.data });
  };

  const AddComplaint = async (complaint) => {
    var newComplaint = await axios.post('/complaint/save', complaint);
    dispatch({ type: 'ADD_COMPLAINT', payload: newComplaint.data });
    alert("Thanks for your feedback!! we'll reply as soon as possible!");
  };
  const DeleteComplaint = async (complaintId) => {
    await axios
      .delete(`/complaint/deleteById/${complaintId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then(dispatch({ type: 'DELETE_COMPLAINT', payload: complaintId }));
  };
  const SetCurrent = (complaint) => {
    dispatch({
      type: 'SET_CURRENT',
      payload: complaint,
    });
  };
  const ClearCurrent = () => {
    dispatch({
      type: 'CLEAR_CURRENT',
    });
  };

  const Refund = (data) => {
    axios
      .post('/ticket/returnTicket', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        if (res.data) {
          alert('refunded!');
        } else {
          alert("can't refund!");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <TestGlobalContext.Provider
      value={{
        tickets: state.tickets,
        current: state.current,
        ready: state.ready,
        complaints: state.complaints,
        LoadUser,
        GetComplaints,
        AddComplaint,
        DeleteComplaint,
        SetCurrent,
        ClearCurrent,
        Refund,
      }}
    >
      {children}
    </TestGlobalContext.Provider>
  );
};
