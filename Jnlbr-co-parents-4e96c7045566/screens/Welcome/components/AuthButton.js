import React from 'react'
import { StyleSheet } from 'react-native'
import Button from '../../../components/Buttons/Button';

function AuthButton({ color, title, titleStyles, containerStyles, iconProps }) {  
  return ({ onPress }) => (
    <Button
      title={title}
      color={color}
      containerStyle={[styles.container, containerStyles]}
      titleStyle={[styles.title, titleStyles]}
      onPress={onPress}
      iconProps={{
        size: 20,
        color: 'white',
        marginLeft: 5,
        ...iconProps
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  title: {
    color: 'white'
  }
});

export default AuthButton;