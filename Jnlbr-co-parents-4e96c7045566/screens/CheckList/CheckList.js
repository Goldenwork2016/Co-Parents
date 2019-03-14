import React, { Component } from 'react'
import { View } from 'react-native'
import { ListItem } from 'react-native-elements';
import { FamilyBackground } from '../../components/Background';
import colors from '../../constants/colors';

export default class CheckList extends Component {

  renderItem(item,i) {
    const { date } = item;
    let hour = date.getHours();
    let minutes = date.getMinutes();
    const _date = `${hour <= 12? hour:hour-12}:${minutes < 10? '0'+minutes : minutes} ${hour < 12? 'AM':'PM'}`;
    return (
      <ListItem
        key={i}
        containerStyle={{
          backgroundColor:'transparent'
        }}
        leftIcon={{
          type:'material',
          name:'check',
          // size:12,
          color:colors.green,
          borderRadius:12,
          borderWidth:2,
          borderColor:colors.green
        }}
        title={item.name}
        titleStyle={{
          color: colors.textDark
        }}
        rightSubtitle={_date}
      />
    );
  }

  render() {
    const list = [{ name: 'Meeting', date: new Date() }, { name: 'Meeting', date: new Date() }, { name: 'Meeting', date: new Date() }]
    return (
      <FamilyBackground>
        <View>
          {list.map((el,i) => this.renderItem(el,i))}
        </View>
      </FamilyBackground>
    );
  }
}