import React from 'react'; 
import { Link, Events, animateScroll as scroll, scrollSpy, } from 'react-scroll'; 
import { logo, home, about, projects,  linkedin, github } 
  from '../images/nav/index.images.nav'; 
import { DesktopNavStyle } from '../styles/index.styles'; // eslint-disable-line no-unused-vars


// const navImages = [home, about, projects];
const socialMediaImages = [linkedin, github, ];
const socialMediaLinks = ['https://www.linkedin.com/in/sean-nealon-033423124/', 'https://github.com/signalflowsean']

export default class DesktopNav extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount = () => {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  

  componentWillUnmount = () => { 
    window.removeEventListener('resize', this.updateWindowDimensions);
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
    scroll.scrollTo(this.state.height);
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
          
        </div>
        <div className='nav-button-container'>
          <Link to='' className='nav-link' onClick={this.scrollToTop}>
            <img className='nav-button' src={home} alt='home' />
          </Link>
          <Link to='' className='nav-link' onClick={this.scrollTo}>
            <img className='nav-button' src={about} alt='about' />
          </Link>
          <Link to='' className='nav-link' onClick={this.scrollToBottom}>
            <img className='nav-button' src={projects} alt='projects' />
          </Link>
        </div>

      </div>
    ); 
  }
}

