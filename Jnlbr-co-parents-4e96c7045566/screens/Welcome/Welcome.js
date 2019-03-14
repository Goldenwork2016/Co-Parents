// Modules
import React, { Component } from 'react'
import { 
  StyleSheet, 
  View, 
  ImageBackground,
  Dimensions
} from 'react-native';
import { 
  LoginManager, 
  AccessToken
} from 'react-native-fbsdk';
// Reusable components
import Logo from '../../components/Logo';
// Scene's components
import FacebookButton from './components/FacebookButton';
import EmailButton from './components/EmailButton';
import SignUpButton from './components/SignUpButton';
import Loading from '../../components/Loading/loading';
import { loginWithFacebook } from '../../api/auth';
import MessageHandler from '../../utils/MessageHandler';

// Variables
const height = Dimensions.get('window').height;

// Class component
class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = state = {
      loading: false
    }
    this.messageHandler = new MessageHandler();
  }

  handleFacebookLogin = async () => {
    this.setState({ loading: true });
    const [data, err] = await loginWithFacebook();
    this.setState({ loading: false });
    if(err) {
      this.messageHandler.errorMessage(err);
      return;
    }
    const user = data.user;
    this.props.setUser(user);
    if (user.lastSignInTime == null) {
      this.props.navigation.navigate('AddChildScreen');
    } else {
      this.props.navigation.navigate('MainNavigator');
    }
  }

  render() {
    return (
      <ImageBackground source={require('../../assets/background_empty.png')} style={styles.background} resizeMode="stretch">
        <Loading 
          isVisible={this.state.loading}
        />
        <Logo 
          containerStyle={styles.logoContainer}
        />
        <View style={styles.options}>
          <FacebookButton
            onPress={this.handleFacebookLogin}
          />
          <EmailButton 
            onPress={() => this.props.navigation.navigate('LogInScreen')}
          />
          <SignUpButton 
            onPress={() => this.props.navigation.navigate('SignUpScreen')}
          />
        </View>
      </ImageBackground>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  options: {
    flex: 1,
    alignItems:'center',
    marginTop: height * 0.1
  },
  logoContainer: {
    marginTop: 25,
    alignItems: 'center'
  }
});

export default Welcome;