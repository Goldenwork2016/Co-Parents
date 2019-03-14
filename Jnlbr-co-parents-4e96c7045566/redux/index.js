import { combineReducers } from "redux";
import { childReducer } from "./actions/child";
import { eventReducer } from "./actions/event";
import { contactReducer } from './actions/contact'
import { messageReducer } from './actions/message'
import { userReducer } from "./actions/user";
import { authReducer } from "./actions/auth";
import { coParentReducer } from "./actions/parent";


export default combineReducers({
  child: childReducer,
  event: eventReducer,
  contact: contactReducer,
  message: messageReducer,
  user: userReducer,
  auth: authReducer,
  coParent: coParentReducer
});