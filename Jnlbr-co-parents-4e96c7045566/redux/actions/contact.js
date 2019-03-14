import { createReducer } from "../../utils/reduxHelpers";
import { ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACT } from '../const/contact';

const INITIAL_STATE = {
  contacts: [{
    id: 0,
    firstname: 'Jean',
    lastname: 'Lambert',
    number: '111111111',
    email: 'jeanlambert@email.com',
    address : 'some place in the world',
    note: 'He is a computer engineer',
  }, {
    id: 1,
    firstname: 'Albany',
    lastname: 'Pineda',
    number: '22222222',
    email: 'albanypineda@email.com',
    address : 'some place in the world',
    note: 'She is a industrial engineer',
  }, {
    id: 2,
    firstname: 'Anita',
    lastname: 'Algo',
    number: '33333333',
    email: 'anita@email.com',
    address : 'some place in the world',
    note: 'x',
  }]
}

export const contactReducer = createReducer(INITIAL_STATE, {
  [ADD_CONTACT]: (state,action) => ({...state, contacts: [...state.contacts, action.contact]}),
  [REMOVE_CONTACT]: (state,action) => ({...state, contacts: state.contacts.filter(ctc => ctc.id !== action.id)}),
  [UPDATE_CONTACT]: (state,action) => ({...state, contacts: state.map(ctc => ctc.id === action.contact.id ? action.contact : ctc)})
});

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  contact,
});
export const removeContact = (id) => ({
  type: REMOVE_CONTACT,
  id,
});
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  contact
});

export const orderAlphabetically = (contacts) => {
  let grouped = {}
  let _contacts = contacts.sort((a,b) => {
    if(a.firstname < b.firstname) 
      return -1;
    if(a.firstname > b.firstname) 
      return 1;
    return 0;
  })
  _contacts.forEach(c => {
    const letter = c.firstname[0].toUpperCase();
    grouped = {
      ...grouped,
      [letter]: grouped[letter] !== undefined ? [...grouped[letter], c] : [c]
    }
  });
  return grouped;
}