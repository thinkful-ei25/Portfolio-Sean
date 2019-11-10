import React from 'react'; 
import { about, creative, fun, interactive } from '../styles/index.styles'; // eslint-disable-line no-unused-vars
import aboutImg from '../images/pages/about.png'; 
const About = () => (
  <section className='about-container'>
    <div className='about-text-container'>
      <div className='text-chunk'> 
        <p>Sean strives to make innovative web applications that enrich people's lives. 
          Currently, he works as a fullstack developer at <a href='https://www.coresecure.com/'>Coresecure, Inc.</a> where he transforms designs into pixel perfect and cross-browser compatible responsive websites. 
          He has worked at a plethora of musical software companies some of which include: 
          <a href='http://www.harmonixmusic.com/'> Harmonix</a>, 
          <a href='https://getqleek.com/#scroll-1526577506740'> Qleek</a>, and 
          <a href='http://www.pointmotioncontrol.com/'> Point Motion</a>. 
        </p>
        <p>You can contact him via <a target='_blank' rel="noopener noreferrer" href='mailto: signalflowsean@gmail.com'>email</a>, 
          <a target='_blank' rel="noopener noreferrer" href='https://github.com/signalflowsean'> github</a>, and 
          <a href='https://www.linkedin.com/in/sean-nealon-033423124/'> linkedin</a>. 
        </p>
      </div>
    </div>
    <div className='about-image-container'>
      <img className='about-image' alt='about' src={aboutImg}></img>
    </div>    
  </section>
); 

export default About; 