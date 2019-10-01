import React from 'react';
import { Card, Feed, Icon } from 'semantic-ui-react';

class LatestFeed extends React.Component{
  render() {
    return (
    <Card fluid>
      <Card.Content>
        <Card.Header>
          Latest Updates
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed size='large'>
          <Feed.Event>
            <Feed.Label>
              <Icon><i className="fas fa-code"></i></Icon>
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                Added a new code snippet!
              </Feed.Summary>
              <Feed.Extra text>
                This a cool way to do this..
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Date>1 Hour Ago</Feed.Date>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label icon='pencil' />
            <Feed.Content>
              <Feed.Summary>
                Created a new post!
              </Feed.Summary>
              <Feed.Extra text>
                This is crazy stuff right here...
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Date>3 days ago</Feed.Date>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
    </Card>
    );
  };
};

export default LatestFeed;