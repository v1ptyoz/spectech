export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_CODE = "SET_CODE";


export const SetLoading = () => ({
  type: SET_LOADING
})

export const SetError = (payload) => ({
  type: SET_ERROR,
  payload: payload,
})

export const Login = (payload) => ({
  type: LOGIN,
  payload: payload
})

export const Logout = () => ({
  type: LOGOUT,
})

export const SetCode = (payload) => ({
  type: SET_CODE,
  payload: payload
})