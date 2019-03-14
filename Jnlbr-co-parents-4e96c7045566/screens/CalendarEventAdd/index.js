import { connect } from 'react-redux';
import AddEventScreen from './AddEvent';
import { setEvent } from '../../redux/actions/event';

const mapStateToProps = ({child, event}) => ({
  children: child.children,
  // event: event.event,
  // events: event.events
})
const mapDispatchToProps = dispatch => ({
  setEvent: (evt) => dispatch(setEvent(evt)),
  // addEvent: () => dispatch(addEvent()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEventScreen)