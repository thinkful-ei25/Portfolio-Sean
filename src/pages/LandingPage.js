import React from 'react'; 
import '../styles/landing.css'; 

const tags=
  ['full stack web developer', 'musician', 'interactive systems designer', 'unity game dev', 'max msp guru']; 

const cssTags=['occupation-name', 'musician-tag', 'interactive-tag', 'game-tag', 'maxmsp-tag']; 

const LandingPage = () => (
  <section className='landing-container'>
    <h1 className='landing-brand-name'>signalflowsean</h1> 
    <div className='landing-flip'>
      {tags.map((tag, i) => (
        <h3 key={i} className={`landing-text landing-${cssTags[i]}`}>{tag}</h3>
      ))}
    </div>
  </section>
); 

export default LandingPage; 