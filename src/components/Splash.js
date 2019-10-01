import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tilt from 'react-tilt';

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
                My name is Dhrubajyoti Das  (You can also call me Drew).
                <Divider hidden />
                I am a Full-Stack Developer who likes to build things. 
                This website is a tool I created to showcase <Tilt className="Tilt highlight-container" options={{ max : 35, perspective: 1000, scale: 1.5 }}><span className="Tilt-inner highlight"><span className="ec ec-rocket"></span> Products</span></Tilt>
                I have built, Latest Updates below showcase what I am currently working on.
            </h1>

            </Segment>
        );
    }
}