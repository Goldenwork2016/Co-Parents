import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { FamilyBackground } from '../../components/Background';
import { AddButton } from "../../components/Buttons";
import { FixedFooter } from '../../components/Footers';
import { ContactList as List } from '../../components/Lists';
import Contact from '../../components/ListItems/Contact';

class ContactList extends Component {
  
  render() {
    let { contacts } = this.props;
    let keys = Object.keys(contacts);

    return (
      <FamilyBackground>
        <ScrollView 
          contentContainerStyle={styles.container}
        >
          {keys.map(key => (
            <List title={key} key={key}>
              {contacts[key].map((c,i) => (
                <Contact
                  item={c}
                  onPress={() => this.props.navigation.navigate('EditContact', { contact: c })}
                  key={i}
                />
              ))}
            </List>
          ))}
        </ScrollView>
        <FixedFooter containerStyles={styles.footer}>
          <AddButton
            onPress={() => this.props.navigation.navigate('AddContact')}
          />
        </FixedFooter>
      </FamilyBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:25,
  },
  footer: {
    justifyContent:'flex-end',
  }
})

export default ContactList;