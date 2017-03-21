import React from 'react';

class Like extends React.Component {
  constructor(props){
    super(props);

    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
    this.checkLikes = this.checkLikes.bind(this);
  }

  addLike(e){
    e.preventDefault();
    this.props.newLike(this.props.storyId, {user_id: this.props.currentUser.id, story_id: this.props.storyId});
  }

  removeLike(e){
    e.preventDefault();
    const index = this.checkLikes();
    let id;
    if (this.props.likes[0]) {
      id = this.props.likes[index].id;
      this.props.disLike(this.props.storyId, id);
    }

  }

  checkLikes(){
    if (this) {
      if (this.props.likes) {
        const index = this.props.likes.findIndex(x => x.user_id === this.props.currentUser.id);
        return index;
    }
    }
  }

  render(){
    const likeCount = this.props.likes.length;
    return(
      <div>
        <div>This story has {likeCount} likes</div>
        <button onClick={this.addLike}>Add Like!</button>
        <button onClick={this.removeLike}>Remove Like!</button>
      </div>
    );
  }
}

export default Like;
