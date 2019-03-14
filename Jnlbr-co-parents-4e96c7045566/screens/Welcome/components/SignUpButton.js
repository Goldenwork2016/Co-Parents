import AuthButton from './AuthButton';

const SignUpButton = AuthButton({
  title: "Sign up",
  color: "#EDEDED",
  iconProps: {
    type:"font-awesome",
    name:"user-plus",
    color:"#4E504D"
  },
  titleStyles: {
    color:'#515450'
  }
});

export default SignUpButton;