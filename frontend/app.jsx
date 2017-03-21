import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchAllStories, fetchStory, receiveAllStories, receiveStory} from './actions/story_actions';
import { createComment, fetchComments } from './util/comments_api_util.js';


document.addEventListener('DOMContentLoaded', () => {
  window.fetchComments = fetchComments;
  window.createComment = createComment;
  window.fetchAllStories = fetchAllStories;
  window.fetchStory = fetchStory;
  window.receiveAllStories = receiveAllStories;
  window.receiveStory = receiveStory;
  window.store = configureStore();
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
