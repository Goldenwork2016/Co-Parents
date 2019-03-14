import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { FamilyBackground } from '../../components/Background';
import Label from './label';
import { EditButton, RemoveButton } from '../../components/Buttons';

class ContactListEdit extends Component {

  state = {
    contact: {}
  }

  static navigationOptions = ({navigation}) => {
    const contact = navigation.getParam('contact', {firstname: 'Edit ', lastname: 'contact'});
    return {
      title: `${contact.firstname} ${contact.lastname}`
    }
  }

  componentDidMount() {
    this.setState({
      contact: this.props.navigation.getParam('contact', {})
    })
  }

  removeContact = () => {
    this.props.removeContact(this.state.contact.id);
    this.props.navigation.goBack();
  }

  render() {
    const { contact } = this.state;

    return (
      <FamilyBackground>
        <View style={styles.container}>
          <View style={styles.titleContainer}> 
            <Icon
              size={45}
              type="font-awesome"
              name="user"
            />
            <Text style={styles.title}>
              {`${contact.firstname} ${contact.lastname}`}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Label label="Address" value={contact.address} />
            <Label label="Email" value={contact.email} />
            <Label label="Phone" value={contact.number} />
            <Label label="Note" value={contact.note} />
          </View>
          <View style={styles.optionsContainer}>
            <EditButton size={24} onPress={() => console.log('edit pressed')}/>
            <RemoveButton size={24} onPress={this.removeContact} />
          </View>
        </View>
      </FamilyBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 25
  },
  title: {
    marginLeft: 20,
    fontSize: 32,
  },
  infoContainer: {
    alignItems:'center'
  },
  optionsContainer: {
    marginTop: 20,
    flexDirection:'row',
    justifyContent:'center',
  }
})

export default ContactListEdit;