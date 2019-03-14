import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native';
import colors from '../../constants/colors';
import { DEVICE_HEIGHT } from '../../constants/device';

export default ({children}) => (
  <ImageBackground 
    source={require('../../assets/background_curved.png')}
    style={styles.background}
  >
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background
  },
});