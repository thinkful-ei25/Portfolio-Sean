import React from 'react'; 
import aboutImg from '../images/pages/aboutImg.jpg'; 
import '../styles/about.css'; 
import '../creative.scss'; 
import '../fun.scss';
import '../styles/interactive.css';  

const About = () => (
  <section className='about-container'>
    <div> 
      {/* <h2 className='about-header'>ABOUT</h2> */}
      <p className='about-text first-blurb creative'>Sean strives to make innovative musical software that allows users to express 
      their innate musical <em>creativity</em> and learn about music in <b className='fun'>fun </b><br></br> 
      <p className='interactive'><b>i</b><b>n</b><b>t</b><b>e</b><b>r</b><b>a</b><b>c</b><b>t</b><b>i</b><b>v</b><b>e</b></p> ways. </p>
      <p className='about-text second-blurb'>He has worked at a plethora of musical software companies some of which include: 
      <a href='http://www.harmonixmusic.com/'> Harmonix</a>, <a href='https://getqleek.com/#scroll-1526577506740'>Qleek</a>, and 
      <a href='http://www.pointmotioncontrol.com/'>Point Motion</a>. Recently, he graduated from a web development bootcamp called Thinkful and is looking for ways to 
      continue developing his programming skills. </p>
      <img className='about-img' src={aboutImg} alt='about me'></img>
    </div>    
  </section>
); 

export default About; 