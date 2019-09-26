import React from 'react';
import Menu from './components/Menu.js';
import Notice from './components/Notice.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu></Menu>
        <div className="ui container">
        <Notice message="PyWeb.Dev is currently under development"></Notice>
        <h1 class="ui header">Projects</h1>
        <div class="ui divider"></div>
        <h1 class="ui header">Recent Posts</h1>
        <div class="ui divider"></div>
        </div>
      </div>
    );
  }
}

export default App;
