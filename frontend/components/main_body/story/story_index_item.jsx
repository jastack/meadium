import React from 'react';
import { Link } from 'react-router';

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
          <h3>Mar 17</h3>
        </div>
      </div>
    </div>

  </div>
);

export default StoryIndexItem;
