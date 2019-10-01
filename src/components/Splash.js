import React from 'react';
import { Segment } from 'semantic-ui-react';

export default class Splash extends React.Component {
    render (){
        return (
            <Segment>
                <h3>Welcome to PyWeb.Dev</h3>
                <p className="splash-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus mattis nibh fermentum mattis tempus. Mauris pharetra 
                    felis id ligula aliquam porta. Quisque non risus ex. Vestibulum 
                    at fermentum leo. In sed magna gravida, sodales augue in, lacinia 
                    tortor. Nunc et dictum ipsum. Vivamus pretium enim eget placerat 
                    vestibulum.
                </p>
            </Segment>
        );
    }
}