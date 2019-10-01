import React from 'react';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import Splash from './Splash';
import { Container, Grid } from 'semantic-ui-react';
import LatestFeed from './LatestFeed';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
      <TopMenu></TopMenu>
      <Container>
        <Grid>
        <Router>
          <Grid.Row>
            <Grid.Column padded>
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
