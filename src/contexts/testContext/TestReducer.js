export default (state, action) => {
  switch (action.type) {
    case 'TICKETS_DISPLAYING':
      return {
        ...state,
        tickets: action.payload,
        ready: true,
      };
    case 'GET_COMPLAINTS':
      return {
        ...state,
        complaints: action.payload,
      };
    case 'ADD_COMPLAINT':
      return {
        ...state,
        complaints: [action.payload, ...state.complaints],
      };
    case 'DELETE_COMPLAINT':
      return {
        ...state,
        complaints: state.complaints.filter(
          (complaint) => complaint.id !== action.payload
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
    default:
      return state;
  }
};
