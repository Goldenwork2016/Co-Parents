import React from 'react'
import { StyleSheet } from 'react-native';
import Input from './Input'

export default (props) => (
  <Input
    icon={false}
    color="#545454"
    borderColor="#beb8b6"
    containerStyle={styles.container}
    placeholder={props.placeholder}
    textContentType={props.textContentType}
    onChangeText={props.onChangeText}
  />
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
})