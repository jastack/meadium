import React from 'react';
import { Link } from 'react-router';

const AuthorIndexItem = ({ story }) => (
  <div className="authorIndexItem">
    <img src={story.image_url} />
    <div className="story-info">
      <Link to={`/${story.id}`}>{story.title}</Link>
      <h2 className="subtitle">{story.subtitle}</h2>
    </div>
  </div>

);


export default AuthorIndexItem;
