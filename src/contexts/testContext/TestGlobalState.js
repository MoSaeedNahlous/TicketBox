import React, { createContext, useReducer } from 'react';
import TestReducer from './TestReducer';
import axios from 'axios';

const intialState = {
  tickets: [],
  ready: false,
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

  return (
    <TestGlobalContext.Provider
      value={{
        tickets: state.tickets,
        LoadUser,
      }}
    >
      {children}
    </TestGlobalContext.Provider>
  );
};
