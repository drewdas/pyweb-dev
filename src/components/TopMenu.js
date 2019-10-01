import React from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'

// TODO: Update <Search> usage after its will be implemented

const TopMenu = () => (
  <div>
    <Menu attached='top'>
      <Menu.Menu position='left'>
        <img src="/static/images/logo.png" height="60px" />
      </Menu.Menu>
    </Menu>

  </div>
)

export default TopMenu;