import React from "react";

import "../Styles/HeroSection.scss"
import "../Styles/Font.css"
import "../Styles/Buttons.scss"

const HeroSection = () =>{
    return(
        <div id="top" className="Hero">
            <div className="heroContainer">
                <h1 className="heroText mb4">Hi, my name is <span className="name">Anton Mitkov</span> <br/> I'm the Brave New Developer.</h1>
                <p className="btn">
                    <a class="slide no-underline" href="#about">Know more</a>
                </p>

            </div>
        </div>
    );
}

export default HeroSection;