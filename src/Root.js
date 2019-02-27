import React from 'react';

import { NavBar } from './components/index.components'; 
import { LandingPage, About, Projects} from './pages/index.pages'
import {root} from './styles/index.styles';  // eslint-disable-line no-unused-vars

export default class Root extends React.Component { 

  render() { 
    return (
      <main>
    
        <a className='resume' href='https://drive.google.com/file/d/1tHSsPUpBGX8pKGMn62ZAkn_1SglFa7E8/view?usp=sharing'
        rel="noopener noreferrer" target='_blank'
        >  Resume
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

