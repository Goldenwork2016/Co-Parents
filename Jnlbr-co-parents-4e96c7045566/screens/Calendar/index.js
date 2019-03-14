import Calendar from './Calendar';
import { connect } from 'react-redux';
import { addEvent, updateEvent, setEvent, removeEvent } from '../../redux/actions/event';

const mapStateToProps = ({ event }) => ({
  events: event.events
});

const mapDispatchToProps = dispatch => ({
  addEvent: () => dispatch(addEvent()),
  updateEvent: () => dispatch(updateEvent()),
  setEvent: (evt) => dispatch(setEvent(evt))
}) 

export default connect(mapStateToProps,mapDispatchToProps)(Calendar)