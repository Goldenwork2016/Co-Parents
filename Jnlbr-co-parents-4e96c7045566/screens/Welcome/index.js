import Welcome from './Welcome';
import { connect } from 'react-redux';
import { setUser } from '../../redux/actions/user';
// import { setToken } from '../../redux/actions/auth';

// const mapStateToProps = ({ auth }) => ({
// });

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  // setToken: token => dispatch(setToken(token)),
  // setAuth: (user,token) => {
  //   dispatch(setUser(user));
  //   dispatch(setToken(token));
  // }
});

export default connect(null,mapDispatchToProps)(Welcome);