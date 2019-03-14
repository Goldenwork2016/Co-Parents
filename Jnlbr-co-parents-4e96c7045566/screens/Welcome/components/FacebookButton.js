import AuthButton from './AuthButton';

const FacebookButton = AuthButton({
  title: "Log in with Facebook",
  color: "#395692",
  iconProps: {
    type: 'entypo',
    name:'facebook'
  }
});

export default FacebookButton;