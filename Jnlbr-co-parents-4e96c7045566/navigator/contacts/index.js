import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ContactListScreen, ContactListAddScreen, ContactListEditScreen } from '../../screens'
import MenuIcon from '../commons/MenuIcon';
import OptionIcon from '../commons/OptionIcon';
import { stackOptions } from '../commons/options';

export default createStackNavigator({
  ContactList: {
    screen: ContactListScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Contacts',
      headerLeft: <MenuIcon navigation={navigation} />,
      headerRight: <OptionIcon />
    })
  },
  AddContact: {
    screen: ContactListAddScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Add new contact',
    })
  },
  EditContact: {
    screen: ContactListEditScreen
  }
}, stackOptions('ContactList'));