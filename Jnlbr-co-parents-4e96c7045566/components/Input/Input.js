import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Icon, Text } from 'react-native-elements';
import { DEVICE_WIDTH } from "../../constants/device";

const _Input = ({ icon, color, borderColor, iconProps, containerStyle, iconContainerStyle, inputStyles, rightIcon: RightIcon, rightIconProps, error, errorMessage, outSideContainerStyles, ...props }) => (
  <View style={outSideContainerStyles}>
    <Input
      {...props}
      underlineColorAndroid="transparent"
      containerStyle={[styles.container, { borderColor: borderColor ? borderColor : color, ...containerStyle}]}
      placeholderTextColor={color}
      inputStyle={[styles.input, { color, ...inputStyles }]}
      inputContainerStyle={styles.inputContainer}
      leftIcon={
        icon ? (<Icon 
          color={color}
          size={16}
          marginLeft={7.5}
          marginRight={7.5}
          {...iconProps}
        />) : null
      }
      rightIcon={
        RightIcon ? <RightIcon {...rightIconProps}/> : null
      }
      leftIconContainerStyle={[styles.iconContainer, iconContainerStyle]}
    />
    {error && (<Text style={styles.errorText}>{errorMessage}</Text>)}
  </View>
);

_Input.defaultProps = {
  editable: true,
  icon: true,
  color: 'white',
  borderColor: null,
  rightIcon: null
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 12.5,
    width: DEVICE_WIDTH * 0.80,
    // borderColor: 'white',
    // paddingVertical: 5,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  input: {
    marginLeft: 7.5,
    // color: 'white',
  },
  iconContainer: {
    marginLeft: 0,
  },
  errorText: {
    color:'red',
    marginLeft: 5,
    marginTop:2.5
  }
});

export default _Input;