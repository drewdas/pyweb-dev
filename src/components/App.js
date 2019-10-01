import React from 'react';
import SideMenu from './SideMenu';
import Splash from './Splash';
import { Container, Grid } from 'semantic-ui-react';
import LatestFeed from './LatestFeed';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
      <Container>
        <div align="center">
        <img src="/static/images/logo.png" width="250px" />
        </div>
        <Grid>
        <Router>
          <Grid.Row>
            <Grid.Column width={2}>
              <SideMenu></SideMenu>
            </Grid.Column>
            <Grid.Column width={14}>
            <Switch>
              <Route exact path="/">
                <Splash />
                <LatestFeed />
              </Route>
              <Route path="/products">
                <h1>These are projects!</h1>
              </Route>
              <Route path="/contact">
                <h1>Get in touch yo!</h1>
              </Route>
            </Switch>
            </Grid.Column>
          </Grid.Row>
          </Router>
        </Grid>
      </Container>
      </div>
    );
  }
}

export default App;
