import { connect } from 'react-redux';
import MessageList from './MessageList';
// import { orderAlphabetically } from '../../redux/actions/contact';

const mapStateToProps = ({ message }) => ({
  conversations: message.conversations
})

export default connect(mapStateToProps)(MessageList);