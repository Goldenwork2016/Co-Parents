import React, { Fragment } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../../constants/colors';
import { DEVICE_WIDTH } from '../../constants/device';

export default ({title, children}) => (
  <Fragment>
    <View style={styles.list}>
      <Text style={styles.letter}>
        {title}
      </Text>
      <View style={styles.contactList}>
        {children}
      </View>
    </View>
  </Fragment>
);

const styles = StyleSheet.create({
  list: {
    flexDirection:'row'
  },
  letter: {
    position:'absolute',
    marginTop:14,
    fontSize: 19,
    color: colors.gray,
    textAlign:'center',
    left: 15
  },
  contactList: {
    flex:8,    
  },
});