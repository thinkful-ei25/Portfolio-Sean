import React from 'react'; 
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
 
import featuredProjects from '../styles/index.styles'; // eslint-disable-line no-unused-vars



const FeaturedProject = () => (
  <section className='featured-projects'>
      <CollapsibleComponent>
                <CollapsibleHead className="additionalClassForHead featured-project">Head title 1</CollapsibleHead>
                <CollapsibleContent className="additionalClassForContent">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex </p>
                </CollapsibleContent>
      </CollapsibleComponent>
      {/* <div className="collapsible-content">
      <p>This is the collapsible content. It can be any element or React component you like.</p>
      <p>It can even be another Collapsible component. Check out the next section!</p>
      </div> */}

    {/* <div className='featured-project'>Featured Project 2</div>
    <div className='featured-project'>Featured Project 3</div> */}
        
  </section>
); 

export default FeaturedProject; 