import React from 'react';
import HeroSection from "./Componets/HeroSection";
import About from "./Componets/About";
import Projects from "./Componets/Projects";
import Contacts from "./Componets/Contacts";
import posed from 'react-pose';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import './App.css';

const initState = {
  selected: ""
}

const Box = posed.div({
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 300 },
      default: { ease: 'linear', duration: 500 }
    }
  }
});

class App extends React.Component {
  constructor(){
    super();
    this.state = initState;
  }
  render(){
    return(
      <ParallaxProvider>
        <div className="App">
          <Parallax className="custom-class" y={[-30, 30]} >
            <Box>
                <HeroSection/>
            </Box>
          </Parallax>
          <About/>
          <Parallax className="custom-class" y={[-10, 10]} >
            <Projects/>
          </Parallax>
          <Contacts/>
        </div> 
      </ParallaxProvider>
    );
}
}

export default App;
