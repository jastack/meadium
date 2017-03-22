import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import StoryDetailContainer from './main_body/story/story_detail_container';
import StoryIndexContainer from './main_body/story/story_index_container';
import NewStoryContainer from './main_body/story/new_story_container';
import AuthorContainer from './main_body/author/author_container';
import StoryPreviewContainer from './main_body/story/story_preview_container';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRedirect to="/index" />
        <Route path="/index" component={ StoryIndexContainer } />
        <Route path="/create" component={ NewStoryContainer } />
        <Route path="/:id" component={ StoryDetailContainer } />
        <Route path="/authors/:author_id" component={ AuthorContainer } />
      </Route>
    </Router>
  </Provider>);
};

export default Root;
