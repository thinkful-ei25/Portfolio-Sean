import React from 'react'; 
import { logo, home, about, projects, contact } from '../images/nav/index.images.nav'; 
import '../styles/nav.css'; 

const NavBar = () => (
  <section id='nav-bar'>
    <div>
      <img className='nav-button' src={logo} alt='logo' />
      <p className='brand-name'>signalflowsean</p>
    </div>
    <div className='nav-container'> 
      <img className='nav-button' src={home} alt='home' />
      <img className='nav-button' src={about} alt='about' />
      <img className='nav-button' src={projects} alt='projects' />
      <img className='nav-button' src={contact} alt='contact' />
    </div>
    
  </section>
);

export default NavBar; 