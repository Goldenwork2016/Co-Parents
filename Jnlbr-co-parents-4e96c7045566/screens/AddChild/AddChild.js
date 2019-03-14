import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import Switch from 'react-native-switch-pro';
import { Input, FieldInput } from '../../components/Input';
import { Button } from '../../components/Buttons';
import Child from './Child';
import { ChildrenMarker, ChildMarker } from './ChildrenMarker';
import { FamilyBackground } from '../../components/Background';

class AddChild extends Component {

  static navigationOptions = {
    title: 'Add child',
    headerTitleStyle: {
      fontWeight: 'normal',
      color: '#8f8f8f'
    },
    headerStyle: {
      backgroundColor:'#f6f6f6'
    },
  };
  
  constructor(props) {
    super(props);

    this.state = {
      multipleChild: false,
      numberOfChild: 0,
      firstname: '',
      lastname: '',
      children: []
    }
  }

  handleOnTextChange = (i,info) => {
    let children = this.state.children;
    children[i] = {
      ...children[i],
      ...info
    }
    this.setState({children});
  }

  handleOnEndEditing = () => {
    const value = this.state.numberOfChild;
    if(isNaN(value)) 
      return
    let children = [];
    for(let i = 0; i < value; i ++) {
      children.push({
        firstname: '',
        lastname: '',
      })
    }
    this.setState({children});
  }

  handleNext = () => {
    let { firstname, lastname, children } = this.state;
    const { navigation } = this.props;
    if(firstname === '' && lastname === '') {
      navigation.navigate('AddCoParentScreen');
    } else {
      children = [{firstname,lastname}, ...children];
      navigation.navigate('AddCoParentScreen', { children });
    }
  }

  render() {


    return (
      <FamilyBackground>
      <KeyboardAvoidingView enabled style={{flex:1}}>
        <ScrollView contentContainerStyle={styles.container}>
          <Child
            onFirstNameTextChange={(firstname) => this.setState({firstname})}
            onLastNameTextChange={(lastname) => this.setState({lastname})}            
          />
          <Input
            editable={false}
            icon={false}
            color="#535353"
            borderColor="#c8c7c3"
            containerStyle={styles.inputContainer}
            placeholder="Add multiple children"
            textContentType="name"
            rightIcon={Switch}
            rightIconProps={{
              value: this.state.multipleChild,
              onSyncPress: (multipleChild) => this.setState({multipleChild})
            }}
          />
          {(this.state.multipleChild) && (
            <View style={{flex:1,alignItems:'center'}}>
              <ChildrenMarker 
                placeholderTextColor="#535353"
                placeholder={this.state.numberOfChild} 
                onChangeText={(numberOfChild) => this.setState({numberOfChild})} 
                onEndEditing={this.handleOnEndEditing}
              />
              <Text style={styles.amount}>Amount of children</Text>
              {this.state.children.map((c,i) => (
                <View key={i}>
                  <ChildMarker
                    style={{color:"#82c84f"}}
                    containerStlye={{marginBottom:2.5}}
                    placeholder={i+1} 
                    small
                    editable={false}
                  />
                  <Child 
                    onFirstNameTextChange={(firstname) => this.handleOnTextChange(i,{firstname})} 
                    onLastNameTextChange={(lastname) => this.handleOnTextChange(i,{lastname})}
                  />
                </View>
              ))}
            </View>
          )}
          <Button 
            title="NEXT"
            color="#82c84f"
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.buttonStyle}
            onPress={this.handleNext}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      </FamilyBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop:30,
  },
  inputContainer: {
    marginBottom: 15
  },
  buttonContainer: {
    borderRadius: 10,
    marginBottom: 15,
    marginBottom: 45
  },
  buttonStyle: {
    borderWidth: 1.5,
    borderColor:'#c8c8c4',
  },
  buttonTitle: {
    color: 'white'
  },
  amount: {
    marginBottom:5,
    fontSize: 12,
    color: '#b6b6b6',
    marginTop: 2.5
  }
})

export default AddChild;