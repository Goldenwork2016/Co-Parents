import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { DEVICE_WIDTH } from '../../constants/device';

export const ChildrenMarker = ({placeholder,onChangeText,onEndEditing,containerStlye, ...props}) => (
  <View style={[styles.container, containerStlye]}>
    <TextInput
      keyboardType="numeric"
      maxLength={2}
      onChangeText={onChangeText}
      value={String(placeholder)}
      onEndEditing={onEndEditing}
      style={styles.input}
      {...props}
    />
  </View>
);

export const ChildMarker = ({placeholder,containerStlye,textStyles, ...props}) => (
  <View style={[styles.container, { width:DEVICE_WIDTH*0.065, ...containerStlye}]}>
    <Text
      style={[styles.input, {height: DEVICE_WIDTH*0.05, ...textStyles}]}
    >{placeholder}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 25,
    borderColor: '#82c84f',
    width: DEVICE_WIDTH * 0.09,
  },
  input: {
    textAlign:'center',
    margin: 0,
    padding: 0
  }
})