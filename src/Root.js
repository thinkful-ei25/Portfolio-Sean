import React from 'react';

import { NavBar } from './components/index.components'; 
import { LandingPage, About, Projects} from './pages/index.pages'
import {root} from './styles/index.styles';  // eslint-disable-line no-unused-vars

export default class Root extends React.Component { 

  render() { 
    return (
      <main>
    
        <a className='resume' href='https://docs.google.com/document/d/1hWelH1ZAg1NW6o2noxYX8LL2pMcgrvg3ADYfDSswGcY/edit?usp=sharing'
        rel="noopener noreferrer" target='_blank'
        >  Resume
        </a>
  
        <NavBar />
        <LandingPage />
        <About />
        <Projects />
      </main>
    ); 
  }
}; 

