import React from 'react';
import { Link } from 'react-router';

const StoryIndexItem = ({ story, router }) => (
  <div className="storyIndexItem">
    <img src={story.image_url} />
    <Link to={`/${story.id}`} >{story.title}</Link>
    <h2>{story.author}</h2>
    <img className="avatar2" src={story.avatar_url} />
  </div>
);

export default StoryIndexItem;
