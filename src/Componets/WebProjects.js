import React from "react";
import "../Styles/Font.css"
import "../Styles/Buttons.scss"
import "../Styles/Projects.scss"
import {Tilt} from 'react-tilt'
import { Fade } from "react-awesome-reveal";

const WebProjects = () =>{
    return (
        <section className="WebProjects">
            <div className="projectsContainer">
            <Fade>   
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
            <Fade>   
                <div className="image projZone">
                <Tilt className="Tilt" options={{ max : 25 }} >
                        <img src="https://i.imgur.com/sUbbGZe.png" className="mw-100 shadow-4" alt="night sky over water"/> 
                    </Tilt>
                </div>
            </Fade>
            </div>

            <div className="projectsContainer">
            <Fade>   
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
                </p>

                </div>
            </Fade>
            <Fade>   
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