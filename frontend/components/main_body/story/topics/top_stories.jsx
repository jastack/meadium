import React from 'react';
import { Link } from 'react-router';
import FeedContainer from '../../feed/feed_container';

class TopStories extends React.Component {
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
      return storyArray.map( story => <FeedItemContainer key={story.id} story={story} />);
    } else {
      return [];
    }
  }



  renderHome(){
    const storyArray = this.storiesArray();
    if (storyArray[0]) {
      return (
        <div className="stories-index">
          {storyArray}
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
        {this.renderHome()}
      </div>
    );
  }
}

export default TopStories;
