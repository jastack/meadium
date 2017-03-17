import React from 'react';
import StoryIndexItem from './story_index_item';

class StoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllStories();
  }

  render(){
    const storyArray = this.props.stories;
    if (storyArray[0]) {
      const id = storyArray[0].id;
      return (
        <div>
          {storyArray.map( story => <StoryIndexItem key={story.id} story={story} />)}
        </div>
      );
    } else {
        return (
          <div>Loading...</div>
        );
      }
  }
}

export default StoryIndex;
