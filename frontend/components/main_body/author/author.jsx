import React from 'react';
import { withRouter } from 'react-router';
import AuthorIndexItem from './author_index_item';

class Author extends React.Component {
  constructor(props){
    super(props);

    this.follow = this.follow.bind(this);
    this.checkFollows = this.checkFollows.bind(this);
    this.renderFollows = this.renderFollows.bind(this);
    this.removeFollow = this.removeFollow.bind(this);
    this.ownPage = this.ownPage.bind(this);
  }

  componentDidMount(){
    this.props.fetchAuthor(this.props.params.author_id);
    this.props.fetchAllFollowing(this.props.params.author_id);
    this.props.fetchAllFollowers(this.props.params.author_id);
  }

  removeFollow(e){
    e.preventDefault();
    const index = this.props.followers.findIndex(x => x.user_id === this.props.currentUser.id);
    let id;
    if (this.props.followers[0]) {
      id = this.props.followers[index].id;
      this.props.unFollow(this.props.params.author_id, id);
    }
  }

  follow(){
    const authorId = this.props.params.author_id;
    if (this.props.currentUser){
      const userId = this.props.currentUser.id;
      this.props.createFollow(authorId, userId);
    }
  }

  checkFollows(){
    if (this.props.currentUser) {
      if (this.props.followers) {
        const index = this.props.followers.findIndex(x => x.user_id === this.props.currentUser.id);
        if (index >= 0) {
          return true;
        } else {
          return false;
        }
      } return false;
    } else {
      return "not signed in";
    }
  }

  renderFollows(){
    const proceed = this.checkFollows();
    if (proceed){
      if (proceed === "not signed in") {
        return <div></div>;
      } else {
        return <button className="following" onClick={this.removeFollow}>Following</button>;
      }
    } else {
      return <button className="follow" onClick={this.follow}>Follow</button>;
    }
  }

  ownPage(){
    if (this.props.currentUser) {
      const userId = this.props.currentUser.id;
      const authorId = this.props.author.id;
      if (userId === authorId) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  renderFinalFollows(){
    if (this.ownPage()) {
      return <div></div>;
    } else {
      return this.renderFollows();
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
        <div className="author-container">
          <div className="author-section">
            <div className="info2">
              <h2>{username}</h2>
              <h3>{description}</h3>
              <h3><div className="bold">{followingCount}</div> Following</h3>
              <h3><div className="bold">{followersCount}</div> Followers</h3>
              <h3>{this.renderFinalFollows()}</h3>
            </div>
            <img src={avatarUrl} />
          </div>
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
