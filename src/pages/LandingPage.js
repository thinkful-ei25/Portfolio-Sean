import React from 'react'; 
import landing from '../images/pages/landing.jpg'; 
import '../styles/landing.css'; 
const tags=
  ['signalflowsean', 'full stack web developer', 'musician', 
   'interactive systems designer', 'unity game dev', 'max msp guru']; 

const cssTags=['brand-name', 'occupation-name', 'musician-tag', 'interactive-tag', 'game-tag', 'maxmsp-tag']; 

const LandingPage = () => (
  <section className='landing-container'>
    {tags.map((tag, i) => (
      <h2 key={i} className={`landing-text landing-${cssTags[i]}`}>{tag}</h2>
    ))}
    <img src={landing} 
      className='landing-image' 
      alt='landing' >
    </img>
  </section>

); 

export default LandingPage; 