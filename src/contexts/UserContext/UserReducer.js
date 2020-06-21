export default (state, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case 'SET_ERROR':
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
