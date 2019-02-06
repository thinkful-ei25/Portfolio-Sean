import React from 'react'; 
import landing from '../images/pages/landing.jpg'; 
import '../styles/landing.css'; 

const LandingPage = () => (
  <div className='landing-container'>
    <h2 className='landing-text landing-brand-name'>signalflowsean</h2>
    <h2 className='landing-text landing-occupation-name'>full stack web developer</h2>
    <h3 className='landing-text landing-musician-tag'>musician</h3>
    <h3 className='landing-text landing-interactive-tag'>interactive systems designer</h3>
    <h3 className='landing-text landing-game-tag'>unity game dev</h3>
    <h3 className='landing-text landing-maxmsp-tag'>max msp guru</h3>
    <img src={landing} 
      className='landing-image' 
      alt='landing' >
    </img>
  </div>

); 

export default LandingPage; 