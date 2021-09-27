import './App.css';
import Header from './components/Header';
import Fade from 'react-reveal';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import React, {useRef } from 'react';


function App() {

  return (
    <div className="App">
    <Header/>
      <Home/>
        <About  />
        <Skills/>
       <Contact/>
    </div>
    

  );
}

export default App;
