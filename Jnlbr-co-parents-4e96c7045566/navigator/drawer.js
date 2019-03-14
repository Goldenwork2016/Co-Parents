import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import CalendarNavigator from './calendar';
import ContactsNavigator from './contacts';
import MessagesNavigator from './messages';
import CheckNavigator from './check';
import FamilyNavigator from './family';
import Drawer from './commons/Drawer';
import colors from '../constants/colors';
import CoParentNavigator from './coparent';
import ProfileNavigator from './profile';

export default createDrawerNavigator(
  {
    // HomeNavigator: {
    //   screen: CalendarNavigator,
    //   navigationOptions: {
    //     title:'Home'
    //   }
    // },
    CalendarNavigator: {
      screen: CalendarNavigator,
      navigationOptions: {
        title:'Calendar'
      }
    },
    CheckNavigator: {
      screen: CheckNavigator,
      navigationOptions: {
        title: 'Check'
      }
    },
    ContactsNavigator: {
      screen: ContactsNavigator,
      navigationOptions: {
        title:'Contacts'
      }
    },
    MessagesNavigator: {
      screen: MessagesNavigator,
      navigationOptions: {
        title:'Messages'
      }
    },
    // =============================
    CoParentInvite: {
      screen: CoParentNavigator,
      navigationOptions: {
        title: 'Invite Co-Parent'
      }
    },
    // =============================
    ProfileNavigator: {
      screen: ProfileNavigator,
      navigationOptions: {
        title: 'Profile'
      }
    },
    FamilyNavigator: {
      screen: FamilyNavigator,
      navigationOptions: {
        title: 'Family'
      }
    }
  }, {
    // Change to CalendarNavigator or HomeNavigator
    initialRouteName: 'CalendarNavigator',
    contentComponent: props => <Drawer {...props} />,
    drawerBackgroundColor: colors.background,
    contentOptions: {
      activeTintColor: colors.green,
      inactiveTintColor: colors.gray,
      labelStyle: {
        fontWeight: 'normal',
      }
    }
  }
);