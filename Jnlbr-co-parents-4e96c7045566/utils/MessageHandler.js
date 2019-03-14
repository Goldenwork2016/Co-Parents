import {
  ToastAndroid
} from 'react-native';

class MessageHandler {
  constructor(platform = null) {
    this.platform = platform;
  }
  errorMessage = (message) => ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
  centerMessage = (message) => ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
}

export default MessageHandler;