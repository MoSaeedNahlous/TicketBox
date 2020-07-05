export default (state, action) => {
  switch (action.type) {
    case 'GET_STADIUMS':
      return {
        ...state,
        stadiums: action.payload,
        isLoading: false,
      };
    case 'GET_STADIUM_BY_ID':
      return {
        ...state,
        stadium: action.payload,
        isLoading: false,
      };
    case 'ADD_STADIUM':
      return {
        ...state,
        stadiums: [action.payload, ...state.stadiums],
      };
    case 'DELETE_STADIUM':
      return {
        ...state,
        stadiums: state.stadiums.filter(
          (stadium) => stadium.stadiumId !== action.payload
        ),
      };
    case 'UPDATE_STADIUM':
      return {
        ...state,
        stadiums: state.stadiums.map((stadium) =>
          stadium.stadiumId === action.payload.stadiumId
            ? action.payload
            : stadium
        ),
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

    default:
      return state;
  }
};
