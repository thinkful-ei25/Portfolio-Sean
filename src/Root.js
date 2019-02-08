import React from 'react'; 
import { NavBar } from './components/index.components'; 
import { LandingPage, About, Projects, Contact } from './pages/index.pages'

const Root = () => (
  <main>
    <NavBar />
    <LandingPage />
    <About />
    <Projects />
    <Contact />
  </main>
); 

export default Root; 
