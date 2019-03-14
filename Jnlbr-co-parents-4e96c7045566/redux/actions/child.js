import { createReducer } from "../../utils/reduxHelpers";
import { ADD_CHILD, REMOVE_CHILD, SET_CHILDREN } from '../const/child';

const INITIAL_STATE = {
  children: [{
    id: 1,
    icon: null,
    firstname: 'Maria',
    lastname:'Eliot'    
  }, {
    id: 2,
    icon: null,
    firstname: 'Peter',
    lastname:'Eliot'
  }]
}

export const childReducer = createReducer(INITIAL_STATE, {
  [ADD_CHILD]: (state,action) => ({...state, children: [...state.children, action.child]}),
  [REMOVE_CHILD]: (state,action) => ({...state, children: state.filter(child => child.id != action.id)}),
  [SET_CHILDREN]: (state,action) => ({...state, children: action.children })
});

export const addChild = (child) => ({
  type: ADD_CHILD,
  child,
})
export const removeChild = (id) => ({
  type: REMOVE_CHILD,
  id,
})
export const setChildren = (children) => ({
  type: SET_CHILDREN,
  children
})