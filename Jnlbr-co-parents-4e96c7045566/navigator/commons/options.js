import React from 'react'
import BackIcon from './BackIcon';
import colors from '../../constants/colors';

export const stackOptions = ({initialRouteName}) => ({
  initialRouteName: initialRouteName,
  headerLayoutPreset: 'center',
  defaultNavigationOptions: ({navigation}) => ({
    headerTitleStyle: {
      fontWeight: 'normal',
      color: colors.headerTitle
    },
    headerBackImage: <BackIcon />
  })
});