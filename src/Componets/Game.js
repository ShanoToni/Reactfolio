import React from "react";
import "../Styles/Font.css"
import "../Styles/Buttons.scss"
import "../Styles/Projects.scss"
import {Tilt} from 'react-tilt'
import { Fade } from "react-awesome-reveal";

const Game = () =>{
    return (
        <section className="WebProjects">
            <Fade>   
                    <h2 className="projectsTitle">Games</h2>
            </Fade>
            <div className="projectsContainer">
            <Fade>   
                <div className="text projZone"> 
                <div className="projectParagraphs">
                <h3>Raid The Dungeon</h3>
                    <p>
                    A project developed in Unreal Engine 4 using C++, blueprints, and Blender. The game is a demonstration of my skillset in using UE4.
                    </p>
                    <p>
                    Raid the dungeon is a 3D dungeon crawler RPG game. You will be exploring different levels of dungeons full of traps and enemies but more importantly LOOT ! In between raids you can use the loot to buy new equipment and fun potions to help you with your adventure.
                    </p>
                </div>
                <p className="btnGroup">
                    <a class="slide no-underline small" rel="noopener noreferrer" target="_blank" href="https://antongames.itch.io/raid-the-dungeon">View Page</a>
                    
                </p>

                </div>
            </Fade>
            <Fade>   
                <div className="image projZone">
                <Tilt className="Tilt" options={{ max : 25 }} >
                    <iframe frameborder="0" src="https://itch.io/embed/657963" width="552" height="167"><a href="https://antongames.itch.io/raid-the-dungeon">Raid The Dungeon by AntonGames</a></iframe>
                </Tilt>
                </div>
            </Fade>
            </div>
        </section>
    );
}

export default Game;