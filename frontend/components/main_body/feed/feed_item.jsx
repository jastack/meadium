import React from 'react';
import { Link } from 'react-router';


class FeedItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    const avatarUrl = this.props.story.avatar_url;
    const id = this.props.story.author_id;
    const story = this.props.story;
    const username = this.props.story.author;


    return(
      <div className="authorIndexItem">
        <div className="author-info">
          <img className="avatar2" src={avatarUrl} />
          <div className="tiny-author">
            <Link className="h2" to={`/authors/${id}`}>{username}</Link>
            <h3>Mar 17</h3>
          </div>
        </div>

        <div className="story-info">
          <Link className="title" to={`/${this.props.story.id}`}>{story.title}</Link>
          <img className="author" src={this.props.story.image_url} />
          <h2 className="read">{this.props.story.subtitle}</h2>
        </div>

        <div>

        </div>

      </div>
    );
  }
}

export default FeedItem;
