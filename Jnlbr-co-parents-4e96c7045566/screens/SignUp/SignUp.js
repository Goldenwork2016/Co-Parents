import React, { Component } from 'react'
import { 
  View, 
  KeyboardAvoidingView, 
  ImageBackground, 
  StyleSheet, 
  ScrollView,
  Dimensions
} from 'react-native';
import { Logo } from '../../components';
import { Input } from '../../components/Input';
import { LogInButton } from '../../components/Buttons';
import { signUp } from '../../api/auth';
import Loading from '../../components/Loading/loading';
import { emptyFields } from '../../utils/emptyFields';
import MessageHandler from '../../utils/MessageHandler';

const { height, width } = Dimensions.get('window');

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.messageHandler = new MessageHandler();
    this.state = {
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirm: '',
      loading: false,
      disabled: true,
      match: true
    }
  }

  static navigationOptions = {
    title: 'Sign up',
  };


  handleSignUp = async () => {
    if(this.state.password === this.state.confirm) {
      this.setState({loading:true, match:true});
      let user = null;
      try {
        user = await signUp(this.state);
      } catch(err) {
        this.messageHandler.errorMessage(err.message || err);
      } finally {
        this.setState({loading:false});
      }
      if(user) {
        this.props.setUser(user);
        this.props.navigation.navigate('AddChildScreen')
      }
    } else {
      this.setState({match:false})
    }
  }

  render() {
    const disabled = emptyFields(['name','phoneNumber','email','password','confirm'], this.state);
    const { match } = this.state;
    return (
      <ImageBackground source={require('../../assets/background_empty.png')} style={styles.background} resizeMode="stretch">
      <KeyboardAvoidingView
        style={{flex: 1}} 
        enabled
      > 
        <Loading 
          isVisible={this.state.loading}
        />
        <ScrollView>
          <Logo 
            containerStyle={styles.logoContainer} 
            logoHeight={100} 
            width={100} 
            iconStyle={{marginBottom: -10}}
          />
          <View style={styles.signUpContainer}>
            <Input
              containerStyle={styles.inputContainer}
              iconProps={{
                name:"user-circle-o",
                type:"font-awesome"
              }}
              placeholder="Full Name"
              textContentType="familyName"            
              onChangeText={(name) => this.setState({name})}
            />
            <Input
              containerStyle={styles.inputContainer}
              iconProps={{
                name:"md-call",
                type:"ionicon",
                reverse: true,
                color:"white",
                reverseColor:"green",
                size: 10,
                marginRight: -0.5
              }}
              placeholder="Mobile phoneNumber"
              textContentType="telephoneNumber"
              onChangeText={(phoneNumber) => this.setState({phoneNumber})}
            />
            <Input
              containerStyle={styles.inputContainer}
              iconProps={{
                name:"mail",
                type:"entypo"
              }}
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
              onChangeText={(email) => this.setState({email})}
            />
            <Input
              outSideContainerStyles={styles.inputContainer}
              iconProps={{
                name:"lock-outline",
                type:"MaterialCommunityIcons"
              }}
              errorMessage="Password must match"
              error={!match}
              placeholder="Password"
              textContentType="password"
              secureTextEntry
              onChangeText={(password) => this.setState({password})}
            />          
            <Input
              outSideContainerStyles={styles.inputContainer}
              iconProps={{
                name:"lock-outline",
                type:"MaterialCommunityIcons"
              }}
              errorMessage="Password must match"
              error={!match}
              placeholder="Confirm password"
              textContentType="password"
              secureTextEntry
              onChangeText={(confirm) => this.setState({confirm})}
            />
            
            <LogInButton
              disabled={disabled}
              title="SIGN UP" 
              onPress={this.handleSignUp} 
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  logoContainer: {
    alignItems:'center'
  },
  signUpContainer: {  
    flex: 1,
    alignItems: 'center',
    marginTop: height * 0.025,
    width: width, // * 0.75
  },
  inputContainer: {
    marginBottom: 15
  }
})

export default SignUp;