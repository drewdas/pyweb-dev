import React from 'react';
import { Grid, Card } from 'semantic-ui-react';

export default class MyStack extends React.Component {
    render() {
        return (
            <Grid stackable>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>
                                        Languages
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                            <i class="devicon-python-plain-wordmark stack-icon"></i>
                            <i class="devicon-javascript-plain stack-icon"></i>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card fluid>
                        <Card.Content>
                            <Card.Header>
                                    Frameworks
                            </Card.Header>
                        </Card.Content>
                            <Card.Content>
                                <i class="devicon-django-plain-wordmark stack-icon"></i>
                                <i class="devicon-react-original-wordmark stack-icon"></i>
                                <i class="devicon-vuejs-plain-wordmark stack-icon"></i>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Card fluid>
                        <Card.Content>
                            <Card.Header>
                                    Databases
                            </Card.Header>
                        </Card.Content>
                            <Card.Content>
                                <i class="devicon-postgresql-plain-wordmark stack-icon"></i>
                                <i class="devicon-mongodb-plain-wordmark stack-icon"></i>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card fluid>
                        <Card.Content>
                            <Card.Header>
                                    Tools, etc.
                            </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <i class="devicon-amazonwebservices-plain-wordmark stack-icon"></i>
                                <i class="devicon-git-plain-wordmark stack-icon"></i>
                                <i class="devicon-heroku-plain-wordmark stack-icon"></i>
                                <i class="devicon-linux-plain stack-icon"></i>
                                <i class="devicon-bootstrap-plain-wordmark stack-icon"></i>
                                <i class="devicon-visualstudio-plain-wordmark stack-icon"></i>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );

    }
}