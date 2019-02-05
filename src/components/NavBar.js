import React from 'react'; 
import { logo } from '../images/nav/index.images.nav'; 
import '../styles/nav.css'; 

const NavBar = () => (
  <section id='nav-bar'>
    <img className='logo' src={logo} alt='logo' />
  </section>
);

export default NavBar; 