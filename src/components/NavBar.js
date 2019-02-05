import React from 'react'; 
import { logo, home, about, projects, contact } from '../images/nav/index.images.nav'; 
import { linkedin, github, twitter } from '../images/socialMedia/index.images.socialMedia'; 
import '../styles/nav.css'; 

const NavBar = () => (
  <section id='nav-bar'>
    <div>
      <img className='nav-button' src={logo} alt='logo' />
      <p className='brand-name'>signalflowsean</p>
    </div>
    <nav className='nav-container'> 
      <img className='nav-button' src={home} alt='home' />
      <img className='nav-button' src={about} alt='about' />
      <img className='nav-button' src={projects} alt='projects' />
      <img className='nav-button' src={contact} alt='contact' />
    </nav>
    <ul className='social-media-list'>
      <li className='social-media-list-item'>
        <img className='nav-button' src={linkedin} alt='linkedin' />
        <img className='nav-button' src={github} alt='github' />
        <img className='nav-button' src={twitter} alt='twitter' />
      </li>
    </ul>
    
  </section>
);

export default NavBar; 