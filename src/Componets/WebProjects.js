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
                    A web app developed using React, Express and PostgreSQL. It handles creation of profiles and authentication as well as communication with a third party API for the facial recognition and its own backend API.
                    </p>
                    <p>
                    The web app uses profiles to store information in a database. To try use anton@anton.com as a username and anton as a password to login and simply copy and paste an image address in the field.
                    </p>
                </div>
                <p className="btnGroup">
                    <a class="slide no-underline small" rel="noopener noreferrer" target="_blank" href="https://github.com/ShanoToni/SmartBrain">View Source</a>
                    <a class="slide no-underline small" rel="noopener noreferrer" target="_blank" href="https://shanotoni.github.io/SmartBrain/">View Demo</a>
                    
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
            <div className="projectsContainer">
            <Fade left>        
                <div className="text projZone"> 
                <div className="projectParagraphs">
                <h3>ReactAlgos</h3>
                    <p>
                    A web app developed using React and P5. Created as practise in implementing popular programming algorithms in javascript. The P5 library is used to visualise the way the algorithms work by animating them step by step.
                    </p>
                </div>
                <p className="btnGroup">
                    <a class="slide no-underline small" rel="noopener noreferrer" target="_blank" href="https://github.com/ShanoToni/ReactAlgos">View Source</a>
                    <a class="slide no-underline small" rel="noopener noreferrer" target="_blank" href="https://shanotoni.github.io/ReactAlgos/">View Demo</a>
                    
                </p>

                </div>
            </Fade>
            <Fade right>        
                <div className="image projZone">
                <Tilt className="Tilt" options={{ max : 25 }} >
                        <img src="https://i.imgur.com/sUbbGZe.png" className="mw-100 shadow-4" alt="night sky over water"/> 
                    </Tilt>
                </div>
            </Fade>
            </div>

            <div className="projectsContainer">
            <Fade left>        
                <div className="text projZone"> 
                <div className="projectParagraphs">
                <h3>Rendering Blog Site</h3>
                    <p>
                    A dynamic website created using Mongoose, Express and NodeJS. As well as using RESTfull routes, all data displayed on the website is hosted on a MongoDB database.
                    </p>
                    <p>
                    The web app was created as a blog to showcase different graphics projecs. It has functionality to authenticate a blog owner as well as to allow the Create Read Update Delete fucntionality of the information stored in the database.
                    </p>
                </div>
                <p className="btnGroup">
                    <a class="slide no-underline small" rel="noopener noreferrer" target="_blank" href="https://github.com/ShanoToni/PortfolioSite">View Source</a>
                    <a class="slide no-underline small" rel="noopener noreferrer" target="_blank" href="http://shanocode.herokuapp.com/projects">View Demo</a>
                    
                </p>

                </div>
            </Fade>
            <Fade right>        
                <div className="image projZone">
                <Tilt className="Tilt" options={{ max : 25 }} >
                        <img src="https://i.imgur.com/C2Zes0U.png" className="mw-100 shadow-4" alt="night sky over water"/> 
                    </Tilt>
                </div>
            </Fade>

            
            </div>
        </section>
    );
}

export default WebProjects;