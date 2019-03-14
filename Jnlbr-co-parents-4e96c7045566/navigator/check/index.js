import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { CheckListScreen, CheckMapScreen } from '../../screens'
import { stackOptions } from '../commons/options';
import MenuIcon from '../commons/MenuIcon';
import OptionIcon from '../commons/OptionIcon';

export default createStackNavigator({
  CheckList: {
    screen: CheckListScreen,
    navigationOptions: ({navigation}) => ({
      title: 'CheckList',
      headerLeft: <MenuIcon navigation={navigation} />,
      headerRight: <OptionIcon />
    })
  },
  CheckMap: {
    screen: CheckMapScreen,
    navigationOptions: ({navigation}) => ({
      title: 'CheckMap',
    })
  }
}, stackOptions('CheckList'));