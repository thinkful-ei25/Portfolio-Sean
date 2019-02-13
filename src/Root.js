import React from 'react';
// import HamburgerMenu from 'react-hamburger';  


import { NavBar } from './components/index.components'; 
import { LandingPage, About, Projects} from './pages/index.pages'

export default class Root extends React.Component { 

  render() { 
    return (
      <main>
        <NavBar />
        <LandingPage />
        <About />
        <Projects />
      </main>
    ); 
  }
}; 

