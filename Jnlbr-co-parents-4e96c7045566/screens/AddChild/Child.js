import React from 'react'
import { View, StyleSheet } from 'react-native'
import { DEVICE_WIDTH } from '../../constants/device';
import { FieldInput } from '../../components/Input';

export default ({onFirstNameTextChange, onLastNameTextChange}) => (
  <View>
    <FieldInput
      placeholder="First Name"
      textContentType="name"
      onChangeText={onFirstNameTextChange}
    />
    <FieldInput
      placeholder="Last Name"
      textContentType="familyName"
      onChangeText={onLastNameTextChange}
    />
  </View>
);