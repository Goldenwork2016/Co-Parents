import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.isAuth();
  }

  isAuth = async () => {
    // setTimeout(() => {
      this.props.navigation.navigate('AuthNavigator');
    // }, 2500)
  }

   render() {

    return (      
      <View style={styles.container}>
        <ActivityIndicator size="large" color="red" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
})

export default Loading;