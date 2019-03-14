import React, { Component } from 'react'
import Menu, { MenuItem } from 'react-native-material-menu';
import { Icon } from 'react-native-elements';
import colors from '../../constants/colors';

export default class OptionIcon extends Component {
  _menu = null;
  setMenuRef = ref => this._menu = ref
  hideMenu = () => this._menu.hide()
  showMenu = () => this._menu.show()

  render() {
    return (
      <Menu
        ref={this.setMenuRef}
        button={
          <Icon 
            type="simple-line-icon" 
            name="options-vertical"
            size={18}
            color={colors.green}
            containerStyle={{marginRight:10}}
            onPress={this.showMenu}
          />
        }
      >
        <MenuItem onPress={this.hideMenu}>Parenting schedules</MenuItem>
        <MenuItem onPress={this.hideMenu}>Changue request</MenuItem>
        <MenuItem onPress={this.hideMenu}>Visitations</MenuItem>
        <MenuItem onPress={this.hideMenu}>Add comment to event</MenuItem>
      </Menu>
    );
  }
}
