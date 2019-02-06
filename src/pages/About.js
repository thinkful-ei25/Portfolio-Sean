import React from 'react'; 
import aboutImg from '../images/pages/aboutImg.jpg'; 
import '../styles/about.css'; 

const About = () => (
  <section className='about-container'>
    <div> 
      <h2 className='about-text about-header'>ABOUT</h2>
      <p className='about-text first-blurb'>Sean strives to make innovative musical software that allows users to express 
      their innate musical creativity and learn about music in fun interactive ways. </p>
      <p className='about-text second-blurb'>He has worked on a plethora of interactive musical systems including: DropMix at Harmonix, Qleek, Point Motion. 
      Recently, he graduated a web development bootcamp called Thinkful and is looking for ways to continue 
      developing his programming skills. </p>
      <img className='about-img' src={aboutImg} alt='about me'></img>
    </div>    
  </section>
); 

export default About; 