import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Overlay } from 'react-native-elements';
import colors from '../../constants/colors';

export default ({ isVisible }) => (
  <Overlay
    isVisible={isVisible}
    windowBackgroundColor="rgba(255, 255, 255, .5)"
    width="auto"
    height="auto"
  >
    <ActivityIndicator 
      size="large" 
      color={colors.green} 
    />
  </Overlay>
);