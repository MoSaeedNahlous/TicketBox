export default (state, action) => {
  switch (action.type) {
    case 'TICKETS_DISPLAYING':
      return {
        ...state,
        tickets: action.payload,
        ready: true,
      };
    default:
      return state;
  }
};
