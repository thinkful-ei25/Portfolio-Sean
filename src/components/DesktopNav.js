import React from 'react'; 
import { slide as Menu } from 'react-burger-menu'; 
import { Link, Events, animateScroll as scroll, scrollSpy, } from 'react-scroll'; 
import { logo, home, about, projects,  linkedin, github, twitter, hamburger } 
  from '../images/nav/index.images.nav'; 
import { DesktopNavStyle } from '../styles/index.styles'; 


const navImages = [home, about, projects];
const socialMediaImages = [linkedin, github, ];
const socialMediaLinks = ['https://www.linkedin.com/in/sean-nealon-033423124/', 'https://github.com/signalflowsean']

export default class DesktopNav extends React.Component { 

  componentDidMount = () => {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
  }

  componentWillUnmount = () => { 
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop = () => { 
    scroll.scrollToTop();
  }

  scrollToBottom = () => {
    scroll.scrollToBottom();
  }

  scrollTo = () => {
    scroll.scrollTo(800);
  }

  scrollMore = () => {
    scroll.scrollMore(100);
  }
  
  handleSetActive= (to) => {
    console.log(to);
  }

  showSettings (event) {
    event.preventDefault();
  }
  render() { 
    
    return (  
      <div id='desktop-nav-bar'>
        <div>
          <img className='logo-image' src={logo} alt='logo'></img>
          <p className='brand-name' >sean</p>
        </div>
        <div className='nav-button-container'>
          <Link className='nav-link' onClick={this.scrollToTop}>
            <img className='nav-button' src={home} alt='home' />
          </Link>
          <Link className='nav-link' onClick={this.scrollTo}>
            <img className='nav-button' src={about} alt='about' />
          </Link>
          <Link className='nav-link' onClick={this.scrollToBottom}>
            <img className='nav-button' src={projects} alt='projects' />
          </Link>
        </div>
        <div className='social-button-container'>
          <ul className='social-media-list'>
            {socialMediaImages.map((image, i) => (
              <a target='_blank' href={socialMediaLinks[i]}>
                <li key={i} className='social-media-list-item'>
                  <img key={i} src={image} className='social-media-button' alt='social-media'/>
                </li>
              </a>
              ))}
            </ul>
        </div>
      </div>
    ); 
  }
}

