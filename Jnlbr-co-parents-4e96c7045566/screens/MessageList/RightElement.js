import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import moment from 'moment';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  text: {
    color: colors.textLight,
    fontSize: 12
  },
});

export default function RightElement(props) {
  return (
    <View>
      <Text style={styles.text}>
        {moment(props.date).fromNow()}
      </Text>
    </View>
  );
}