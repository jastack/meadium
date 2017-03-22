import React from 'react';
import { withRouter } from 'react-router';
import AuthorIndexItem from './author_index_item';

class Author extends React.Component {
  constructor(props){
    super(props);

    this.follow = this.follow.bind(this);
  }

  componentDidMount(){
    this.props.fetchAuthor(this.props.params.author_id);
    this.props.fetchAllFollowing(this.props.params.author_id);
    this.props.fetchAllFollowers(this.props.params.author_id);
  }

  follow(){
    const authorId = this.props.params.author_id;
    if (this.props.currentUser){
      const userId = this.props.currentUser.id;
      this.props.createFollow(authorId, userId);
    }
  }

  render(){
    const username = this.props.author.username;
    const description = this.props.author.description;
    const stories = this.props.author.stories;
    const followingCount = this.props.following.length;
    const followersCount = this.props.followers.length;
    const avatarUrl = this.props.author.avatarUrl;

    let storiesShow;
    if (stories) {
      storiesShow = stories.map(story => <AuthorIndexItem id={this.props.params.author_id} username={username} avatarUrl={avatarUrl} story={story} key={`story-${story.id}-${story.title}`}/>);
    }
    return (
      <div className="author-page">
        <div className="author-section">
          <div className="info2">
            <h2>{username}</h2>
            <h3>{description}</h3>
            <li>{followingCount} Following</li>
            <li>{followersCount} Followers</li>
            <button onClick={this.follow}>Follow this author!</button>
          </div>
          <img src={avatarUrl} />
        </div>

      <div className="background">
        <h2 className="features">Featured</h2>
      </div>

      <div className="stories-index">
        {storiesShow}
      </div>

      </div>
    );
  }
}

export default withRouter(Author);
