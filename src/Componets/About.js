import React from "react";

import "../Styles/About.scss"
import "../Styles/Font.css"
import "../Styles/Buttons.scss"
import Fade from 'react-reveal/Fade';

const About = () =>{
    return(
        <section id="about">
            <Fade down>        
                <h2>About me</h2>
            </Fade>
            <div className="aboutContainer">
                <Fade up>        
                    <div className="image zone">
                        <img src="https://i.imgur.com/41M7arh.jpg?1" className="mw-70 shadow-4 myFace" alt="my face"/> 
                    </div>
                </Fade>
                <div className="text zone"> 
                    <Fade right>        
                        <div className="aboutText">    
                            <p>
                            I am a graduate from the Edinburgh Napier University with a BSc degree in Games Developement with First Class Honours.
                             Rendering and physics simulations were my preffered fields of study at university.
                            </p>
                            <p>
                            My university carriculum included advanced mathematics, computer graphics programming, physics based simulations, concurrent and parallel programming, GPGPU optimizations, neural networks, fuzzy logic and evolutionary algorithms.
                            </p>
                            <p>
                            I enjoy learning new programming technologies in my free time, such as web development and object modelling.
                            </p>
                        </div>
                        <div>
                            <a class="slide no-underline" href="#about">Resume</a>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default About;