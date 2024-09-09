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
                <h3>OpenGL Render and Physics Engine</h3>
                    <p>
                    A project developed in OpenGL using C++ and GLSL. Consisting of a Phong-based lighting, post processing effects, texturing, normal mapping etc.
                    </p>
                    <p>
                    Additionally, developed to work with a physics simulation and collision detection and response based on OBB and separating axis test. Developed to incorporate Obj models.
                    </p>
                </div>
                <p className="btnGroup">
                    <a class="slide no-underline small" rel="noopener noreferrer" target="_blank" href="https://github.com/ShanoToni/ShanoEngine/tree/master/ShanoCode/ShanoCode">View Source</a>                    
                </p>

                </div>
            </Fade>
            <Fade>   
                <div className="image projZone">
                <Tilt className="Tilt" options={{ max : 25 }} >
                        <img src="https://i.imgur.com/dfF0vL9.png" className="mw-100 shadow-4" alt="night sky over water"/> 
                    </Tilt>
                </div>
            </Fade>
            </div>

             <div className="projectsContainer">
             <Fade>   
                <div className="text projZone"> 
                <div className="projectParagraphs">
                <h3>Parallel Nbody Optimization</h3>
                    <p>
                    A number of different optimization approaches were implemented to gauge speed up gain and efficiency by comparing a CPU multi-threaded and GPGPU(CUDA) against each other based on a sequential baseline performance.
                    </p>
                    <p>
                    By implementing different approaches to the Nbody problem the efficiency of the concurrent optimizations were examined and compared.
                    </p>
                </div>
                <p className="btnGroup">
                    <a class="slide no-underline small" rel="noopener noreferrer" target="_blank" href="https://github.com/ShanoToni/NbodySimulation">View Source</a>
                    <a class="slide no-underline small" rel="noopener noreferrer" target="_blank" href="https://github.com/ShanoToni/Reactfolio/blob/master/PDFFiles/ParaNCuda.pdf">View Paper</a>
                    
                </p>

                </div>
            </Fade>
            <Fade>   
                <div className="image projZone">
                <Tilt className="Tilt" options={{ max : 25 }} >
                        <img src="https://i.imgur.com/rBHnw5c.png" className="mw-100 shadow-4" alt="night sky over water"/> 
                    </Tilt>
                </div>
            </Fade>
            </div>

                <div className="projectsContainer">
                <Fade>   
                <div className="text projZone"> 
                <div className="projectParagraphs">
                <h3>Compute Real-Time Ray Tracer</h3>
                    <p>
                    A ray-tracing rendering engine running on OpenGL using compute shaders for a GPU boost. The plan was to develop a ray tracer that could run in real-time at a reasonable frame rate.
                    </p>
                    <p>
                    Initially, rendering image data onto a file. The next step was creating a real-time ray tracer, which would render a simulation as opposed to a picture. As work was done using OpenGL the choice of GPGPU optimization was the provided compute shader. 
                    </p>
                </div>
                <p className="btnGroup">
                    <a class="slide no-underline small" rel="noopener noreferrer" target="_blank" href="https://github.com/ShanoToni/OpenGLRayTracer">View Source</a>
                    
                </p>

                </div>
            </Fade>
            <Fade>   
                <div className="image projZone">
                <Tilt className="Tilt" options={{ max : 25 }} >
                        <img src="https://i.imgur.com/XroTB1m.png" className="mw-100 shadow-4" alt="night sky over water"/> 
                    </Tilt>
                </div>
            </Fade>
            </div>
       
        </section>
    );
}

export default WebProjects;