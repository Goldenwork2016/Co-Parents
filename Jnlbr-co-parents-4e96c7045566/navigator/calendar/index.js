import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { CalendarScreen, CalendarEventAddScreen, CalendarEventEditScreen } from '../../screens'
import MenuIcon from '../commons/MenuIcon';
import colors from '../../constants/colors';

export default createStackNavigator({
  Calendar: CalendarScreen,
  AddEvent: CalendarEventAddScreen,
  EditEvent: CalendarEventEditScreen
}, {
  initialRouteName: 'Calendar',
  headerLayoutPreset: 'center',
  defaultNavigationOptions: ({navigation}) => ({
    headerTitleStyle: {
      fontWeight: 'normal',
      color: colors.headerTitle
    },
    headerLeft: <MenuIcon navigation={navigation} />
    // headerRight: <Icon type="simple-line-icon" name="options-vertical" color={colors.green} containerStyle={{marginRight:10}} onPress={() => console.log('On menu press')}/>
  })
})