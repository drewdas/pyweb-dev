import React from 'react'
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";


// TODO: Update <Search> usage after its will be implemented

const TopMenu = () => (
  <div>
    <Menu attached='top'>
      <Menu.Menu position='left'>
        <Link to="/"><img alt="Logo" src="/static/images/logo.png" height="60px" /></Link>
      </Menu.Menu>
    </Menu>

  </div>
)

export default TopMenu;