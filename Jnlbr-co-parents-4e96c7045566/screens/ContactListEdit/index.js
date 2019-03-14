import { connect } from 'react-redux';
import ContactListEdit from './ContactListEdit';
import { removeContact } from '../../redux/actions/contact';

const mapDispatchToProps = dispatch => ({
  removeContact: id => dispatch(removeContact(id))
})

export default connect(null,mapDispatchToProps)(ContactListEdit);