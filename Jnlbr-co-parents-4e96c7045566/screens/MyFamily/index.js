import MyFamily from './MyFamily';
import { connect } from 'react-redux'

const mapStateToProps = ({child}) => ({
  children: child.children
});

export default connect(mapStateToProps)(MyFamily);