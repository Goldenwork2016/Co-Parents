import React from 'react'
import { Icon } from 'react-native-elements';

export default (props) => (
  <Icon
    raised
    reverse
    type="material" 
    name="delete-forever"
    size={props.size}
    reverseColor="red"
    color="#e0e0e0"
    onPress={props.onPress}
  />
);