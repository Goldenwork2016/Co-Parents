import { createReducer } from "../../utils/reduxHelpers";
import { ADD_EVENT, UPDATE_EVENT, REMOVE_EVENT, SET_EVENT } from '../const/event';

const INITIAL_STATE = {
  events:[],
  event:{},
}

export const eventReducer = createReducer(INITIAL_STATE, {
  [ADD_EVENT]: (state,action) => ({...state, events: [...state.events, {...state.event, id: state.events.length + 1}]}),
  [UPDATE_EVENT]: (state,action) => ({...state, events: state.events.map((evt) => evt.id === state.event.id ? state.event : evt)}),
  [REMOVE_EVENT]: (state,action) => ({...state, events: state.events.filter((evt) => evt.id !== action.id)}),
  [SET_EVENT]: (state,action) => ({...state, event: action.event})
});

export const addEvent = () => ({ // (event)
  type: ADD_EVENT,
  // event, // Instead event set is added
})
export const removeEvent = (id) => ({
  type: REMOVE_EVENT,
  id,
})
export const updateEvent = () => ({ // (i,event)
  type: UPDATE_EVENT,
  // i,
  // event
})
export const setEvent = (event) => ({
  type: SET_EVENT,
  event
})