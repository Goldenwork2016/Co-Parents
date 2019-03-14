import React from 'react'
import { Icon } from 'react-native-elements';
import colors from '../../constants/colors';

export default ({navigation}) => (
  <Icon 
    type="material-community" 
    name="menu" 
    color={colors.green} 
    containerStyle={{marginLeft:10}} 
    onPress={() => navigation.openDrawer()}
  />
)