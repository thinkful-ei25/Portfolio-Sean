import React from 'react'; 
// import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
import { FeatureProj } from '../components/index.components'; 
import featuredProjects from '../styles/index.styles'; // eslint-disable-line no-unused-vars



const FeaturedProject = () => (
  <section className="project-container">
    <FeatureProj></FeatureProj>
    <FeatureProj></FeatureProj>
    <FeatureProj></FeatureProj>
  </section>
); 

export default FeaturedProject; 