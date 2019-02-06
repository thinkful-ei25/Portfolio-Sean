import React from 'react'; 
import aboutImg from '../images/pages/aboutImg.jpg'; 
import '../styles/about.css'; 

const About = () => (
  <section className='about-container'>
    <img className='about-img' src={aboutImg} alt='about me'></img>
  </section>
); 

export default About; 