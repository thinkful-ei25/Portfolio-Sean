import React from 'react'; 
import { logo } from '../images/nav/index.images.nav'; 
import '../styles/nav.css'; 

const NavBar = () => (
  <section id='nav-bar'>
    <div>
      <img className='logo-image' src={logo} alt='logo' />
      <p className='brand-name'>signalflowsean</p>
    </div>
    
  </section>
);

export default NavBar; 