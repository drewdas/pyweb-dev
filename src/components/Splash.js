import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tilt from 'react-tilt';
import Emoji from './Emoji';

export default class Splash extends React.Component {
    render (){
        return (
            <Segment
            textAlign='center'
            style={{ minHeight: 300, padding: '1em 0em' }}
            basic
            >
            <h1 className="splash-text">
                Hi There <Emoji symbol="👋"></Emoji> My name is Dhrubajyoti Das (Drew for Short) and I am a Full-Stack Developer. I am currently living in <Emoji symbol="📍"/>Sacramento, CA.
                <Divider hidden />
                This website is a tool I built to manage and showcase my
                <Tilt 
                className="Tilt highlight-container" 
                options={{ max : 50, perspective: 1000, scale: 1.1 }}
                >
                <span className="Tilt-inner highlight">
                    <Emoji symbol="🚀" /> Projects
                </span>
                </Tilt>, share my 
                <Tilt 
                className="Tilt highlight-container" 
                options={{ max : 50, perspective: 1000, scale: 1.1 }}
                >
                <span className="Tilt-inner highlight">
                <Emoji symbol="💭" /> Thoughts
                </span>
                </Tilt> and save my favorite 
                <Tilt 
                className="Tilt highlight-container" 
                options={{ max : 50, perspective: 1000, scale: 1.1 }}
                >
                <span className="Tilt-inner highlight">
                    <i className="fas fa-code"></i>  Code Snippets.
                </span>
                </Tilt>
                <Divider hidden />
                I am currently available for full-time/part-time 
                employment and contract work. You can get in touch with me on
                <Tilt 
                className="Tilt highlight-container" 
                options={{ max : 50, perspective: 1000, scale: 1.1 }}
                >
                <span className="Tilt-inner highlight">
                <i class="fab fa-linkedin" style={{color: '#1293d2'}}></i> LinkedIn 
                </span> 
                </Tilt> or <Tilt 
                className="Tilt highlight-container" 
                options={{ max : 50, perspective: 1000, scale: 1.1 }}
                >
                <span className="Tilt-inner highlight">
                <Emoji symbol="✉️" /> Email 
                </span> 
                </Tilt> 
            </h1>

            </Segment>
        );
    }
}