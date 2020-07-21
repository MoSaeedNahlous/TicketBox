export default (state, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        response: action.payload,
        isLoading: false,
      };
    case 'LOGIN_USER':
      localStorage.setItem('jwtToken', action.payload.accessToken);
      return {
        ...state,
        token: action.payload.accessToken,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: '',
      };
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false,
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
        user: { id: '', roles: [{ id: '', name: '' }] },
        token: '',
        isAuthenticated: false,
        isLoading: false,
      };
    case 'LOAD_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'AUTH_ERROR':
      localStorage.removeItem('jwtToken');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: { id: '', roles: [{ id: '', name: '' }] },
      };
    case 'GET_TICKETSID':
      return {
        ...state,
        notReady: false,
        tickets: action.payload,
      };
    case 'EDIT_USER':
      return {
        ...state,
        user: action.payload,
        response: 'Success!!',
      };
    case 'EDIT_ERROR':
      if (action.payload.status == '401') {
        return {
          ...state,
          error: 'Wrong password!!',
        };
      } else if (action.payload.status == '500') {
        return {
          ...state,
          error: 'The entered is email already taken!!',
        };
      }
    case 'EDIT_PASSWORD_SUC':
      return {
        ...state,
        response: 'Success!!',
      };
    case 'EDIT_PASSWORD_FAIL':
      return {
        ...state,
        error: 'Check your entered data!!',
      };

    default:
      return state;
  }
};
