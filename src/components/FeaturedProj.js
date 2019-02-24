import React from 'react'; 
import '../styles/featured-proj.css'

const FeaturedProj = () => (
  <div className="wrap-collabsible one">
    <input id="collapsible-1" className="toggle" type="checkbox"></input>
    <label htmlFor="collapsible-1" className="lbl-toggle">Project 1</label>
    <div className="collapsible-content">
      <div className="content-inner">
        <p>
          This project does a lot of cool stuff and is really cool.
          You should try it! It will be worth your time and it's fun
          to play around with. Please now try...
        </p>
      </div>
    </div>
  </div>
); 

export default FeaturedProj; 