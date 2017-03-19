import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import StoryDetailContainer from './main_body/story/story_detail_container';
import StoryIndexContainer from './main_body/story/story_index_container';


const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <Route path="/index" component={ StoryIndexContainer } />
        <Route path="/:id" component={ StoryDetailContainer } />
    </Route>
    </Router>
  </Provider>);
};

export default Root;
