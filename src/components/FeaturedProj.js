import React from 'react'; 
import '../styles/featured-proj.css'

export default class FeaturedProj extends React.Component { 
  constructor(props){ 
    super(props); 
    // this.domRef = React.createRef(); 
  }


  render(){ 
    return (
      <div className={this.props.projNum + "wrap-collabsible"} >
        <input id={this.props.projNum} className="toggle" type="checkbox"></input>
        <label 
          onClick={() => { 
            this.props.clickedProj(); 
          }}
          htmlFor={this.props.projNum} 
          className="lbl-toggle">Project 1</label>
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
  }
}