import React from 'react';
import { 
  View, 
  TextInput,
  StyleSheet
} from 'react-native'
import { Icon } from 'react-native-elements';
import colors from '../../constants/colors';

const CommentBox = ({ onChangeText, onAttachmentPress, onSendPress, value }) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        multiline
        onChangeText={onChangeText}
        style={styles.input}
        placeholder="Type a message..."
      />
    </View>
    <Icon
      containerStyle={styles.icon}
      iconStyle={{borderRadius:10}}
      type="material"
      name="attach-file" 
      size={20}
      color="white"
      onPress={onAttachmentPress}
      underlayColor="rgba(0,0,0,0.1)"
    />
    <Icon
      containerStyle={styles.icon}
      type="material-community"
      name="send" 
      size={20} 
      color="white"
      onPress={onSendPress}
      underlayColor="rgba(0,0,0,0.1)"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.green,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    backgroundColor:'white',
    flex: 1,
    borderWidth: 1,
    borderColor: '#a9a8a6',
    borderRadius: 10,
  },
  input: {
    paddingVertical: 5,
    paddingRight: 10,
    paddingLeft: 15,
  },
  icon: {
    marginHorizontal: 3,
    borderRadius:12
    // marginVertical: 3,
    // color:"#a9a8a6"
  }
})

export default CommentBox;