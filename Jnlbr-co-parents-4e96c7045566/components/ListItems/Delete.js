import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { ListItem } from 'react-native-elements';
import colors from '../../constants/colors';
import commonStyles from './commonStyles';

export default (props) => (
  <ListItem
    containerStyle={commonStyles.listContainer}
    bottomDivider
    onPress={props.onPress}
    title={props.title}
    titleStyle={styles.title}
    rightIcon={{
      type:"material-community",
      name:"window-close",
      color:'red'
    }}
  />
)

const styles = StyleSheet.create({
  input: {
    flex:1,
    color:colors.gray,
    marginLeft: 10,
  },
  title: {
    color:'red'
  }
})