import React from 'react';
import StoryIndexItem from './story_index_item';
import { Link } from 'react-router';
import FeedContainer from '../feed/feed_container';

class StoryIndex extends React.Component {
  constructor(props) {
    super(props);

    this.storiesArray = this.storiesArray.bind(this);
    this.renderHome = this.renderHome.bind(this);
    this.renderFeed = this.renderFeed.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllStories();
  }

  storiesArray(){
    const storyArray = this.props.stories;
    if (storyArray[0]) {
      return storyArray.map( story => <StoryIndexItem key={story.id} story={story} />);
    } else {
      return [];
    }
  }

  renderFeed(){
    return(
      <div>
        <FeedContainer />
      </div>
    );
  }

  renderPage(){
    if (this.props.currentUser) {
      return this.renderFeed();
    } else {
      return this.renderHome();
    }
  }

  renderHome(){
    const storyArray = this.storiesArray();
    if (storyArray[0]) {
      return (
        <div>
          <div className="index">
            <div className="box a">{storyArray[0]}</div>
            <div className="box b">{storyArray[1]}</div>
            <div className="box c">{storyArray[2]}</div>
            <div className="box d">{storyArray[3]}</div>
          </div>
        </div>
      );
    } else {
        return (
          <div>Loading...</div>
        );
      }
  }

  render(){
    console.log(this.props);
    return(
      <div>
        {this.renderPage()}
      </div>
    );
  }
}

export default StoryIndex;
