import React from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SideMenu extends React.Component {
  render() {
    return (
      <Menu compact vertical>
        <Menu.Item name='home'>
            <Link to='/'><span class="ec ec-house"></span>Home</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/products'><span class="ec ec-rocket"></span>
 Products</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/contact'><span class="ec ec-speech-balloon"></span>
Contact</Link>
        </Menu.Item>
      </Menu>
    )
  }
}