import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import colors from '../../constants/colors';
import { Avatar } from 'react-native-elements';
import { handleAvatarProps } from '../../utils/handleProps';

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:'center'
  },
  text: {
    color: colors.gray,
    marginLeft: 5,
    fontSize: 16
  },
});

export default function HeaderTitle({icon,firstname,lastname}) {
  const avatarProps = handleAvatarProps(icon,firstname[0].toUpperCase());
  return (
    <View style={styles.container}>
      <Avatar 
        rounded
        // title={props.firstname[0].toUpperCase()}
        // source={{uri:props.icon}}
        {...avatarProps}
      />
      <Text style={styles.text}>
        {`${firstname} ${lastname}`}
      </Text>
    </View>
  );
}