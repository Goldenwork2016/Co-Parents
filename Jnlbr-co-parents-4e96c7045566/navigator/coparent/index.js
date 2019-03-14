import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { CoParentInviteScreen } from '../../screens'
import MenuIcon from '../commons/MenuIcon';
import OptionIcon from '../commons/OptionIcon';
import { stackOptions } from '../commons/options';

export default createStackNavigator({
  CoParentInvite: {
    screen: CoParentInviteScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Invite Co-Parent',
      headerLeft: <MenuIcon navigation={navigation} />,
      headerRight: <OptionIcon />
    })
  }
}, stackOptions('CoParentInvite'));