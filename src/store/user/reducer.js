import { SET_LOADING, SET_ERROR, LOGIN, LOGOUT, SET_CODE } from "./actions";

const initState = {
  isLoggedIn: false,
  loading: false,
  error: null,
  username: null,
  code: null
};

const user = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        username: null,
        code: null
      }
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        username: action.payload.login,
        code: null
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        username: null,
        code: null
      }
    case SET_CODE:
      return {
        ...state,
        isLoggedIn: false,
        username: action.payload.login,
        code: action.payload.code,
        error: null,
        loading: false
      }
    default: return state;
  }
}

export default user;