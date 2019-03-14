import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements';
import { DEVICE_WIDTH } from '../../constants/device';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {    
    flexDirection: 'row',
    width: DEVICE_WIDTH * 0.65,
    marginBottom: 1.5,
    marginTop: 1.5
  },
  valueContainer: {
    flex: 3,
    marginLeft: 5
  },
  labelContainer: {
    flex: 1,
  },
  text: {
    color: colors.gray
  }
})

export default function Label(props) {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.text}>
          {`${props.label}:`}
        </Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.text}>
          {props.value}
        </Text>
      </View>
    </View>
  );
}
