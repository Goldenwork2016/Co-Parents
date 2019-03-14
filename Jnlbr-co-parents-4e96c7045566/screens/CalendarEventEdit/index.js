import { connect } from 'react-redux';
import EditEventScreen from './EditEvent';
import { removeEvent, setEvent } from '../../redux/actions/event';

const mapStateToProps = ({child}) => ({
  children: child.children,
})
const mapDispatchToProps = dispatch => ({
  removeEvent: (id) => dispatch(removeEvent(id)),
  setEvent: evt => dispatch(setEvent(evt))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEventScreen)