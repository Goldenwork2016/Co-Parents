import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements';
import colors from '../../constants/colors';
import commonStyles from './commonStyles';

export default ({title,leftIcon}) => (
  <ListItem
    containerStyle={[commonStyles.listContainer, styles.container]}
    bottomDivider
    title={title}
    leftIcon={{
      ...leftIcon,
      color: colors.green,
      size: 16
    }}
    rightIcon={{
      type:'material-community',
      name:'reload',
      color:colors.green
    }}
  />
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    borderBottomColor: colors.green
  }
});