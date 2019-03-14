import AddChild from './AddChild';
import { connect } from 'react-redux';
import { addChild, removeChild } from '../../redux/actions/child';

const mapStateToProps = ({child, user}) => ({
  children:child.children,
  user: user.user,
})
const mapDispatchToProps = dispatch => ({
  addChild: (child) => dispatch(addChild(child)),
  removeChild: (id) => dispatch(removeChild(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddChild);