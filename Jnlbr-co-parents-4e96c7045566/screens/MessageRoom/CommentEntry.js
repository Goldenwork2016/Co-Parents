import React from 'react';
import { 
  View, 
  Text,
  StyleSheet
} from 'react-native'
import colors from '../../constants/colors';
import { DEVICE_WIDTH } from '../../constants/device';
import { Avatar } from 'react-native-elements';
import { handleAvatarProps } from '../../utils/handleProps';

export default function CommentEntry({me, icon, title, text}) {
  const shapeStyles = me? styles.triangleCornerRight : styles.triangleCornerLeft;
  const avatarProps = handleAvatarProps(icon,title);
  
  return (
    <View style={{
      marginLeft: 10,
      flex: 1,
      flexDirection: me? 'row-reverse' : 'row',
      marginTop: 20
    }}>
      <Avatar
        rounded
        // source={{uri:props.icon}}
        // title={props.title}
        {...avatarProps}
      />
      <View style={[styles.talkBubble, {
        marginLeft: me? 0 : 15,
        marginRight: me? 15 : 0
      }]}>
        <View style={[styles.talkBubbleSquare, {backgroundColor: me? '#eaeaea':colors.green}]}>
          <Text style={[styles.text, {color: me? colors.grayDark : 'white'}]}>{text}</Text>
        </View>
        <View 
          style={shapeStyles}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  talkBubble: {
    backgroundColor: 'transparent'
  },
  talkBubbleSquare: {
    minHeight: 40,
    maxWidth: DEVICE_WIDTH * 0.5,
    borderRadius: 15,
    zIndex: 1000,
    justifyContent:'center'
  },
  text: {
    marginHorizontal: 15,
    marginVertical: 5
  },
  triangleCornerLeft: {
    zIndex: 100,
    position: 'absolute',
    left: -12,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 40,
    borderTopWidth: 25,
    borderLeftColor: 'transparent',
    borderTopColor: colors.green
  },
  triangleCornerRight: {
    zIndex: 100,
    position: 'absolute',
    right: -12,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 40,
    borderTopWidth: 25,
    borderRightColor: 'transparent',
    borderTopColor: '#eaeaea'
  },
});