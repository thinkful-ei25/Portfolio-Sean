import React from 'react'; 
import '../styles/landing.css'; 

const tags=
  ['signalflowsean', 'full stack web developer', 'musician', 
   'interactive systems designer', 'unity game dev', 'max msp guru']; 

const cssTags=['brand-name', 'occupation-name', 'musician-tag', 'interactive-tag', 'game-tag', 'maxmsp-tag']; 

const LandingPage = () => (
  <section className='landing-container'>
    <div className='landing-flip'>
      {tags.map((tag, i) => (
        <h2 key={i} className={`landing-text landing-${cssTags[i]}`}>{tag}</h2>
      ))}
    </div>
  </section>
); 

export default LandingPage; 