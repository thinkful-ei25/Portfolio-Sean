import React from 'react'; 
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
 
import featuredProjects from '../styles/index.styles'; // eslint-disable-line no-unused-vars



const FeaturedProject = () => (
  <CollapsibleComponent >
    <section className='featured-projects'>
      <div className='featured-project'>
        <CollapsibleHead >Spine Saver</CollapsibleHead>
        <CollapsibleContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex </p>
        </CollapsibleContent>
      </div>
      <div className='featured-project'>
        <CollapsibleHead>Call Meter</CollapsibleHead>
        <CollapsibleContent >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex </p>
        </CollapsibleContent>
      </div>
      <div className='featured-project'>
        <CollapsibleHead>Harmonic Space</CollapsibleHead>
        <CollapsibleContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex </p>
        </CollapsibleContent>
      </div>
    </section>
  </CollapsibleComponent>
); 

export default FeaturedProject; 