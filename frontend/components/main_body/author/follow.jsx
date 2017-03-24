import React from 'react';




class Follow extends React.Component {
  constructor(props){
    super(props);

    this.signedIn = this.signedIn.bind(this);
    this.followArray = this.followArray.bind(this);
    this.followingThisAuthor = this.followingThisAuthor.bind(this);
    this.follow = this.follow.bind(this);
    this.removeFollow = this.removeFollow.bind(this);
    this.renderFollows = this.renderFollows.bind(this);
    this.findFollowId = this.findFollowId.bind(this);
  }

  signedIn(){
    if (this.props.currentUser) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount(){
    if (this.signedIn()) {
      this.props.fetchAllFollowing(this.props.currentUser.id);
    }
  }

  followArray(){
    if (this.signedIn()) {
      const array = this.props.following.map( author => author.author_id);
      return array;
    } else {
      return [];
    }
  }

  followingThisAuthor(){
    if (this.signedIn()) {
      const authorId = this.props.storyDetail.author_id;
      const followArray = this.followArray();
      if (followArray.includes(authorId)) {
        return true;
      } else {
        return false;
      }
    }
  }

  follow(){
    const authorId = this.props.storyDetail.author_id;
    if (this.signedIn()){
      const userId = this.props.currentUser.id;
      this.props.createFollow(authorId, userId);
    }
  }

  findFollowId(){
    const followArray = this.followArray();
    const authorId = this.props.storyDetail.author_id;
    const followDetailsArray = this.props.following;
    let id;
    for (var i = 0; i < followArray.length; i++) {
      if (followArray[i] === authorId) {
        id = followDetailsArray[i].id;
        return id;
      } else {
        id = null;
      }
    }
    return id;
  }

  removeFollow(e){
    e.preventDefault();
    const authorId = this.props.storyDetail.author_id;
    const id = this.findFollowId();
    this.props.unFollow(authorId, id);
  }

  renderFollows(){
    if (this.signedIn()){
      if (this.followingThisAuthor()) {
        return <button className="following" onClick={this.removeFollow}>Following</button>;
      } else {
        return <button className="follow" onClick={this.follow}>Follow</button>;
      }
    } else {
      return <div></div>;
    }
  }

  render(){
    return (
      <div>
        {this.renderFollows()}
      </div>
    );
  }
}

export default Follow;
