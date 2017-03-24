import React from 'react';
import { Link } from 'react-router';

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


class FeedItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const avatarUrl = this.props.story.avatar_url;
    const id = this.props.story.author_id;
    const story = this.props.story;
    const username = this.props.story.author;


    return(
      <div className="authorIndexItem">
        <div className="author-info">
          <img className="avatar2" src={avatarUrl} />
          <div className="tiny-author">
            <Link className="h2" to={`/authors/${id}`}>{username}</Link>
            <h3>{dateFixer(this.props.story.date)}</h3>
          </div>
        </div>

        <div className="story-info">
          <Link className="title" to={`/${this.props.story.id}`}>{story.title}</Link>
          <img className="author" src={this.props.story.image_url} />
          <h2 className="read">{this.props.story.subtitle}</h2>
        </div>

        <div>

        </div>

      </div>
    );
  }
}

export default FeedItem;
