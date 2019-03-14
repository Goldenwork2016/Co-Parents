import React from 'react'
import { View, StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../constants/device';

export default ({ containerStyles, ...props}) => (
  <View style={[styles.container, containerStyles]}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    bottom: 5,
    width: DEVICE_WIDTH,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between'
  }
})