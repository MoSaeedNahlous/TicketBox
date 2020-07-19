export default (state, action) => {
  switch (action.type) {
    case 'ADD_TEAMS':
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === action.payload.id ? action.payload : game
        ),
      };
    case 'SET_HOST':
      return {
        ...state,
        host: action.payload,
      };
    case 'SET_GUEST':
      return {
        ...state,
        guest: action.payload,
      };
    case 'GET_GAMES':
      return {
        ...state,
        isLoading: false,
        games: action.payload,
      };
    case 'GET_GAME_BY_ID':
      return {
        ...state,
        game: action.payload,
      };
    case 'ADD_GAME':
      return {
        ...state,
        game: action.payload,
        games: [action.payload, ...state.games],
      };
    case 'DELETE_GAME':
      return {
        ...state,
        games: state.games.filter((game) => game.id !== action.payload),
      };

    case 'UPDATE_GAME':
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === action.payload.id ? action.payload : game
        ),
      };
    case 'SET_READY':
      return {
        ...state,
        ready: true,
      };
    case 'CLEAR_READY':
      return {
        ...state,
        ready: false,
      };
    case 'SET_CURRENT1':
      return {
        ...state,
        current1: action.payload,
      };
    case 'CLEAR_CURRENT1':
      return {
        ...state,
        current1: null,
      };
    case 'SET_CURRENT2':
      return {
        ...state,
        current2: action.payload,
      };
    case 'CLEAR_CURRENT2':
      return {
        ...state,
        current2: null,
      };
    case 'SET_CURRENT':
      return {
        ...state,
        current: action.payload,
      };
    case 'CLEAR_CURRENT':
      return {
        ...state,
        current: null,
      };
    case 'SET_CURRENT4':
      return {
        ...state,
        current4: action.payload,
      };
    case 'CLEAR_CURRENT4':
      return {
        ...state,
        current4: null,
      };
    case 'HANDLING_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: {},
      };
    case 'CLEAR_GAME':
      return {
        ...state,
        game: {},
      };
    case 'ADD_STADIUM_TO_GAME':
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === action.payload.id ? action.payload : game
        ),
      };
    case 'UPDATE_TEAMS':
      return {
        ...state,
        games: state.games.map((game) =>
          game.id === action.payload.id ? action.payload : game
        ),
      };
    case 'SET_TICKET_ID':
      return {
        ...state,
        ticketId: action.payload,
      };
    case 'VIEW_TICKETS':
      return {
        ...state,
        tickets: action.payload,
      };
    case 'DELETE_TICKETS':
      return {
        ...state,
        tickets: state.tickets.filter((tkt) => tkt.id !== action.payload),
      };
    case 'UPDATE_TICKETS':
      return {
        ...state,
        tickets: state.tickets.map((tkt) =>
          tkt.id === action.payload.id ? action.payload : tkt
        ),
      };
    case 'SET_STADIUM':
      return {
        ...state,
        stadium: action.payload,
      };
    case 'CLEAR_STADIUM':
      return {
        ...state,
        stadium: {},
      };

    default:
      return state;
  }
};
