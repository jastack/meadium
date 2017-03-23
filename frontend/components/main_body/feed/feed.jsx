import React from 'react';
import FeedItemContainer from './feed_item_container';

class Feed extends React.Component {
  constructor(props){
    super(props);

    this.userId = this.userId.bind(this);
    this.feedArray = this.feedArray.bind(this);

  }

  componentDidMount(){
    const id = this.userId();
    this.props.fetchFeed(1);
  }

  userId(){
    if (this.props.currentUser) {
      return this.props.currentUser.id;
    }
  }

  feedArray(){
    if (this.props.feed) {
      if (this.props.feed[0]) {
        return this.props.feed.map( story => <FeedItemContainer key={story.id} story={story}/>)
      }
    }
  }

  render(){
    return(
      <div className="stories-index">
        {this.feedArray()}
      </div>
    );
  }
}

export default Feed;
