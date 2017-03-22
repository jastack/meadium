import React from 'react';
import { withRouter, Link } from 'react-router';


class CommentsItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="comment-info">
        <div className="author-info">
          <img className="avatar2" src={this.props.comment.avatarUrl} />
          <div className="tiny-author">
            <Link className="h2" to={`/authors/${this.props.comment.user_id}`}>{this.props.comment.username}</Link>
            <h3>Mar 17</h3>
          </div>
        </div>

        <div>
          <p>{this.props.comment.comment}</p>
        </div>
      </div>
    );
  }
}

export default CommentsItem;
