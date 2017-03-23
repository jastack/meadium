import React from 'react';
import { withRouter, Link } from 'react-router';
import CommentsContainer from './comments_container';
import LikesContainer from './likes_container';

class Story extends React.Component {
  constructor(props){
    super(props);
    this.comments = this.comments.bind(this);
    this.follow = this.follow.bind(this);
    this.signedInCheck = this.signedInCheck.bind(this);

  }

  componentDidMount(){
    this.props.fetchStory(this.props.params.id);
    this.props.fetchAllLikes(this.props.params.id);
  }

  comments(id){
    if (this.props.currentUser) {
      return <CommentsContainer storyId={id}/>;
    } else {
      return <h2>You must be logged in to see comments</h2>;
    }
  }

  follow(){
    const authorId = this.props.details.author_id;
    if (this.props.currentUser){
      const userId = this.props.currentUser.id;
      this.props.createFollow(authorId, userId);
    }
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  signedInCheck(){
    if (this.props.currentUser) {
      return true;
    } else {
      return false;
    }
  }

  likes(){
    if (this.signedInCheck()){
      return (
        <section className="likes">
          <LikesContainer />
        </section>
      );
    } else {
      return (
        <h2>Must be signed in to like!</h2>
      );
    }
  }

  render(){
    const id = this.props.location.pathname.slice(1);
    const author = this.props.details.author;
    const title = this.props.details.title;
    const body = this.props.details.body;
    const imageUrl = this.props.details.image_url;
    const avatarUrl = this.props.details.avatar_url;
    const description = this.props.details.description;
    const comments = this.props.details.comments;
    const authorId = this.props.details.author_id;
    let commentSection;
    if (comments) {
      commentSection = comments.map(comment => (comment.comment));
    }

    return (
      <div className="background">
        <div className='story'>
          <section className="author">
            <img className="avatar" src={avatarUrl}></img>
            <div className="info">
              <h2 className="name"><Link to={`/authors/${authorId}`}>{author}</Link></h2>
              <button onClick={this.follow} className="follow">Follow</button>
              <h3 className="description">{description}</h3>
            </div>
          </section>

          <section className="body">
            <h1>{title}</h1>
            <img className="header-image" src={imageUrl} />
            <p>{body}</p>
          </section>

          {this.likes()}
        </div>

        <div className="responses">

        </div>

          {this.comments(id)}
          {this.props.children}
      </div>
    );
  }

}

export default withRouter(Story);
