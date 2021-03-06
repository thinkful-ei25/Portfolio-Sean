import React from 'react'; 
import createYouTube from 'react-youtube-component';
import Select from 'react-select';  
import { projects } from '../styles/index.styles';  // eslint-disable-line no-unused-vars
import { fastForward, rewind}  from '../images/transport/index.images.transport'; 
import { github, website } from '../images/links/index.images.links'; 

import {
  videoIdsAtIndex, 
  videoIdRotateLeft, 
  videoIdRotateRight, 
  titlesAtIndex, 
  videoTitleRotateLeft, 
  videoTitleRotateRight, 
  liveLinkAtIndex, 
  videoLinkRotateLeft, 
  videoLinkRotateRight, 
  collaboratorsAtIndex, 
  videoCollobaratorsRotateLeft, 
  videoCollobaratorsRotateRight, 
  descriptionAtIndex, 
  videoDescriptionRotateLeft, 
  videoDescriptionRotateRight, 
  techStackRotateLeft, 
  techStackRotateRight, 
  techStackIndexAt
} 
from '../utils/videoURLContainer'; 

const YouTube = createYouTube(); 

const options = [

  { value: 0, label: 'Movements'},
  { value: 1, label: 'Harmonic Space'},
  { value: 2, label: 'Spine Saver' }, 
  { value: 3, label: 'BeatFighter'}, 
  { value: 4, label: 'Universallis'}, 
  { value: 5, label: 'Teradiddle'}, 
  { value: 6, label: 'Terpstra'}, 
  { value: 7, label: 'NOTED'}
];
export default class Project extends React.Component{ 
    constructor(props) {
      
      super(props);
      
      this.state = {
        playerVars : {
          autoplay: 0,
          color: 0,
          controls: 1
        }, 
        id: "0VVkfkBlTRI", 
        projectTitle: "Call Meter", 
        projectDescription: "CallMeter automates the tedious task of tracking billable time on the phone by creating invoices for clients by automatically tracking minutes spent and programmatically generating invoices unique to each of your clients.", 
        collaborators: 'Twilio Node-Mailer Mongo Express React Node', 
        liveLink: {link: true, url:'https://callmeter.netlify.com/', github: 'https://github.com/thinkful-ei25/CallMeter-client'}, 
        selectedOption: null, 
        techStack : 'Twilio Node-Mailer Mongo Express React Node'
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
        techStack: techStackRotateLeft(), 
        liveLink: videoLinkRotateLeft(), 
        collaborators: videoCollobaratorsRotateLeft(), 
        id : videoIdRotateLeft(), 
        projectTitle : videoTitleRotateLeft(), 
        projectDescription : videoDescriptionRotateLeft()}, 
          () => this.player.loadVideoById(this.state.id)); 
    };

    onRightButtonClick = () => { 
      this.setState({
        techStack: techStackRotateRight(), 
        liveLink: videoLinkRotateRight(), 
        collaborators: videoCollobaratorsRotateRight(), 
        id: videoIdRotateRight(), 
        projectTitle: videoTitleRotateRight(),
        projectDescription : videoDescriptionRotateRight()},  
          () => this.player.loadVideoById(this.state.id)); 
    }; 

    handleChange = (option) => {
      let i = option.value; 
      this.setState({
        techStack: techStackIndexAt(i), 
        liveLink: liveLinkAtIndex(i), 
        collaborators: collaboratorsAtIndex(i), 
        id: videoIdsAtIndex(i), 
        projectTitle: titlesAtIndex(i), 
        projectDescription: descriptionAtIndex(i)}, 
          () => this.player.loadVideoById(this.state.id)); 
    
    }
   
    render() {

      return (
        <section className='projects-container'>
          <div className="project-select-container">
            <Select
              className='select'
              placeholder='Select a Project...'
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={options}
            >
            </Select>
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
            <p className='transport-tutorial'>Use Left and Right Arrows or Dropdown up top to Traverse through Projects</p>
            <img 
              className='transport-button fast-forward' 
              src={fastForward} alt='fast-forward transport'
              onClick={() => this.onRightButtonClick()}>
            </img> 
          </div>
          <div className='project-description-container'>
            
            {this.state.liveLink.link ? 
              <div className='link-container'>
                <a target='_blank' rel="noopener noreferrer" href={this.state.liveLink.url}>
                  <img className='project-link-image' src={website} alt='link-to-website'></img> 
                </a> 
                <a target='_blank' rel="noopener noreferrer" href={this.state.liveLink.github}>
                  <img className='project-link-image' src={github} alt='link-to-github'></img>
                </a>
              </div>
              : ''
            }
            <h2 className='project-title'>{this.state.projectTitle}</h2>
            <p className='project-description'>{this.state.projectDescription}</p>
            <div className='collaboration-footer-container'>
              <h3 className='collaboration-footer-header'>In collaboration with {this.state.collaborators} </h3>
              <p className='collaborators'></p>
            </div>
          
          </div>
          <div className='tech-stack'>
            <p className='tech-stack-title'>Tech Stack</p>
            {/* <p className='tech-stack-text'>{this.state.techStack}</p> */}
            <ul>
              {this.state.techStack.split(' ').map((stack, i) => (
                <li key={i} className='tech-stack-text'>{stack}</li>
              ))}
            </ul>
          </div>
        </section>
      );
    }
}