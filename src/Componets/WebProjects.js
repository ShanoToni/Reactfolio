import React from "react";
import "../Styles/Font.css"
import "../Styles/Buttons.scss"
import "../Styles/Projects.scss"
import Tilt from 'react-tilt'
import Fade from 'react-reveal/Fade';

const WebProjects = () =>{
    return (
        <section className="WebProjects">
            <div className="projectsContainer">
            <Fade left>        
                <div className="text projZone"> 
                <div className="projectParagraphs">
                <h3>SmartBrain App</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime tempora voluptates illo illum consequuntur voluptatibus accusamus quod blanditiis nulla, corporis repellat, assumenda dolores quas quos recusandae aut, animi incidunt.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime tempora voluptates illo illum consequuntur voluptatibus accusamus quod blanditiis nulla, corporis repellat, assumenda dolores quas quos recusandae aut, animi incidunt.
                    </p>
                </div>
                <p className="btnGroup">
                    <a class="slide no-underline small" href="#about">View Source</a>
                    <a class="slide no-underline small" href="#about">View Demo</a>
                    
                </p>

                </div>
            </Fade>
            <Fade right>        
                <div className="image projZone">
                <Tilt className="Tilt" options={{ max : 25 }} >
                        <img src="https://i.imgur.com/SK9iqmB.png" className="mw-100 shadow-4" alt="night sky over water"/> 
                    </Tilt>
                </div>
            </Fade>
            </div>
        </section>
    );
}

export default WebProjects;