import React from 'react'
import { StyleSheet } from 'react-native';
import Button from "./Button";

const LogInButton = ({onPress, title, ...props}) => (
  <Button
    {...props}
    title={title}
    color="#EDEDED"
    iconProps={{
      type: "font-awesome",
      name: "user-plus",
      color: "#4E504D",
      size: 18,
      marginLeft: 5
    }}
    containerStyle={styles.container}
    titleStyle={styles.title}
    onPress={onPress}
  />
);

LogInButton.defaultProps = {
  title: "LOG IN"
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  title: {
    color: '#515450'
  }
})

export default LogInButton;