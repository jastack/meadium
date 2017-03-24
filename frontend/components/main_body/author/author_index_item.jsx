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

const AuthorIndexItem = ({ story, username, avatarUrl, id }) => (
  <div className="authorIndexItem">
    <div className="author-info">
      <img className="avatar2" src={avatarUrl} />
      <div className="tiny-author">
        <Link className="h2" to={`/authors/${id}`}>{username}</Link>
        <h3>{dateFixer(story.date)}</h3>
      </div>
    </div>

    <div className="story-info">
      <Link className="title" to={`/${story.id}`}>{story.title}</Link>
      <img className="author" src={story.image_url} />
      <h2 className="read">{story.subtitle}</h2>
      <h3><Link className="readmore" to={`/${story.id}`}>Read more...</Link></h3>
    </div>

    <div>

    </div>

  </div>

);


export default AuthorIndexItem;
