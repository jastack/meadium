import React from 'react';
import { Link } from 'react-router';

const AuthorIndexItem = ({ story, username, avatarUrl, id }) => (
  <div className="authorIndexItem">
    <div className="author-info">
      <img className="avatar2" src={avatarUrl} />
      <div className="tiny-author">
        <Link className="h2" to={`/authors/${id}`}>{username}</Link>
        <h3>Mar 17</h3>
      </div>
    </div>

    <div className="story-info">
      <Link className="title" to={`/${story.id}`}>{story.title}</Link>
      <img className="author" src={story.image_url} />
      <h2 className="read">{story.subtitle}</h2>
    </div>

    <div>

    </div>

  </div>

);


export default AuthorIndexItem;
