import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';
import colors from '../../constants/colors';
import { CloseButton } from '../../components/Buttons';

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <View style={styles.header}>
      <Icon 
        type="simple-line-icon" 
        name="options-vertical" 
        color={colors.gray} 
        size={20}
        containerStyle={{marginLeft:10}} 
        onPress={() => console.log('On options press')}
      />
      <CloseButton
        onPress={() => props.navigation.closeDrawer()}
      />
    </View>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 15,
    marginBottom: 15
  }
});

export default CustomDrawerContentComponent;