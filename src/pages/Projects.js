import React from 'react'; 
import createYouTube from 'react-youtube-component'; 
import project from '../images/pages/projects.jpg';
import { projects } from '../styles/index.styles';  // eslint-disable-line no-unused-vars
import { fastForward, rewind}  from '../images/transport/index.images.transport'; 

import {
  videoIdRotateLeft, 
  videoIdRotateRight, 
  videoTitleRotateLeft, 
  videoTitleRotateRight, 
  videoDescriptionRotateLeft, 
  videoDescriptionRotateRight} 
from '../utils/videoURLContainer'; 

const YouTube = createYouTube(); 

export default class Project extends React.Component{ 
    constructor(props) {
      super(props);
      
      this.state = {
        playerVars : {
          autoplay: 0,
          color: 0,
          controls: 1
        }, 
        id: "LKS1qBV7ESQ", 
        projectTitle: "BeatFighter", 
        projectDescription: "A game where players craft beats that come to life for competition"
      } 
    }
     
    onReady = (event) => {
      if (this.player) this.player.loadVideoById(this.state.id); 
    };
    
    onPlayer = (player) => {
      this.player = player;
    };
     
    onLeftButtonClick = () => {
      this.setState({
        id : videoIdRotateLeft(), 
        projectTitle : videoTitleRotateLeft(), 
        projectDescription : videoDescriptionRotateLeft()}, 
          () => this.player.loadVideoById(this.state.id)); 
    };

    onRightButtonClick = () => { 
      this.setState({
        id: videoIdRotateRight(), 
        projectTitle: videoTitleRotateRight(),
        projectDescription : videoDescriptionRotateRight()},  
          () => this.player.loadVideoById(this.state.id)); 
    }; 
   
    render() {
      return (
        <section className='projects-container'>
          <img className='projects-image' src={project} alt='project'></img>
          <div className="project-select-container">
            <select className='project-select'>
              <optgroup className='project-option'>
                <option value="0">Pick A Project:</option>
                <option value="1">Call Meter</option>
                <option value="2">Harmonic Space</option>
                <option value="3">Movements</option>
                <option value="4">Sequence</option>
                <option value="5">NOTED</option>
                <option value="6">Terradiddle</option>
              </optgroup>
            </select>
          </div>
          <YouTube className='youtube-player'
            videoId="h_D3VFfhvs4"
            playerVars={this.state.playerVars}
            onStateChange={this.onStateChange}
            onReady={this.onReady}
            onPlayer={this.onPlayer}
          />
          <div className='transport'>
            <img 
              className='transport-button rewind' 
              src={rewind} 
              alt='rewind transport'
              onClick={() => this.onLeftButtonClick()}>
            </img>
            <img 
              className='transport-button fast-forward' 
              src={fastForward} alt='fast-forward transport'
              onClick={() => this.onRightButtonClick()}>
            </img> 
          </div>
          <div className='project-description-container'>
            <h2 className='project-title'>{this.state.projectTitle}</h2>
            <p className='project-description'>{this.state.projectDescription}</p>
          </div>
        </section>
      );
    }
}