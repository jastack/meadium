import React from 'react';
import { withRouter } from 'react-router';

class Comments extends React.Component {
  constructor(props){
    super(props);
    this.state={user_id: this.props.currentUser.id, story_id: this.props.storyId, comment: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render(){
    const comments = this.props.comments;
    let commentsArray;
    if (comments[0]){
      commentsArray = comments.map(comment => <li key={comment.id}>{comment.comment}</li>);
    }

    return (
      <div>
        <section className="comments">
          <h2>Responses</h2>

          <section className="newComment">
            <form onSubmit={this.handleSubmit}>
              <label>
                <textarea
                  value={this.state.comment}
                  onChange={this.update("comment")}
                  placeholder="new comment"/>

              </label>
              <input type="submit" value="Publish"/>
            </form>
          </section>

        <ul className="allComments">
          <p>{commentsArray}</p>
        </ul>


        </section>
      </div>
    );
  }

}

export default Comments;
