import React from "react";

import "../Styles/About.scss"
import "../Styles/Font.css"
import "../Styles/Buttons.scss"

const About = () =>{
    return(
        <section id="about">
            <h2>About me</h2>
            <div className="aboutContainer">
                <div className="image zone">
                    <img src="http://tachyons.io/img/under-canvas.jpg" className="mw-70 shadow-4" alt="night sky over water"/> 
                </div>
                <div className="text zone"> 
                    <div className="aboutText">    
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime tempora voluptates illo illum consequuntur voluptatibus accusamus quod blanditiis nulla, corporis repellat, assumenda dolores quas quos recusandae aut, animi incidunt.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime tempora voluptates illo illum consequuntur voluptatibus accusamus quod blanditiis nulla, corporis repellat, assumenda dolores quas quos recusandae aut, animi incidunt.
                        </p>
                    </div>
                <a class="slide no-underline" href="#about">Resume</a>
                </div>
            </div>
        </section>
    );
}

export default About;