import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { FieldInput } from '../../components/Input'
import { Button } from '../../components/Buttons';
import { DEVICE_WIDTH } from '../../constants/device';
import { FamilyBackground } from '../../components/Background';
import colors from '../../constants/colors';
import Loading from '../../components/Loading/loading';
import { fillForm } from '../../api/auth';
import MessageHandler from '../../utils/MessageHandler';

class AddCoParent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      firstname:'',
      lastname:'',
      children: [],
    }
    this.messageHandler = new MessageHandler();
  }

  static navigationOptions = {
    title: 'Add co-parent info',
    headerTitleStyle: {
      fontWeight: 'normal',
      color: colors.headerTitle
    },
    headerStyle: {
      backgroundColor:colors.background
    },
  };

  componentDidMount() {
    const children = this.props.navigation.getParam('children', []);
    this.setState({children});
  }

  handleConfirm = async () => {
    this.setState({ loading: true });
    let data = null;
    try {
      data = await fillForm(this.props.user.id, this.state.children, { firstname: this.state.firstname, lastname: this.state.lastname });
    } catch(err) {
      this.messageHandler.errorMessage(err.message || err);
    } finally {
      this.setState({loading:false});
    }
    if(data) {
      console.log(data);
      this.props.setChildren(data.children);
      this.props.setCoParents(data.coParents);
      this.props.navigation.navigate('MainNavigator');
    }
  }
  render() {

    return (
      <FamilyBackground>
      <View style={styles.container}>
        <Loading isVisible={this.state.loading} />
        <FieldInput
          placeholder="First Name"
          textContentType="name"
          onChangeText={(firstname) => this.setState({firstname})}
        />
        <FieldInput
          placeholder="Last Name"
          textContentType="familyName"
          onChangeText={(lastname) => this.setState({lastname})}
        />
        <Button 
          title="Invite co-parent"
          color="#3670B9"
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={() => console.log('Invite co-parent')}
        />
        <Button 
          title="CONFIRM"
          color="#82c84f"
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
          onPress={this.handleConfirm}
        />
      </View>
      </FamilyBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: DEVICE_WIDTH,
    alignItems: 'center',
    marginTop:30
  },
  inputContainer: {
    marginBottom: 15
  },
  buttonContainer: {
    marginBottom: 15,
  },
  buttonTitle: {
    color: 'white'
  },
  buttonStyle: {
    borderWidth: 1.5,
    borderColor:'#c8c8c4',
  }
})

export default AddCoParent;