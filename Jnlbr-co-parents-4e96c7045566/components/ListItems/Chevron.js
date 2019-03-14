import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements';
import commonStyles from './commonStyles';

export default (props) => (
  <ListItem 
    containerStyle={commonStyles.listContainer}
    titleStyle={styles.title}
    bottomDivider
    title={props.title}
    chevron
  />
)

const styles = StyleSheet.create({
  title: {
    fontSize: 15
  }
})