import { connect } from 'react-redux';
import CoParentInvite from './CoParentInvite';
import { orderAlphabetically } from '../../redux/actions/contact';

const mapStateToProps = ({ contact }) => ({
  contacts: orderAlphabetically(contact.contacts),
  length: contact.contacts.length
})

export default connect(mapStateToProps)(CoParentInvite);