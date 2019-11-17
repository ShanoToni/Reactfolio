import React from "react";

import "../Styles/Font.css"
import "../Styles/Buttons.scss"
import "../Styles/Projects.scss"
import Tilt from 'react-tilt'

const Projects = () =>{
    return(
        <section id="projects">
            <h2 className="projectsTitle">Projects</h2>
            {/* Project 1 */}
            <div className="projectsContainer">
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
                <div className="image projZone">
                <Tilt className="Tilt" options={{ max : 25 }} >
                        <img src="https://i.imgur.com/SK9iqmB.png" className="mw-100 shadow-4" alt="night sky over water"/> 
                    </Tilt>
                </div>
            </div>

            {/* Project 2*/}
            <div className="projectsContainer">
                <div className="text projZone"> 
                <div className="projectParagraphs">
                <h3>Project Title</h3>
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
                <div className="image projZone">
                <Tilt className="Tilt" options={{ max : 25 }} >
                        <img src="http://tachyons.io/img/under-canvas.jpg" className="mw-100 shadow-4" alt="night sky over water"/> 
                    </Tilt>
                </div>
            </div>

            {/* Project 3 */}
            <div className="projectsContainer">
                <div className="text projZone"> 
                <div className="projectParagraphs">
                <h3>Project Title</h3>
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
                <div className="image projZone">
                    <Tilt className="Tilt" options={{ max : 25 }} >
                        <img src="http://tachyons.io/img/under-canvas.jpg" className="mw-100 shadow-4" alt="night sky over water"/> 
                    </Tilt>
                </div>
            </div>

            
        </section>
    );
}

export default Projects;