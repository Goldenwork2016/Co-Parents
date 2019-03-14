import React, { Component } from 'react'
import { ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native'
import HeaderTitle from './HeaderTitle';
import CommentBox from './CommentBox';
import { FixedFooter } from '../../components/Footers';
import CommentEntry from './CommentEntry';
import colors from '../../constants/colors';

export default class MessageRoom extends Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: <HeaderTitle {...navigation.getParam('item', {})}/>
  })

  state = {
    messages: [],
    data: {},
    text: '',
  }

  componentDidMount() {
    const { messages, ...data } = this.props.navigation.getParam('item', {});
    this.setState({
      messages,
      data
    });
  }

  handleSend = () => {
    const message = {
      text: this.state.text,
      me: true,
      time: new Date()
    }
    this.setState({
      messages: [...this.state.messages, message],
      text: '',
    });
    this.props.addMessage(this.state.data.id, message);
  }

  render() {

    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView>
          {this.state.messages.map((m,i) => (
            <CommentEntry
              key={i}
              {...m} 
              title={
                m.me? 'ME' : this.state.data.firstname[0].toUpperCase()
              }
              icon={
                m.me? null : this.state.data.icon
              } 
            />
          ))}
        </ScrollView>
        <FixedFooter containerStyles={{bottom:0}}>
          <CommentBox
            value={this.state.text}
            onChangeText={(text) => this.setState({text})}
            onAttachmentPress={() => console.log('atachment')}
            onSendPress={this.handleSend}
          />
        </FixedFooter>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: colors.background
  }
});