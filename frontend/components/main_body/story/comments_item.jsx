import React from 'react';
import { withRouter, Link } from 'react-router';

const MONTHS = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};


const dateFixer = (date) => {
  const monthVal = date.slice(5, 7);
  const month = MONTHS[monthVal];
  const day = date.slice(8, 10);
  return `${month} ${day}`;
};

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
            <h3>{dateFixer(this.props.comment.date)}</h3>
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
