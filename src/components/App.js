import React from 'react';
import TopMenu from './TopMenu';
import Splash from './Splash';
import { Container, Grid } from 'semantic-ui-react';
import LatestFeed from './LatestFeed';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
      <TopMenu></TopMenu>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column padded>
            <Switch>
              <Route exact path="/">
                <Grid stackable columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                      <Splash />
                    </Grid.Column>
                    <Grid.Column>
                      <img alt="splash" src="/static/images/taxi-programming.png" />
                    </Grid.Column>
                  </Grid.Row>
                  </Grid>
                  <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <LatestFeed></LatestFeed>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Route>
              <Route path="/projects">
                <h1>These are projects!</h1>
              </Route>
              <Route path="/posts">
                <h1>These are posts!!</h1>
              </Route>
              <Route path="/snippets">
                <h1>These are posts!!</h1>
              </Route>
            </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      </Router>
    );
  }
}

export default App;
