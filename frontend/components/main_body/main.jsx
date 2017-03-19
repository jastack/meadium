import React from 'react';
import { Link } from 'react-router';
import StoryIndexContainer from './story/story_index_container';


class Main extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props);
  }





  render(){
    return (
      <div className="background">
      </div>
    );
  }
}

export default Main;
