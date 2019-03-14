import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { MessageListScreen, MessageRoomScreen } from '../../screens'
import MenuIcon from '../commons/MenuIcon';
import OptionIcon from '../commons/OptionIcon';
import { stackOptions } from '../commons/options';

export default createStackNavigator({
  MessageList: {
    screen: MessageListScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Messages',
      headerLeft: <MenuIcon navigation={navigation} />,
      headerRight: <OptionIcon />
    })
  }, 
  MessageRoom: {
    screen: MessageRoomScreen
  }
}, stackOptions('MessageList'));