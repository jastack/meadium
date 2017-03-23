import React from 'react';

class Like extends React.Component {
  constructor(props){
    super(props);

    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
    this.checkLikes = this.checkLikes.bind(this);
    this.renderLikes = this.renderLikes.bind(this);
    this.signedIn = this.signedIn.bind(this);
  }

  addLike(e){
    e.preventDefault();
    this.props.newLike(this.props.storyId, {user_id: this.props.currentUser.id, story_id: this.props.storyId});
  }

  removeLike(e){
    e.preventDefault();
    const index = this.props.likes.findIndex(x => x.user_id === this.props.currentUser.id);
    let id;
    if (this.props.likes[0]) {
      id = this.props.likes[index].id;
      this.props.disLike(this.props.storyId, id);
    }

  }

  checkLikes(){
      if (this.props.likes) {
        const index = this.props.likes.findIndex(x => x.user_id === this.props.currentUser.id);
        if (index >= 0) {
          return true;
        } else {
          return false;
        }
    } return false;
  }

  renderLikes(){
    if (this.checkLikes()){
      return <button onClick={this.removeLike}><svg className="svgIcon-use" width="29" height="29" viewBox="0 0 29 29"><path d="M19.5 4c-1.948 0-3.77.898-5 2.434C13.27 4.898 11.448 4 9.5 4 5.916 4 3 7.02 3 10.734c0 4.793 6.227 10 9.95 13.11.296.25.853.723 1.212 1.03.196.166.48.166.677 0 .39-.332 1.02-.87 1.37-1.158 3.66-3.022 9.79-8.08 9.79-12.982C26 7.02 23.08 4 19.5 4z" fillRule="evenodd"></path></svg></button>;
    } else {
      return <button onClick={this.addLike}><svg className="svgIcon-use" width="29" height="29" viewBox="0 0 29 29"><path d="M16.215 23.716c-.348.288-.984.826-1.376 1.158a.526.526 0 0 1-.68 0c-.36-.307-.92-.78-1.22-1.03C9.22 20.734 3 15.527 3 10.734 3 7.02 5.916 4 9.5 4c1.948 0 3.77.898 5 2.434C15.73 4.898 17.552 4 19.5 4c3.584 0 6.5 3.02 6.5 6.734 0 4.9-6.125 9.96-9.785 12.982zM19.5 5.2c-1.774 0-3.423.923-4.41 2.468a.699.699 0 0 1-.59.323.706.706 0 0 1-.59-.32c-.988-1.54-2.637-2.47-4.41-2.47-2.922 0-5.3 2.49-5.3 5.54 0 4.23 6.19 9.41 9.517 12.19.217.18.566.48.783.66l.952-.79c3.496-2.88 9.348-7.72 9.348-12.05 0-3.05-2.378-5.53-5.3-5.53z"></path></svg></button>;
    }
  }

  renderLikesNotSignedIn(){
    return (
      <svg className="svgIcon-use" width="29" height="29" viewBox="0 0 29 29"><path d="M16.215 23.716c-.348.288-.984.826-1.376 1.158a.526.526 0 0 1-.68 0c-.36-.307-.92-.78-1.22-1.03C9.22 20.734 3 15.527 3 10.734 3 7.02 5.916 4 9.5 4c1.948 0 3.77.898 5 2.434C15.73 4.898 17.552 4 19.5 4c3.584 0 6.5 3.02 6.5 6.734 0 4.9-6.125 9.96-9.785 12.982zM19.5 5.2c-1.774 0-3.423.923-4.41 2.468a.699.699 0 0 1-.59.323.706.706 0 0 1-.59-.32c-.988-1.54-2.637-2.47-4.41-2.47-2.922 0-5.3 2.49-5.3 5.54 0 4.23 6.19 9.41 9.517 12.19.217.18.566.48.783.66l.952-.79c3.496-2.88 9.348-7.72 9.348-12.05 0-3.05-2.378-5.53-5.3-5.53z"></path></svg>
    );
  }

  renderPageLikes(){
    if (this.signedIn()) {
      const likeCount = this.props.likes.length;
      return (
        <ul className="likes" >
          <li>{this.renderLikes()}</li>
          <li>{likeCount}</li>
        </ul>
      );
    } else {
      const likeCount = this.props.likes.length;
      return (
        <ul className="likes">
          <li>{this.renderLikesNotSignedIn()}</li>
          <li>{likeCount}</li>
          <li><h3>Sign in to Like!</h3></li>
        </ul>
      );
    }
  }

  signedIn(){
    if (this.props.currentUser) {
      return true;
    } else {
      return false;
    }
  }


  render(){
    return(
      <div>
        {this.renderPageLikes()}
      </div>
    );
  }
}

export default Like;
