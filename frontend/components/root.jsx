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
import TopicFeed from './main_body/topics/top_stories';
import TestStory from './main_body/story/rich_story';
import TestStoryDetail from './main_body/story/test_story';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRedirect to="/index" />
        <Route path="/index" component={ StoryIndexContainer } />
        <Route path="/topics/:id" component={ TopicFeed } />
        <Route path="/testing" component={ TestStory } />
        <Route path="/teststory" component={ TestStoryDetail } />
        <Route path="/create" component={ NewStoryContainer } />
        <Route path="/authors/:author_id" component={ AuthorContainer } />
        <Route path="/:id" component={ StoryDetailContainer } />
      </Route>
    </Router>
  </Provider>);
};

export default Root;
