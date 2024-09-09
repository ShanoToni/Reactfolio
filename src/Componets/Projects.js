import React from "react";
import "../Styles/Font.css"
import "../Styles/Buttons.scss"
import "../Styles/Projects.scss"
import { Fade } from "react-awesome-reveal";
import WebProjects from "./WebProjects";
import RenderProjects from "./RenderProjects"

const initState = {
    selected: "web"
  }

class Projects extends React.Component{
    constructor(){
        super();
        this.state = initState; 
}

    onProjectChange = (projects) =>{
        if(projects === "web")
        {
            this.setState({selected:"web"});
        } else if (projects ==="rendering"){
            this.setState({selected:"rendering"});
        }
    }

    render(){
        return(
            <section id="projects">
            <Fade>   
                    <h2 className="projectsTitle">Projects</h2>
            </Fade>
                <div className="projSelectContainer">
                <ul>
                    <li className="one select" onClick={() => this.onProjectChange("rendering")}><p >GPU/Parallel Projects</p></li>
                    <li className="two select" onClick={() => this.onProjectChange("web")}><p >Web Projects</p></li>
                    {/*<li class="three"><a href="#">Tres</a></li>*/}
                    { this.state.selected === "web"
                        ?<hr className="underline web" />
                        :<hr className="underline render" />
                    }
                </ul>
                </div>
                { this.state.selected === "web"
                ?<WebProjects/>
                :<RenderProjects/>
                }
            </section>
        );
    }
}

export default Projects;    