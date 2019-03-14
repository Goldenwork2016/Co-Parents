import React, { Component, Fragment } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import colors from '../../constants/colors';

const list = [
  {
    title: 'Apposintments',
    icon: 'av-timer',
    type: 'task'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
    type:'task'
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
    type:'task'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
    type:'task'
  },
]

class EventList extends Component {

  renderAssigment = (item,i) => {
    // switch(item.type) {
      // case 'task': {
        return <ListItem
          onPress={() => this.props.onEventSelect({...item})}
          containerStyle={styles.itemContainer}
          key={i}
          title={item.name}
          leftIcon={{
            color: colors.green,
            raised:true,
            type: 'foundation',
            name: 'clipboard-notes'
          }}
        />
      // }
      // case 'child': {
      //   return <ListItem 
      //     key={i}
      //     title={item.title}
      //     leftIcon={{name:item.icon}}
      //   />
      // }
    // }
  }

  render() {
    const { events } = this.props;
    return (
      <ScrollView>
        {(events.length === 0) ? (
          <Text style={styles.empty}> There are no events today </Text>
        ) : (
          <Fragment>
            {this.props.events.map((item,i) => this.renderAssigment(item,i))}
          </Fragment>
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 2,
    paddingBottom: 2
  },
  empty: {
    marginTop: 15,
    flex: 1,
    textAlign:'center'
  }
});

export default EventList;