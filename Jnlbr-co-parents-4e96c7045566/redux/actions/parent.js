import { createReducer } from "../../utils/reduxHelpers";
import { ADD_COPARENT, REMOVE_COPARENT, SET_COPARENTS } from '../const/parent';

const INITIAL_STATE = {
  coParents: []
}

export const coParentReducer = createReducer(INITIAL_STATE, {
  [ADD_COPARENT]: (state,action) => ({...state, coParents: [...state.coParents, action.coParent]}),
  [REMOVE_COPARENT]: (state,action) => ({...state, coParents: state.filter(cp => cp.id != action.id)}),
  [SET_COPARENTS]: (state,action) => ({...state, coParents: action.coParents })
});

export const addCoParent = (coParent) => ({
  type: ADD_COPARENT,
  coParent
})
export const removeCoParent = (id) => ({
  type: REMOVE_COPARENT,
  id
})
export const setCoParents = (coParents) => ({
  type: SET_COPARENTS,
  coParents
})