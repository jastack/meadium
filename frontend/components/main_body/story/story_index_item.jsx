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

const StoryIndexItem = ({ story, router }) => (
  <div className="storyIndexItem">

    <img src={story.image_url} />

    <div className="story-info">
      <Link to={`/${story.id}`} >{story.title}</Link>
      <h2 className="subtitle">{story.subtitle}</h2>
      <div className="author-info">
        <img className="avatar2" src={story.avatar_url} />
        <div className="tiny-author">
          <Link className="h2" to={`/authors/${story.author_id}`}>{story.author}</Link>
          <h3>{dateFixer(story.date)}</h3>
        </div>
      </div>
    </div>

  </div>
);

export default StoryIndexItem;
