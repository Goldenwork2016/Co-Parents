import React from 'react'
import { Icon } from 'react-native-elements';
import colors from '../../constants/colors';

export default Edit = (props) => (
  <Icon
    disabled={props.disabled}
    raised
    reverse
    type="evilicon" 
    name="pencil"
    size={props.size}
    color="#e0e0e0"
    reverseColor={colors.green}
    onPress={props.onPress}
  />
);

Edit.defaultProps = {
  disabled: false
}