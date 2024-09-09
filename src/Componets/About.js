import React from "react";

import "../Styles/About.scss"
import "../Styles/Font.css"
import "../Styles/Buttons.scss"
import { Fade } from "react-awesome-reveal";

const About = () =>{
    return(
        <section id="about">
            <Fade>   
                <h2>About me</h2>
            </Fade>
            <div className="aboutContainer">
                <Fade>   
                    <div className="image zone">
                        <img src="https://i.imgur.com/41M7arh.jpg?1" className="mw-70 shadow-4 myFace" alt="my face"/> 
                    </div>
                </Fade>
                <div className="text zone"> 
                    <Fade>   
                        <div className="aboutText">    
                            <p>
                            I am a software engineer specializing in <span className="name">high performance computing</span> libraries for <span className="name">linear algebra</span> and <snap className="name"> machine learning</snap>. From <snap className="name"> perfomance optimizations, adding features, extending functonality, porting</snap> to different devices to automating tests, I have done a bit of it all.
                            </p>
                            <p>
                            My degree in games developement started my career in accelerated computing, where I studied <snap className="name">graphics, rendering, physics-based simulations, concurrent</snap> and <snap className="name">parallel programming</snap>. 
                            </p>
                            <p>
                            In my professional experience I discovered the value of collaboration, taking up the role of <snap className="name">Scrum Master</snap> as well as Engineer for multiple teams, providing support for my teammates, facilitating agile ceremonies, as well as working on the engineering tasks.
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