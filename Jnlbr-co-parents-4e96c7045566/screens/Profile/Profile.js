import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Title from '../../components/Title/Title';
import { Avatar, Icon } from 'react-native-elements';
import colors from '../../constants/colors';
import ReloadItem from '../../components/ListItems/Reload';
import { CurvedBackground } from '../../components/Background';
import { handleAvatarProps } from '../../utils/handleProps';

export default class Profile extends Component {
  render() {
    const avatarProps = handleAvatarProps(null, 'J');

    return (
      <CurvedBackground>
        <View style={styles.top}>
        <View style={{alignItems:'center'}}>
          <Avatar
            containerStyle={styles.avatarContainer}
            size="medium"
            rounded
            // source={{uri:null}}
            // title="J"
            {...avatarProps}
          />
          <Icon 
            reverseColor={colors.green}
            containerStyle={{
              position:'absolute',
              bottom: 0,
              borderRadius: 12,
              backgroundColor:'white'
            }}
            size={16}
            name="reload"
            type="material-community"
            color={colors.green}
            backgroundColor="black"
          />
        </View>
          <Title
            title="John Eliot"
            subtitle="Teacher"
            titleStyle={{color:'white'}}
            subtitleStyle={{color:'white'}}
          />
        </View>
        <View style={styles.body}>
          <ReloadItem 
            title="Full Name"
            leftIcon={{              
              name:"user-circle-o",
              type:"font-awesome"
            }}
          />
          <ReloadItem 
            title="Mobile Number"
            leftIcon={{
              name:"md-call",
              type:"ionicon",
            }}
          />
          <ReloadItem 
            title="Change email"
            leftIcon={{
              name:"mail",
              type:"entypo"
            }}
          />
          <ReloadItem 
            title="Change Password"
            leftIcon={{
              name:"lock-outline",
              type:"MaterialCommunityIcons"
            }}
          />
        </View>
      </CurvedBackground>
    )
  }
}

const styles = StyleSheet.create({
  top: {
    alignItems:'center',
    marginTop: 15
  },
  avatarContainer: {
    borderWidth: 4,
    borderColor:'white'
  },
  body: {
    marginHorizontal: 15,
    marginTop: 40
  }
})
