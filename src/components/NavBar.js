import React from 'react'; 
import { logo, home, about, projects, contact } from '../images/nav/index.images.nav'; 
import { linkedin, github, twitter } from '../images/socialMedia/index.images.socialMedia'; 
import '../styles/nav.css'; 

const navImages = [home, about, projects, contact]; 
const socialMediaImages = [linkedin, github, twitter];

const NavBar = () => (
  <section id='nav-bar'>
    <div>
      <img className='logo' src={logo} alt='logo' />
      <p className='brand-name'>signalflowsean</p>
    </div>
    <nav className='nav-container'> 
      {navImages.map((image, i) => (
        <div key={i} className='nav-button-container'>
          <img key={i} src={image} className='nav-button' alt='nav-button' />
        </div>
      ))}
    </nav>
    <ul className='social-media-list'>
        {socialMediaImages.map((image, i) => (
          <li key={i} className='social-media-list-item'>
            <img key={i} src={image} className='nav-button' alt='social-media'/>
          </li>
        ))}
    </ul>
    
  </section>
);

export default NavBar; 