import React from 'react'; 
import { DesktopNav, MobileNav } from './index.components'; 
import { DesktopNavStyle, MobileNavStyle} from '../styles/index.styles'; 

export default class NavBar extends React.Component {
  
  render() { 
    return ( 
      <div className='nav'>
        <DesktopNav  />
        <MobileNav />
      </div>
    ); 
  }
};
