import AddCoParent from './AddCoParent';
import { connect } from 'react-redux';
// import { setUser } from '../../redux/actions/user';
import { setChildren } from '../../redux/actions/child';
import { setCoParents } from '../../redux/actions/parent';


const mapStateToProps = ({user}) => ({
  user: user.user,
})
const mapDispatchToProps = dispatch => ({
  setChildren: (children) => dispatch(setChildren(children)),
  setCoParents: (coParents) => dispatch(setCoParents(coParents))
  // removeChild: (id) => dispatch(removeChild(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddCoParent);