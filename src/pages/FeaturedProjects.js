import React from 'react'; 
import { FeatureProj } from '../components/index.components'; 
import Anime from 'react-anime'
import featuredProjects from '../styles/index.styles'; // eslint-disable-line no-unused-vars


export default class FeaturedProject extends React.Component{ 
  constructor(props){ 
    super(props); 
    this.state = { 
      projOneOpen : false, 
      projTwoOpen : false, 
      projThreeOpen: false
    }; 

    // this.domRef = React.createRef(); 
  }

  projOneClicked = () => { 
    this.setState({projOneOpen : true}, () => { 
      console.log('proj one was clicked'); 
    })
  }

  projTwoCLlicked = () => {
    this.setState({projTwoOpen: true}, () => { 
    })
  }

  projThreeClick = () => { 
    this.setState({projThreeOpen: true}, () => { 
      console.log('proj three was clicked'); 
    })
  }

  render(){
    return ( 
      <section className="featured-proj-container">
        <FeatureProj 
          clickedProj={() => this.projOneClicked()}
          projNum='proj-1' 
          className='one'>
        </FeatureProj>
        <FeatureProj 
          clickedProj={() => this.projTwoCLlicked()}
          projNum='proj-2' 
          className='two'>
        </FeatureProj>
        <FeatureProj 
          clickedProj={() => this.projThreeClick()}
          projNum='proj-3' 
          className='three'>
        </FeatureProj>
      </section>
    ); 
  }
}; 
