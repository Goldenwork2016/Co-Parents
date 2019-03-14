import React from 'react'
import { 
  StyleSheet, 
  Image, 
  View, 
  Dimensions 
} from 'react-native'

// Constants
const { height, width } = Dimensions.get('window');

// Functional component
const Logo = ({ width, logoHeight, textHeight, containerStyle, iconStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image 
        source={require('../../assets/logo_icon_ellipse_256.png')} 
        style={[styles.logo, { width, height: logoHeight, ...iconStyle }]}
      />
      <Image 
        source={require('../../assets/logo.png')} 
        style={[styles.text, { width, height: textHeight }]}
        resizeMode="center" 
      />
    </View>
  );
}

// Default props
Logo.defaultProps = {
  width: width * 0.5,
  logoHeight: height * 0.3,
  textHeight: height * 0.1
}

// Styles
const styles = StyleSheet.create({
  container: {
    marginTop: 5
  },  
  logo: {
    zIndex: 100,
  },
  text: {
    zIndex: 1,
  },
})

export default Logo;