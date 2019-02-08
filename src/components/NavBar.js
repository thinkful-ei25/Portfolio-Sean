import React from 'react'; 
import { slide as Menu } from 'react-burger-menu'
import { logo, home, about, projects, contact, linkedin, github, twitter, hamburger } 
  from '../images/nav/index.images.nav'; 
import '../styles/nav.css'; 

const navImages = [home, about, projects]; 
const socialMediaImages = [linkedin, github, twitter];

export default class NavBar extends React.Component {
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
            {navImages.map((image, i) => (
              <div key={i} className='nav-button-container'>
                <img key={i} src={image} className='nav-button' alt='nav-button' />
              </div>
            ))}
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
