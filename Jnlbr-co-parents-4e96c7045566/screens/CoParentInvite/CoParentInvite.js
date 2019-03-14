import React from 'react'
import { StyleSheet, View, ScrollView, RefreshControl  } from 'react-native'
import { FamilyBackground } from '../../components/Background';
import { ContactList } from '../../components/Lists';
import { ContactItem } from '../../components/ListItems';
import { Button } from '../../components/Buttons';
import colors from '../../constants/colors';

export default class CoParentInvite extends React.Component {
  state = {
    contacts: [],
    refreshing:false
  }

  componentDidMount() {
    this.handleContacts();
  }
  componentDidUpdate(prevProps) {
    if(prevProps.length !== this.props.length)
      this.handleContacts();
  }

  handleContacts = () => {
    const contacts = this.props.contacts,
          keys = Object.keys(contacts);
    let ctcs = {};
    keys.forEach(key => {
      let _contacts = contacts[key].map(ctc => ({...ctc, selected: false}));
      ctcs[key] = _contacts;
    });
    this.setState({contacts:ctcs});
  }

  handleSelectCoParent = (key,selected) => {
    let contacts = this.state.contacts;
    contacts[key] = contacts[key].map(ctc => ctc.id === selected.id
      ? {...ctc, selected: !ctc.selected}
      : ctc
    );
    this.setState({contacts});
  }

  handleInvite = () => {
    const contacts = this.state.contacts,
          keys = Object.keys(contacts);
    let selectedContacts = [];
    keys.forEach(key => contacts[key].forEach(ctc => {
      if (ctc.selected) selectedContacts.push(ctc);
    }));
    // What am I gonna do with selectedContacts?
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    setTimeout(() => {
      this.handleContacts();
      this.setState({refreshing: false});
    }, 500)
  }

  render() {
    const { contacts } = this.state;
    const keys = Object.keys(contacts);

    return (
      <FamilyBackground>
        <ScrollView 
          contentContainerStyle={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          {keys.map(key => (
            <ContactList title={key} key={key}>
              {contacts[key].map((c,i) => (
                <ContactItem
                  containerStyle={{
                    backgroundColor: c.selected ? 'rgba(253, 251, 243, 0.6)' : 'transparent'
                  }}
                  rightElement={(
                    <View style={[styles.circle, {
                      backgroundColor: c.selected ? colors.green : colors.textLight
                    }]}
                    />
                  )}
                  item={c}
                  onPress={() => this.handleSelectCoParent(key,c)}
                  key={i}
                />
              ))}
            </ContactList>
          ))}
          <View style={styles.footer}>
            <Button
              title="Invite Parent"
              color="#82c84f"
              containerStyle={styles.buttonContainer}
              titleStyle={styles.buttonTitle}
              buttonStyle={styles.buttonStyle}
              onPress={this.handleInvite}
            />
            <Button 
              title="Skip this step"
              color="transparent"
              containerStyle={styles.buttonContainer}
              titleStyle={{color: colors.green}}
              buttonStyle={{borderWidth:2, borderColor:colors.green}}
              onPress={() => console.log('skip this step')}
            />
          </View>
        </ScrollView>
      </FamilyBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:25,
  },
  buttonContainer: {
    borderRadius: 10,
    marginBottom: 15
  },
  buttonStyle: {
    borderWidth: 1.5,
    borderColor:'#c8c8c4',
  },
  buttonTitle: {
    color: 'white'
  },
  footer: {
    marginTop:20,
    alignItems: 'center'
  },
  circle: {
    width:20,
    height:20,
    borderRadius: 15
  }
})
