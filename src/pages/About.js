import React from 'react'; 
import aboutImg from '../images/pages/aboutImg.jpg'; 
import '../styles/about.css'; 
import '../creative.scss'; 
import '../fun.scss';
import '../styles/interactive.css';  

const About = () => (
  <section className='about-container'>
    <div> 
      <h2 className='about-text about-header'>ABOUT</h2>
      <p className='about-text first-blurb creative'>Sean strives to make innovative musical software that allows users to express 
      their innate musical <em>creativity</em> and learn about music in <b className='fun'>fun</b> 
      <p><b>i</b><b>n</b><b>t</b><b>e</b><b>r</b><b>a</b><b>c</b><b>t</b><b>i</b><b>v</b><b>e</b></p> ways. </p>
      <p className='about-text second-blurb'>He has worked on a plethora of musical software companies including: Harmonix, Qleek, and at Point Motion. 
      Recently, he graduated a web development bootcamp called Thinkful and is looking for ways to continue 
      developing his programming skills. </p>
      <img className='about-img' src={aboutImg} alt='about me'></img>
    </div>    
  </section>
); 

export default About; 