import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements';
import commonStyles from './commonStyles';
import Switch from 'react-native-switch-pro'
import colors from '../../constants/colors';

export default (props) => (
  <ListItem 
    containerStyle={commonStyles.listContainer}
    bottomDivider
    title={
      <View style={[commonStyles.container, { justifyContent: 'space-between'}]}>
        <Text style={commonStyles.text}>{props.title}</Text>
        <Switch
          backgroundActive={colors.green}
          value={props.value}
          onSyncPress={props.onPress}
        />
      </View>
    }
  />
)

const styles = StyleSheet.create({
  
})