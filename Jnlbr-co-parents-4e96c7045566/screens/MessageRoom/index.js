import { connect } from 'react-redux';
import MessageRoom from './MessageRoom';
import { addMessage } from '../../redux/actions/message';

const mapDispatchToProps = dispatch => ({
  addMessage: (id,message) => dispatch(addMessage(id,message))
});

export default connect(null,mapDispatchToProps)(MessageRoom);