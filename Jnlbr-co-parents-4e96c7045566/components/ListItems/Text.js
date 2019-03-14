import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { ListItem } from 'react-native-elements';
import colors from '../../constants/colors';
import commonStyles from './commonStyles';

export default (props) => (
  <ListItem
    containerStyle={commonStyles.listContainer}
    bottomDivider
    title={
      <View style={commonStyles.container}>
        <Text style={commonStyles.text}>{props.title}</Text>
        <TextInput
          underlineColorAndroid="transparent"
          value={props.value}
          onChangeText={props.onChangeText}
          style={stlyes.input}
          placeholderTextColor="#c8c8c8"
          placeholder={props.placeholder}
        />
      </View>
    }
  />
)

const stlyes = StyleSheet.create({
  input: {
    flex:1,
    color:colors.gray,
    marginLeft: 10,
  }
})