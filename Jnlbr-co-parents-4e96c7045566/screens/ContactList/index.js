import { connect } from 'react-redux';
import ContactList from './ContactList';
import { orderAlphabetically } from '../../redux/actions/contact';

const mapStateToProps = ({ contact }) => ({
  contacts: orderAlphabetically(contact.contacts)
})

export default connect(mapStateToProps)(ContactList);