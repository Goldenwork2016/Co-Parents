import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Calendar } from 'react-native-calendars';
import { Text, Icon } from 'react-native-elements';
import colors from '../../constants/colors';
import EventList from './EventList';
import { FixedFooter } from '../../components/Footers';
import { OptionButton } from '../../components/Buttons';
class _Calendar extends React.PureComponent {

  state = {
    selected: {},
    selectedEvent: {},
    markedDates: {}
  }

  componentDidMount() {
    let date = new Date()
    this.setState({
      selected: {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        dateString: date.toISOString().slice(0,10)
      }
    })
  }

  static navigationOptions = {
    title: 'Calendar',
    headerRight: <OptionButton />
  }

  componentDidUpdate(prevProps){
    if(prevProps.events.length !== this.props.events.length) {
      this.refreshMarkedDays();
    }
  }

  handleOnDayPress = (day) => {
    this.setState({selected: day});
    console.log(day);
  }

  refreshMarkedDays() {      
    let markedDates = {};
    this.props.events.forEach(evt => {
      markedDates = {
        ...markedDates,
        [evt.start.date]: {
          periods: [
            { startingDay: true, endingDay: true, color: colors.green }
          ]
        }
      }
    })
    this.setState({markedDates})
  }

  render() {
    const { selected, markedDates } = this.state;
    const { events } = this.props;
    let selectedDay = events.find(evt => evt.start.date === selected.dateString);
    selectedDay = {[selected.dateString]: { selected: true, periods: selectedDay === undefined ? {} : [{startingDay:true, endingDay:true, color:colors.green}]}}
    const filteredEvents = events.filter(evt => evt.start.date === selected.dateString)
    
    return (
      <View style={{flex: 1}}>      
        <Calendar
          markedDates={{
            ...markedDates,
            ...selectedDay
          }}
          markingType="multi-period"
          onDayPress={this.handleOnDayPress}
          onMonthChange={(month) => {console.log('month changed', month)}}
          disableMonthChange={true}
          firstDay={1}
          theme={{
            textSectionTitleColor: colors.green,
            selectedDayBackgroundColor:colors.green,
            todayTextColor: colors.green,
            arrowColor: colors.green,
            dayTextColor: colors.gray,
            monthTextColor: colors.green
          }}
        />
        <View style={styles.selectedDayContainer}>
          <Text style={styles.selectedDayText}>{new Date(selected.year,selected.month,selected.day).toDateString()}</Text>
        </View>
        <EventList events={filteredEvents} onEventSelect={(selectedEvent) => this.setState({selectedEvent})} />
        <FixedFooter>
          <Icon
            disabled={this.state.selectedEvent === null ? true : false}
            raised
            reverse
            type="evilicon" 
            name="pencil"
            size={18}
            color="#e0e0e0"
            reverseColor={colors.green}
            containerStyle={{marginLeft:10}}
            onPress={() => this.props.navigation.navigate('EditEvent', { updateEvent: this.props.updateEvent, event: this.state.selectedEvent})}
          />
          <Icon
            raised
            reverse
            type="octicon" 
            name="plus"
            size={18}
            color="#24bfff"
            containerStyle={{marginRight:10}}
            onPress={() => this.props.navigation.navigate('AddEvent', { addEvent: this.props.addEvent, start: selected })}
          />
        </FixedFooter>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  selectedDayContainer: {
    marginTop: -7,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e2e2e2',
    borderBottomWidth:1,
    borderColor: '#7B7B7B'
  },
  selectedDayText: {
    color: colors.green,
    fontSize: 16
  }
})


export default _Calendar;