import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import Emoji from './Emoji';

export default class Splash extends React.Component {
    render (){
        return (
            <Segment
            textAlign='center'
            style={{ minHeight: 400, padding: '1em 0em' }}
            basic
            >
            <span className="splash-text">
                <span style={{display: "inline-block"}}>Hi There <Emoji symbol="👋"></Emoji></span> My 
                name is Dhrubajyoti Das (Drew for Short). I am a Full-Stack Developer, currently living in <span style={{display: "inline-block"}}><Emoji symbol="📍"/>Sacramento, CA</span>.
                <Divider hidden />
                This website is a personal site and an application to manage my
                <Link to='/projects'>
                    <Tilt 
                        className="highlight-container" 
                        perspective={2000} 
                        gyroscope={true} 
                        tiltAxis={"y"} 
                    >
                    <span className="highlight">
                        <Emoji symbol="🚀" /> Projects 
                    </span>
                    </Tilt>
                </Link> 
                as well as share my 
                <Link to='/posts'>
                    <Tilt 
                        className="highlight-container" 
                        scale={1} 
                        perspective={2000} 
                        gyroscope={true} 
                        tiltAxis={"y"}
                    >
                    <span className="tilt-inner highlight">
                        <Emoji symbol="💡" /> Ideas and Opinions
                    </span>
                    </Tilt>
                </Link>.
                <Divider hidden />
                I am available to work on new projects! Check out the 
                <Link to='/stack'>
                <Tilt 
                    className="highlight-container" 
                    scale={1} 
                    perspective={2000} 
                    gyroscope={true} 
                    tiltAxis={"y"}
                ><span className="highlight"><Emoji symbol="🛠" /> Technologies</span></Tilt>
                </Link> I love working with.
                <Divider hidden />
                If you would like to continue this conversation please get in touch with me on
                <a href="https://linkedin.com/in/dhrubdas/">
                <Tilt 
                    className="highlight-container" 
                    scale={1} 
                    perspective={2000} 
                    gyroscope={true} 
                    tiltAxis={"y"}
                >
                    <span className="highlight">
                        <i class="fab fa-linkedin" style={{color: '#1293d2'}}></i> LinkedIn 
                    </span> 
                </Tilt></a> or via 
                <a href="mailto:ddas@pyweb.dev?subject=Hello">
                <Tilt 
                    className="highlight-container" 
                    scale={1} 
                    perspective={2000} 
                    gyroscope={true} 
                    tiltAxis={"y"} 
                >
                    <span className="highlight">
                        <Emoji symbol="✉️" /> Email
                    </span> 
                </Tilt></a>. 
                </span>
            </Segment>
        );
    }
}