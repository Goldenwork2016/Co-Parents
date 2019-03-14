import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements';
import colors from '../../constants/colors';
import commonStyles from './commonStyles';
import DateTimePicker from 'react-native-modal-datetime-picker';
export default class RangeItem extends Component {
  state = {
    isDateTimePickerVisible: false,
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.props.onHourChange({
      date: this.props.datetime.date,
      hour: `${(date.hour <= 12)? ((date.hour < 10)? '0' + date.hour : date.hour) : date.hour - 12}:${(date.minute < 10)? '0' + date.minute : date.minute} ${(date.hour < 12)? 'AM' : 'PM'}`
    })
    this._hideDateTimePicker();
  };

  render() {
    return (
      <ListItem
        containerStyle={commonStyles.listContainer}
        bottomDivider
        title={
          <View style={[commonStyles.container, styles.container]}>
            <Text style={commonStyles.text}>{this.props.title}</Text>
            <View style={styles.textViews}>
              <View style={styles.dateContainer}>
                <Text style={styles.smallText}>Date:</Text>
                <Text>{this.props.datetime.date}</Text>
              </View>
              <TouchableOpacity onPress={this._showDateTimePicker} style={[styles.dateContainer, styles.hourContainer]}>
                <Text style={styles.smallText}>Hour:</Text>
                <Text>{this.props.datetime.hour}</Text>
                {/* <TextInput style={{height: 20}}>
                </TextInput> */}
              </TouchableOpacity>
            </View>
            <DateTimePicker
              mode="time"
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
            />
          </View>
        }
      />
    )
    
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent:'space-between',
    // backgroundColor:'red',
  },
  textViews: {
    flexDirection: 'row',
  },
  dateContainer: {
    marginRight: 20,
    paddingTop: 2,
    paddingBottom: 2
  },
  hourContainer: {
    paddingLeft: 5,
    borderLeftWidth: 1, 
    borderLeftColor: colors.gray
  },
  smallText: {
    fontSize: 9,
    color: colors.textLight
  }
});