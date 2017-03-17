import React from 'react';
import { Link } from 'react-router';
import StoryIndexContainer from './story/story_index_container';

class Main extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    console.log(this.props);
    return (
      <div className="background">
      </div>
    );
  }
}

export default Main;
