import React from 'react'; 
import { NavBar } from './components/index.components'; 
import { LandingPage, About, Projects } from './pages/index.pages'

const Root = () => (
  <main>
    <NavBar />
    <LandingPage />
    <About />
    <Projects />
  </main>
); 

export default Root; 
