import React from 'react';

import { NavBar } from './components/index.components'; 
import { LandingPage, About, Projects} from './pages/index.pages'
import {root} from './styles/index.styles';  // eslint-disable-line no-unused-vars

export default class Root extends React.Component { 

  render() { 
    return (
      <main>
    
        <a className='resume' href={require('../src/images/resume.pdf')}
        rel="noopener noreferrer" target='_blank'
        >  <span className="resume-text">Resume</span>
        </a>

        <NavBar />
        <LandingPage />
        <About />
        {/* <FeaturedProjects /> */}
        <Projects />
      </main>
    ); 
  }
}; 

