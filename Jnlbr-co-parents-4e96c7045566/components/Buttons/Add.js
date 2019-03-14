import React from 'react'
import { Icon } from 'react-native-elements';

export default (props) => (
  <Icon
    raised
    reverse
    type="octicon" 
    name="plus"
    size={18}
    color="#24bfff"
    containerStyle={{marginRight:10}}
    onPress={props.onPress}
  />
);