import { createReducer } from "../../utils/reduxHelpers";
import { ADD_MESSAGE } from '../const/message';

const INITIAL_STATE = {
  conversations: [{
    id: 0,
    firstname: 'John',
    lastname: 'Elio',
    icon: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    messages: [{
      me: true,
      text: 'Hello, how are you?',
      date: new Date()
    }, {
      me: false,
      text: 'HEEEEEEEEEEEEEEEY, hello??',
      date: new Date()
    }, {
      me: false,
      text: 'Are you there???',
      date: new Date()
    }, {
      me: true,
      text: 'Yes I am here',
      date: new Date()
    }, {
      me: false,
      text: 'HEEEEEEEEEEEEEEEY, hello??',
      date: new Date()
    }, {
      me: false,
      text: 'Are you there???',
      date: new Date()
    }, {
      me: true,
      text: 'Yes I am here',
      date: new Date()
    }]
  }, {
    id: 1,
    firstname: 'Maria',
    lastname: 'Santo',
    icon: null,
    messages: [{
      me: true,
      text: 'Hi, how are you today?',
      date: new Date()
    }, {
      me: false,
      text: 'Hi! I am just fine, and you?',
      date: new Date()
    }]
  }]
}

export const messageReducer = createReducer(INITIAL_STATE, {
  [ADD_MESSAGE]: (state,action) => ({...state, conversations: state.conversations.map(c => c.id === action.id ? { ...c, messages: [...c.messages, action.message]} : c)}),
});

export const addMessage = (id,message) => ({
  type: ADD_MESSAGE,
  id, message,
});