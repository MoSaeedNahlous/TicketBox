export default (state, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        response: action.payload,
      };
    case 'LOGIN_USER':
      localStorage.setItem('jwtToken', action.payload.accessToken);
      return {
        ...state,
        token: action.payload.accessToken,
        isAuthenticated: true,
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
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
      };
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'CLEAR_CURRENT_USER':
      return {
        ...state,
        currentUser: null,
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.userId !== action.payload),
      };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === action.payload.userId ? action.payload : user
        ),
      };
    case 'USERS_COUNT':
      return {
        ...state,
        count: action.payload,
      };
    case 'DELETE_ALLL_USERS':
      return {
        ...state,
        users: [],
      };
    case 'COUNT_MALE_USERS':
      return {
        ...state,
        malesCount: action.payload,
      };
    case 'COUNT_FEMALE_USERS':
      return {
        ...state,
        femalesCount: action.payload,
      };
    case 'GET_AGE_STATICS':
      return {
        ...state,
        ageStatics: action.payload,
      };
    case 'CLEAR_RESPONSE':
      return {
        ...state,
        response: '',
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: { roles: [] },
        token: '',
        isAuthenticated: false,
      };
    case 'LOAD_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'AUTH_ERROR':
      localStorage.removeItem('jwtToken');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: { roles: [] },
      };

    default:
      return state;
  }
};
