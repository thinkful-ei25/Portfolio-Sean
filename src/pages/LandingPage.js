import React from 'react'; 
import landing from '../images/pages/landing.jpg'; 
import '../styles/landing.css'; 

const LandingPage = () => (
  <div className='landing-container'>
    <h2 className='landing-text landing-brand-name'>signalflowsean</h2>
    <h2 className='landing-text landing-occupation-name'>full stack web developer</h2>
    <img src={landing} 
      className='landing-image' 
      alt='landing' >
    </img>
  </div>

); 

export default LandingPage; 