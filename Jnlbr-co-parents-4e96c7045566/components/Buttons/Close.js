import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../constants/colors';

export default (props) => (
  <Icon
    type="material-community" 
    name="window-close" 
    color={colors.gray}
    containerStyle={[styles.container, props.containerStyles]} 
    onPress={props.onPress}
  />
);

const styles = StyleSheet.create({
  container: {
    marginRight:10
  }
});