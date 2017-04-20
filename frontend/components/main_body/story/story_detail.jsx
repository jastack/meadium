import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import CommentsContainer from './comments_container';
import LikesContainer from './likes_container';
import FollowsContainer from '../author/follows_container';

class Story extends React.Component {
  constructor(props){
    super(props);
    this.comments = this.comments.bind(this);
    this.renderFollows = this.renderFollows.bind(this);
    this.deleteStory = this.deleteStory.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }

  componentDidMount(){
    this.props.fetchStory(this.props.params.id);
    this.props.fetchAllLikes(this.props.params.id);
  }

  comments(id){
    if (this.props.currentUser) {
      return ;
    } else {
      return <h2>You must be logged in to see comments</h2>;
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

  renderBody(){
    var $log = $('#log');
    const str = this.props.details.body.toString('html');
    const html = $.parseHTML( str );
    $log.replaceWith( html );
  }

  ownStory(){
    if (this.signedInCheck()) {
      const authorId = this.props.details.author_id;
      const userId = this.props.currentUser.id;
      if (authorId === userId) {
        return true;
      } else {
        return false;
      }
    }
  }

  deleteStory(e){
    e.preventDefault();
    const id = this.props.location.pathname.slice(1);
    this.props.deleteStory(id);
    hashHistory.push("/");
  }

  renderFollows(){
    if (this.ownStory()) {
      return <div></div>;
    } else {
      return <FollowsContainer />;
    }
  }

  deleteButton(){
    if (this.ownStory()) {
      return <button className="follow" onClick={this.deleteStory}>Delete Story</button>;
    } else {
      return <div></div>;
    }
  }

  render(){
    if (this.props.details.body){
      this.renderBody();
    }
    const id = this.props.location.pathname.slice(1);
    const author = this.props.details.author;
    const title = this.props.details.title;
    const body = this.props.details.body;
    const imageUrl = this.props.details.image_url;
    const avatarUrl = this.props.details.avatar_url;
    const description = this.props.details.description;
    const comments = this.props.details.comments;
    const authorId = this.props.details.author_id;
    const subtitle = this.props.details.subtitle;
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
              <div className="author-follow">
                <h2 className="name"><Link to={`/authors/${authorId}`}>{author}</Link></h2>
                {this.renderFollows()}
              </div>
              <h3 className="description">{description}</h3>
            </div>
          </section>

          <section className="body">
            <h1>{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
            <img className="header-image" src={imageUrl} />
            <div id="log">
            </div>
          </section>

          <section className="likes">
            <LikesContainer />
            <div className="delete">
              {this.deleteButton()}
            </div>
          </section>

        </div>

        <div className="responses">

        </div>

          <CommentsContainer storyId={id}/>
          {this.props.children}
      </div>
    );
  }

}

export default withRouter(Story);
