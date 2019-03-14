import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Title from '../../components/Title/Title';
import { Avatar, Icon } from 'react-native-elements';
import colors from '../../constants/colors';
import ReloadItem from '../../components/ListItems/Reload';
import { CurvedBackground } from '../../components/Background';
import { handleAvatarProps } from '../../utils/handleProps';

export default class MyFamily extends Component {

  state = {
    selected: 0,
  }

  render() {
    const { selected } = this.state;
    const { children } = this.props;
    
    return (
      <CurvedBackground>
      <ScrollView>
        <View style={styles.top}>
          {children.map((child,i) => {
            const avatarProps = handleAvatarProps(child.icon,child.firstname[0].toUpperCase());
            console.log(avatarProps)
            return (
              <View style={{alignItems:'center'}} key={i}>
                <Avatar
                  onPress={() => this.setState({selected:i})}
                  containerStyle={[
                    styles.avatarContainer,
                    i === selected ? { borderWidth: 2, borderColor: "white" } : null
                  ]}
                  size="medium"
                  rounded
                  // source={{uri:child.icon}}
                  // title={child.firstname[0].toUpperCase()}
                  {...avatarProps}
                />
                <Icon 
                  reverseColor={colors.green}
                  containerStyle={{
                    position:'absolute',
                    bottom: -7.5,
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
          )})}
        </View>        
        <View style={styles.body}>
          <Title
            title={`${children[selected].firstname} ${children[selected].lastname}`}
            subtitle="Information"
            subtitleStyle={{
              color: colors.textLight
            }}
          />
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
            title="Bank account"
            leftIcon={{
              name:"bank",
              type:"font-awesome",
            }}
          />
          <ReloadItem 
            title="Medical information"
            leftIcon={{
              name:"medical-bag",
              type:"material-community"
            }}
          />
          <ReloadItem 
            title="Vaccinations"
            leftIcon={{
              name:"needle",
              type:"material-community"
            }}
          />
          <ReloadItem 
            title="Medical Insurance"
            leftIcon={{
              name:"medical-bag",
              type:"material-community"
            }}
          />
        </View>
      </ScrollView>
      </CurvedBackground>
    )
  }
}

const styles = StyleSheet.create({
  top: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop: 20,
    // backgroundColor: colors.green,
    paddingBottom: 20,
    paddingTop: 20,
  },
  avatarContainer: {
    marginHorizontal: 7.5
  },
  body: {
    marginTop: 40,
    marginHorizontal: 15
  }
})
