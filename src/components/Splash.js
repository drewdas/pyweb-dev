import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import Emoji from './Emoji';

export default class Splash extends React.Component {
    render (){
        return (
            <Segment
            textAlign='center'
            style={{ minHeight: 200, padding: '1em 0em' }}
            basic
            >
            <h2 className="splash-text">
                <span style={{display: "inline-block"}}>Hi There <Emoji symbol="👋"></Emoji></span> My name is Dhrubajyoti Das (Drew for Short). I am a Full-Stack Developer, currently living in <span style={{display: "inline-block"}}><Emoji symbol="📍"/>Sacramento, CA</span>.
                <Divider hidden />
                This website is a tool I built to manage and showcase my
                <Link to='/projects'>
                    <Tilt 
                        className="highlight-container" 
                        scale={1.2}
                        gyroscope={true}
                    >
                    <span className="highlight">
                        <Emoji symbol="🚀" /> Projects 
                    </span>
                    </Tilt>
                </Link> 
                as well as organize my 
                <Link to='/posts'>
                    <Tilt 
                        className="highlight-container" 
                        scale={1.2} 
                        gyroscope={true}
                    >
                    <span className="tilt-inner highlight">
                        <Emoji symbol="💭" /> Thoughts
                    </span>
                    </Tilt>
                </Link>.
                <Divider hidden />
                You can get in touch with me on
                <Tilt 
                    className="highlight-container" 
                    scale={1.2}
                    gyroscope={true}
                >
                    <span className="highlight">
                        <i class="fab fa-linkedin" style={{color: '#1293d2'}}></i> LinkedIn 
                    </span> 
                </Tilt> or 
                <Tilt 
                    className="highlight-container" 
                    scale={1.2}
                    gyroscope={true}
                >
                    <span className="highlight">
                        <Emoji symbol="✉️" /> Email
                    </span> 
                </Tilt>
            </h2>
            </Segment>
        );
    }
}