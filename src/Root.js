import React from 'react'; 
import { NavBar } from './components/index.components'; 
import { LandingPage, About } from './pages/index.pages'

const Root = () => (
  <main>
    <NavBar />
    <LandingPage />
    <About />
  </main>
); 

export default Root; 
