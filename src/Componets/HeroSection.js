import React from "react";

import "../Styles/HeroSection.scss"
import "../Styles/Font.css"
import "../Styles/Buttons.scss"
import Fade from 'react-reveal/Fade';

const HeroSection = () =>{
    return(
        <div id="top" className="Hero">
            <div className="heroContainer">
                <Fade left>
                    <h1 className="heroText mb4">Hi, my name is <span className="name">Anton Mitkov</span> <br/> I'm the Scrum Master/Engineer.</h1>
                </Fade>
                <Fade left delay={500}>
                    <p className="btn">
                        <a class="slide no-underline" href="#about">Know more</a>
                    </p>
                    <p className="btn">
                        <a class="slide no-underline" href="#projects">See My Projects</a>
                    </p>
                </Fade>

            </div>
        </div>
    );
}

export default HeroSection;