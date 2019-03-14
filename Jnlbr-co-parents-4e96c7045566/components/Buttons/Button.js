import React from 'react'
import { StyleSheet } from 'react-native';
import { Button } from "react-native-elements";

const _Button = ({title, color, iconProps, containerStyle, titleStyle, buttonStyle, iconStyles, onPress, disabled, ...props}) => (
  <Button 
    {...props}
    disabled={disabled}
    title={title}
    onPress={onPress}
    buttonStyle={[styles.button, {
      backgroundColor: color,
      opacity: disabled ? 0.7 : 1,
      ...buttonStyle
    }]}
    containerStyle={[styles.container, containerStyle]}
    titleStyle={[styles.title, titleStyle]}
    iconContainerStyle={[styles.icon, iconStyles]}
    icon={{...iconProps}}
    // raised
  />
);

const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderRadius: 10,
  },
  button: {
    height: 50,
    borderRadius: 10,
  },
  title: {
  },
  icon: {
    position: 'absolute',
    left: 5,
  }
})

export default _Button;