import React from 'react';
import HeroSection from "./Componets/HeroSection";
import About from "./Componets/About";
import Projects from "./Componets/Projects";
import Game from "./Componets/Game"
import Contacts from "./Componets/Contacts";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { Fade } from "react-swift-reveal";


import './App.css';

const initState = {
  selected: ""
}


class App extends React.Component {
  constructor(){
    super();
    this.state = initState;
  }
  render(){
    return(
      <ParallaxProvider>
        <div className="App">
          <Parallax className="lowZ" y={[-30, 30]} >
            <Fade>
                <HeroSection/>
            </Fade>
          </Parallax>
          <About/>
          <Parallax className="lowZ" y={[30, 30]} >
              <Projects/>
              <Game/>
          </Parallax>
          <Contacts/>
        </div> 
      </ParallaxProvider>
    );
}
}

export default App;
