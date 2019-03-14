import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ProfileScreen } from '../../screens'
import MenuIcon from '../commons/MenuIcon';
import OptionIcon from '../commons/OptionIcon';
import { stackOptions } from '../commons/options';

export default createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Profile',
      headerLeft: <MenuIcon navigation={navigation} />,
      headerRight: <OptionIcon />
    })
  }
}, stackOptions('Profile'));