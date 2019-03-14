import { createReducer } from "../../utils/reduxHelpers";
import { SET_USER } from '../const/user';

const INITIAL_STATE = {
  user: {}
}

export const userReducer = createReducer(INITIAL_STATE, {
  [SET_USER]: (state,action) => ({...state, user: action.user })
});

export const setUser = user => ({
  type: SET_USER,
  user
});