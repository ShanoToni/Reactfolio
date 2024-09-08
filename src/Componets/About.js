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
                            I am a software engineer specializing in high performance computing libraries for linear algebra and machine learning. From perfomance optimizations, adding features, extending functonality, porting to different devices to automating tests, I have done a bit of it all.
                            </p>
                            <p>
                            My degree in games developement started my career in accelerated compuing, where I studined graphics, rendering, physics-based simulations, concurrent and parallel programming. 
                            </p>
                            <p>
                            In my professional experience I discovered the value of collaboration, taking up the role of Scrum Master as well as Engineer for multiple teams, providing support for my teammates, facilitating agile ceremonies, as well as working on the engineering tasks.
                            </p>
                        </div>
                        <div>
                            <a class="slide no-underline" rel="noopener noreferrer" target="_blank" href="https://github.com/ShanoToni/Reactfolio/blob/master/PDFFiles/AntonCV.pdf">Resume</a>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default About;