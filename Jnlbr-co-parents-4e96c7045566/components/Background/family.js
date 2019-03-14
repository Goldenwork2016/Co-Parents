import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native';

export default (props) => (
  <ImageBackground source={require('../../assets/background_after_sign_up.png')} style={styles.background} resizeMode="stretch">
    {props.children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
});