import React from 'react';
import { withRouter, Link } from 'react-router';
import CommentsItem from './comments_item';

class Comments extends React.Component {
  constructor(props){
    super(props);
    this.state={user_id: this.props.currentUser.id, story_id: this.props.storyId, comment: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const comment = this.state;
    this.props.createComment(this.props.storyId, comment);
  }

  componentDidMount(){
    this.props.fetchComments(this.props.storyId);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
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
        <div>No comments!</div>
      );
    }
  }

  render(){
    return (
      <div>
        <section className="comments">
          <h2>Responses</h2>

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

        <div className="commentIndexItem">
          {this.renderComments()}
          {this.props.children}
        </div>


        </section>
      </div>
    );
  }

}

export default Comments;
