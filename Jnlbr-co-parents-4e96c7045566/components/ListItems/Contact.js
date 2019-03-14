import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements';
import colors from '../../constants/colors';
import { DEVICE_WIDTH } from '../../constants/device';

export default ({item,onPress,containerStyle, ...props}) => (
  <ListItem
    Component={TouchableOpacity}
    {...props}
    onPress={onPress}    
    leftIcon={{
      type:"font-awesome",
      name:"user",
      color: colors.grayDark
    }}
    title={`${item.firstname} ${item.lastname}`}
    titleStyle={styles.title}
    containerStyle={[styles.container, containerStyle]}
  />
);


const styles = StyleSheet.create({
  container: {
    backgroundColor:'transparent',
    marginLeft: 0,
    // paddingLeft:0,
    paddingLeft: DEVICE_WIDTH * 0.125,
  },
  title: {
    color:colors.textDark
  }
})
