import React, { createContext, useReducer } from 'react';
import GameReducer from './GameReducer';
import {} from '../UserContext/UserGlobalState';
import axios from 'axios';

//intial state

const intialState = {
  games: [],
  game: { gameTeams: { host: '', guest: '' }, stadium: { name: '' } },
  stadium: {},
  tickets: [],
  error: {},
  current1: {},
  current2: {},
  current4: {},
  current: null,
  ready: 'no',
  host: {},
  guest: {},
  ticketId: '',
  isLoading: true,
};

// create context

export const GameGlobalContext = createContext(intialState);

//provider

export const GameGlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GameReducer, intialState);

  //Actions
  //GetAllGames
  const GetGames = () => {
    axios
      .get('/game/show/findAll')
      .then((res) => {
        dispatch({
          type: 'GET_GAMES',
          payload: res.data,
        });
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  //AddGame
  const AddGame = (game) => {
    axios
      .post('/game/save', game, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({ type: 'ADD_GAME', payload: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        dispatch({ type: 'HANDLING_ERROR', payload: err.response.data });
      });
  };
  //DeleteGameById
  const DeleteGame = (gameId) => {
    axios
      .delete(`/game/deleteById/${gameId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({
          type: 'DELETE_GAME',
          payload: gameId,
        });
      })
      .catch((err) => {
        dispatch({ type: 'HANDLING_ERROR', payload: err.response.data });
      });
  };
  //UpdateTeams
  const UpdateTeams = (hostId, guestId, gameId) => {
    axios
      .put(`/gameTeams/updateTeams/${hostId}/${guestId}/${gameId}`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({ type: 'UPDATE_TEAMS', payload: res.data });
      });
  };

  //UpdateGameById

  const UpdateGameById = (game) => {
    axios
      .post('/game/save', game, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({
          type: 'UPDATE_GAME',
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: 'HANDLING_ERROR', payload: err.response });
      });
  };

  //AddTeamToTheGame
  const AddTeamToTheGame = (gameId, hostId, guestId) => {
    axios.post(`/gameTeams/insertTeam/${guestId}/${hostId}/${gameId}`, null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    });
  };

  //DeleteTeamFromTheGame
  const DeleteTeamFromTheGame = (gameId, teamId) => {
    axios
      .delete(`/game/deleteTeam/${gameId}/${teamId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then()
      .catch();
  };
  //DeleteAllTeamsFromTheGame
  const DeleteTeamsFromTheGame = (gameId) => {
    axios
      .delete(`/gameTeams/deleteTeams/${gameId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then()
      .catch();
  };
  //AddStadiumToTheGame
  const AddStadiumToTheGame = (gameId, stadId) => {
    axios
      .post(`/game/addStadium/${gameId}/${stadId}`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) =>
        dispatch({ type: 'ADD_STADIUM_TO_GAME', payload: res.data })
      )
      .catch();
  };

  //GetGameByID
  const GetGameByID = (gameId) => {
    axios
      .get(`/game/show/findById/${gameId}`)
      .then((res) => {
        dispatch({
          type: 'GET_GAME_BY_ID',
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: 'HANDLING_ERROR', payload: err.response });
      });
  };

  //SetHostAndGuest
  const SetHost = async (hostId) => {
    const res = await axios.get(`/team/show/findById/${hostId}`);
    dispatch({ type: 'SET_HOST', payload: res.data });
    return res.data;
  };

  const SetGuest = async (guestId) => {
    const res = await axios.get(`/team/show/findById/${guestId}`);
    dispatch({
      type: 'SET_GUEST',
      payload: res.data,
    });
    return res.data;
  };

  //Set Stadium
  const SetStadium = (stadium) => {
    dispatch({ type: 'SET_STADIUM', payload: stadium });
  };

  //Clear Stadium
  const ClearStadium = () => {
    dispatch({ type: 'CLEAR_STADIUM' });
  };

  //SetCuurent1
  const SetCurrent1 = (team1) => {
    dispatch({
      type: 'SET_CURRENT1',
      payload: team1,
    });
  };
  //ClearCuurent1
  const ClearCurrent1 = () => {
    dispatch({
      type: 'CLEAR_CURRENT1',
    });
  };
  //SetReady
  const SetReady = () => {
    dispatch({
      type: 'SET_READY',
    });
  };
  //ClearReady
  const ClearReady = () => {
    dispatch({
      type: 'CLEAR_READY',
    });
  };
  //SetCuurent2
  const SetCurrent2 = (team2) => {
    dispatch({
      type: 'SET_CURRENT2',
      payload: team2,
    });
  };
  //ClearCuurent2
  const ClearCurrent2 = () => {
    dispatch({
      type: 'CLEAR_CURRENT2',
    });
  };
  //SetCuurent3
  const SetCurrent = (stad) => {
    dispatch({
      type: 'SET_CURRENT',
      payload: stad,
    });
  };
  //ClearCuurent3
  const ClearCurrent = () => {
    dispatch({
      type: 'CLEAR_CURRENT',
    });
  };
  //SetCuurent4
  const SetCurrent4 = (stad) => {
    dispatch({
      type: 'SET_CURRENT4',
      payload: stad,
    });
  };
  //ClearCuurent4
  const ClearCurrent4 = () => {
    dispatch({
      type: 'CLEAR_CURRENT4',
    });
  };
  //ClearCuurent
  const ClearError = () => {
    dispatch({
      type: 'CLEAR_ERROR',
    });
  };
  //ClearGame
  const ClearGame = () => {
    dispatch({
      type: 'CLEAR_GAME',
    });
  };
  //AddTickets
  const AddTicket = (ticket, gameId) => {
    axios
      .post('/ticket/save', ticket, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        alert('Added!');
        dispatch({ type: 'SET_TICKET_ID', payload: res.data.id });
        axios.post(`/ticket/addGame/${res.data.id}/${gameId}`, null, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
          },
        });
        alert(
          'Done! ticket : ' +
            res.data.id +
            ' added to game : ' +
            gameId +
            '  Succesfully!'
        );
      });
  };

  //ViewGameTickets
  const ViewTickets = (gameId) => {
    axios.get('/ticket/show/findAll').then((res) => {
      dispatch({
        type: 'VIEW_TICKETS',
        payload: res.data.filter((tkt) => tkt.game.id == gameId),
      });
    });
  };

  //DeleteTickets
  const DeleteTickets = (ticketId) => {
    axios
      .delete(`/ticket/deleteById/${ticketId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({ type: 'DELETE_TICKETS', payload: ticketId });
      });
  };

  //EditTickets
  const EditTickets = (ticket) => {
    axios
      .post('/ticket/save', ticket, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        dispatch({ type: 'UPDATE_TICKETS', payload: res.data });
      });
  };

  //BookATicket
  const TicketBooking = (data) => {
    axios
      .post('/bookRequests/book', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      })
      .then((res) => {
        alert('Success!!');

        dispatch({ type: 'BOOK_A_TICKET', payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: 'HANDLING_ERROR',
          payload: err.response.data.message,
        });
        alert(err.response.data.message);
      });
  };

  return (
    <GameGlobalContext.Provider
      value={{
        games: state.games,
        game: state.game,
        stadium: state.stadium,
        tickets: state.tickets,
        error: state.error,
        current1: state.current1,
        current2: state.current2,
        current: state.current,
        current4: state.current4,
        ready: state.ready,
        host: state.host,
        guest: state.guest,
        ticketId: state.ticketId,
        isLoading: state.isLoading,
        SetStadium,
        ClearStadium,
        GetGames,
        AddGame,
        SetHost,
        SetGuest,
        DeleteGame,
        GetGameByID,
        UpdateGameById,
        AddTeamToTheGame,
        DeleteTeamFromTheGame,
        SetCurrent1,
        ClearCurrent1,
        SetCurrent2,
        ClearCurrent2,
        SetCurrent,
        ClearCurrent,
        SetCurrent4,
        ClearCurrent4,
        ClearError,
        ClearGame,
        AddStadiumToTheGame,
        DeleteTeamsFromTheGame,
        SetReady,
        ClearReady,
        UpdateTeams,
        AddTicket,
        ViewTickets,
        DeleteTickets,
        EditTickets,
        TicketBooking,
      }}
    >
      {children}
    </GameGlobalContext.Provider>
  );
};
