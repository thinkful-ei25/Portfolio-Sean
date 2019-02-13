import React from 'react'; 
import { about, creative, fun, interactive } from '../styles/index.styles'; // eslint-disable-line no-unused-vars

const About = () => (
  <section className='about-container'>
    <div className='about-text-container'> 
      <p>Sean strives to make innovative musical software that allows users to express 
        their innate musical creativity and learn about music in fun and interactive ways
        He has worked at a plethora of musical software companies some of which include: 
        <a href='http://www.harmonixmusic.com/'> Harmonix</a>, 
        <a href='https://getqleek.com/#scroll-1526577506740'> Qleek</a>, and 
        <a href='http://www.pointmotioncontrol.com/'> Point Motion</a>. 
        Recently, he graduated from a web development bootcamp called Thinkful and is looking for ways to 
        continue developing his programming skills, puruse his passion for web design and collaborate with others in the industry. 
      </p>
      <p>You can contact him via <a target='_blank' href='mailto: signalflowsean@gmail.com'>email</a>, 
         <a target='_blank' href='https://github.com/signalflowsean'> github</a>, and 
         <a href='https://www.linkedin.com/in/sean-nealon-033423124/'> linkedin</a>. 
      </p>
    </div>    
  </section>
); 

export default About; 