import React from 'react';

import { NavBar } from './components/index.components'; 
import { LandingPage, About, Projects, FeaturedProjects} from './pages/index.pages'
import {root} from './styles/index.styles';  // eslint-disable-line no-unused-vars

export default class Root extends React.Component { 

  render() { 
    return (
      <main>
    
        <a className='resume' href='https://drive.google.com/open?id=1jhYbAYMuO-yCLdrPTnsf30JoUxwvdrO-'
        rel="noopener noreferrer" target='_blank'
        >  Resume
        </a>

        <NavBar />
        <LandingPage />
        <About />
        <FeaturedProjects />
        <Projects />
      </main>
    ); 
  }
}; 

