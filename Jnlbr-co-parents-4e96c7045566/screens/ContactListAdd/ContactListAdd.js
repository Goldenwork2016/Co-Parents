import React, { Component } from 'react'
import { ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { FieldInput } from '../../components/Input';
import { FamilyBackground } from '../../components/Background';
import { Button } from '../../components/Buttons';

class ContactListAdd extends Component {

  state = {
    firstname: '',
    lastname: '',
    number: '',
    email: '',
    address : '',
    note: '',
  }

  handleConfirm = () => {
    this.props.addContact({
      id: Math.random() * 1000000,
      ...this.state
    });
    this.props.navigation.goBack();
  }

  render() {

    return (
      <FamilyBackground>
        <KeyboardAvoidingView enabled style={{flex:1}}>
          <ScrollView contentContainerStyle={styles.container}>
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
            <FieldInput
              placeholder="Mobile number"
              textContentType="telephoneNumber"
              onChangeText={(number) => this.setState({number})}
            />
            <FieldInput
              placeholder="Email"
              textContentType="emailAddress"
              onChangeText={(email) => this.setState({email})}
            />
            <FieldInput
              placeholder="Address"
              textContentType="addressCity"
              onChangeText={(address) => this.setState({address})}
            />
            <FieldInput
              placeholder="Note"
              textContentType="none"
              onChangeText={(note) => this.setState({note})}
            />
            <Button 
              title="CONFIRM"
              color="#82c84f"
              containerStyle={styles.buttonContainer}
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.buttonStyle}
              onPress={this.handleConfirm}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </FamilyBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop:30,
  },
  buttonContainer: {
    borderRadius: 10,
    marginBottom: 15,
    marginBottom: 45
  },
  buttonStyle: {
    borderWidth: 1.5,
    borderColor:'#c8c8c4',
  },
  buttonTitle: {
    color: 'white'
  },
})

export default ContactListAdd;