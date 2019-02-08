import React from 'react'; 
import { slide as Menu } from 'react-burger-menu'; 
import * as Scroll from 'react-scroll'; 
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'; 
import { logo, home, about, projects, contact, linkedin, github, twitter, hamburger } 
  from '../images/nav/index.images.nav'; 
import '../styles/nav.css'; 

const navImages = [home, about, projects]; 
const socialMediaImages = [linkedin, github, twitter];

// let Link       = Scroll.Link;
// let Element    = Scroll.Element;
// let Events     = Scroll.Events;
// let scroll     = Scroll.animateScroll;
// let scrollSpy  = Scroll.scrollSpy;
 
// // ES5
// var React   = require('react');
// var Scroll  = require('react-scroll');
 
// var Link       = Scroll.Link;
// var Element    = Scroll.Element;
// var Events     = Scroll.Events;
// var scroll     = Scroll.animateScroll;
// var scrollSpy  = Scroll.scrollSpy;

export default class NavBar extends React.Component {
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
    console.log('hi')
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
      <div>
        <Menu 
          customBurgerIcon={<img className='hamburger' src={hamburger} alt='hamburger-menu'></img> } 
          isOpen={false} id ='nav-bar' 
          pageWrapId={ "page-wrap" }>
          <div>
            <img className='logo' src={logo} alt='logo' />
            <p className='brand-name'>signalflowsean</p>
          </div>
          <div className='nav-container'> 
          <Link  onClick={this.scrollToTop}>
            <div className='nav-button-container'>
              <img className='nav-button' src={home} alt='home' />
            </div>
          </Link>
           <Link onClick={this.scrollTo}>
              <div className='nav-button-container'>
                <img className='nav-button' src={about} alt='about' />
              </div>
            </Link>
            <Link onClick={this.scrollToBottom}>
              <div className='nav-button-container'>
                <img className='nav-button' src={projects} alt='projects' />
              </div>
            </Link>
            {/* <img className='nav-button' src={contact} alt='contact' /> */}
            {/* {navImages.map((image, i) => (
              <div key={i} className='nav-button-container'>
                <img key={i} src={image} className='nav-button' alt='nav-button' />
              </div>
            ))} */}
          </div>
          <ul className='social-media-list'>
              {socialMediaImages.map((image, i) => (
                <li key={i} className='social-media-list-item'>
                  <img key={i} src={image} className='nav-button' alt='social-media'/>
                </li>
              ))}
            </ul>
        </Menu>
      </div>
    ); 
  }
};
