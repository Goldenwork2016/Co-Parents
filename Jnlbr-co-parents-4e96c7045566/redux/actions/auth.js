import { createReducer } from "../../utils/reduxHelpers";
import { SET_TOKEN, SET_TYPE } from '../const/auth';

const INITIAL_STATE = {
  token: '',
  loginType: ''
}

export const authReducer = createReducer(INITIAL_STATE, {
  [SET_TOKEN]: (state,action) => ({...state, token: action.token }),
  [SET_TYPE]: (state,action) => ({...state, loginType: action.loginType })
});

export const setToken = token => ({
  type: SET_TOKEN,
  token
});

export const setType = type => ({
  type: SET_TYPE,
  loginType: type
});

export const setFacebookType = token => {
  return dispatch => {
    dispatch(setType('FACEBOOK'));
    dispatch(setToken(token));
  }
}

export const setNormalType = token => {
  return dispatch => {
    dispatch(setType('NORMAL'));
    dispatch(setToken(token));
  }
}