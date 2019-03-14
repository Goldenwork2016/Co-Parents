import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { LogInScreen, SignUpScreen, WelcomeScreen, AddChildScreen, AddCoParentScreen, CalendarScreen, CoParentInviteScreen } from '../../screens'
import BackIcon from '../commons/BackIcon';
import colors from '../../constants/colors';

export default createStackNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: ({navigation}) => ({
        header: null
      })
    },
    SignUpScreen: {
      screen: SignUpScreen
    },
    LogInScreen: {
      screen: LogInScreen,
    },
    AddChildScreen: {
      screen: AddChildScreen
    },
    AddCoParentScreen: {
      screen: AddCoParentScreen
    },
    // CalendarScreen: {
    //   screen: CalendarScreen
    // },
    // CoParentInvite: {
    //   screen: CoParentInviteScreen,
    //   navigationOptions: {
    //     title: 'Invite Co-Parent',
    //     headerTitleStyle: {
    //       fontWeight: 'normal',
    //       color: colors.headerTitle
    //     }
    //   }
    // }
  },{
    initialRouteName: 'WelcomeScreen',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontWeight: 'normal',
        color: colors.headerTitle
      },
      headerBackImage: <BackIcon />
    },
  }
);