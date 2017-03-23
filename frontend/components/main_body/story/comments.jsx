import React from 'react';
import { withRouter, Link } from 'react-router';
import CommentsItem from './comments_item';

class Comments extends React.Component {
  constructor(props){
    super(props);
    this.state={user_id: "", story_id: this.props.storyId, comment: "", show: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.showComments = this.showComments.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.commentsForm = this.commentsForm.bind(this);
    this.showButton = this.showButton.bind(this);
    this.signedIn = this.signedIn.bind(this);
    this.formRender = this.formRender.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const comment = this.state;
    this.props.createComment(this.props.storyId, comment);
  }

  signedIn(){
    if (this.props.currentUser) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount(){
    this.props.fetchComments(this.props.storyId);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  showComments(){
    if (this.signedIn()) {
      this.setState({user_id: this.props.currentUser.id});
    }
    this.setState({show: true});
  }

  componentWillMount(){
    this.setState({story_id: this.props.storyId});
  }

  renderComments(){
    let comments = this.props.comments;
    if (comments[0]) {
      return (
        comments.map(comment => <CommentsItem key={comment.id} comment={comment} />)
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  renderPage(){
    if (this.state.show) {
      return this.commentsForm();
    } else {
      return this.showButton();
    }
  }

  formRender(){
    if (this.signedIn()) {
      return (
        <section className="newComment">
          <form onSubmit={this.handleSubmit}>
            <div className="author-info">
              <img className="avatar2" src={this.props.currentUser.avatar_url} />
              <div className="tiny-author">
                <Link className="h2" to={`/authors/${this.props.currentUser.user_id}`}>{this.props.currentUser.username}</Link>
              </div>
            </div>
            <label>
              <textarea
                value={this.state.comment}
                onChange={this.update("comment")}
                placeholder="your response here..."/>

            </label>
            <input type="submit" value="Publish"/>
          </form>
        </section>
      );
    } else {
      return (
        <div className="comment-info">
          <div className="space">
            <button className="show-comments">Sign In to Publish a Comment!</button>
          </div>
        </div>
      );
    }
  }

  commentsForm(){
    return (<div>
      <section className="comments">
        <h2>Responses</h2>

        {this.formRender()}

        <div className="commentIndexItem">
          {this.renderComments()}
          {this.props.children}
        </div>

      </section>
    </div>);
  }

  showButton(){
    return (
      <div className="comment-info">
        <div className="space">
          <button className="show-comments" onClick={this.showComments}>Show Comments</button>
        </div>
      </div>
    );
  }

  render(){
    console.log(this.props);
    return (
      <div>
        {this.renderPage()}
      </div>
    );
  }

}

export default Comments;
