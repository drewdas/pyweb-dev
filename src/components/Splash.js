import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Splash extends React.Component {
    render (){
        return (
            <Segment
            textAlign='center'
            style={{ minHeight: 300, padding: '1em 0em' }}
            basic
            >
            <h1 className="splash-text">
                Hi <span class="ec ec-wave"></span> 
                My name is Dhrubajyoti Das  (You can call me Drew).
                <Divider hidden />
                I am a Full-Stack Developer who likes to build things. 
                This website is a tool I created to showcase <span class="highlight-container"><span class="highlight"><span class="ec ec-rocket"></span> Products</span> </span>
                I have worked on, 
            </h1>

            </Segment>
        );
    }
}