import React from 'react'
import { Menu } from 'semantic-ui-react';

// TODO: Update <Search> usage after its will be implemented

const TopMenu = () => (
  <div>
    <Menu attached='top'>
      <Menu.Menu position='left'>
        <a href="/"><img alt="Logo" src="/static/images/logo.png" height="60px" /></a>
      </Menu.Menu>
    </Menu>

  </div>
)

export default TopMenu;