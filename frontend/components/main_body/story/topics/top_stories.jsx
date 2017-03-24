import React from 'react';
import { Link } from 'react-router';
import FeedItemContainer from '../../feed/feed_container';

class TopStories extends React.Component {
  constructor(props) {
    super(props);

    this.storiesArray = this.storiesArray.bind(this);
    this.renderStories = this.renderStories.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllStories();
  }

  storiesArray(){
    const storyArray = this.props.stories;
    if (storyArray[0]) {
      return storyArray.map( story => <FeedItemContainer key={story.id} story={story} />);
    } else {
      return [];
    }
  }



  renderStories(){
    const storyArray = this.props.stories;
    if (storyArray[0]) {
      return (
        <div className="stories-index">
          {this.storiesArray()}
        </div>
      );
    } else {
        return (
          <div>Loading...</div>
        );
      }
  }

  render(){
    return(
      <div>
        {this.renderStories()}
      </div>
    );
  }
}

export default TopStories;
