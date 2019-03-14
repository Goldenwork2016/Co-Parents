import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements';
import colors from '../../constants/colors';

export default ({title,subtitle,titleStyle,subtitleStyle}) => (
  <View style={styles.container}>
    <Text h4 style={[styles.title, titleStyle]}>
      {title}
    </Text>
    <Text style={[styles.subtitle, subtitleStyle]}>
      {subtitle}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 7.5,
    // backgroundColor: '#f6f6f6'
  },
  title: {
    color: colors.textLight,
    fontWeight:'normal'
  },
  subtitle: {
    color: colors.green
  }
});
