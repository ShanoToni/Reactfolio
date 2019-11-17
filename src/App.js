import React from 'react';
import HeroSection from "./Componets/HeroSection";
import About from "./Componets/About";
import Projects from "./Componets/Projects";
import Contacts from "./Componets/Contacts";


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
      <div className="App">
      <HeroSection/>
      <About/>
      <Projects/>
      <Contacts/>
      {/*<Footer/>*/}
      </div> 
    );
}
}

export default App;
