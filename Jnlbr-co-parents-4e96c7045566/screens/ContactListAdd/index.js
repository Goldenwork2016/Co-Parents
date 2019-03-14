import { connect } from 'react-redux';
import ContactListAdd from './ContactListAdd';
import { addContact } from '../../redux/actions/contact';

const mapStateToProps = ({contact}) => ({
  contacts:contact.contacts
})

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact))
})

export default connect(mapStateToProps,mapDispatchToProps)(ContactListAdd);