import * as APIUtil from '../util/stories_api_util.js';

export const RECEIVE_ALL_STORIES = "RECEIVE_ALL_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const CREATE_STORY = "CREATE_STORY";

export const fetchAllStories = () => dispatch => (
  APIUtil.fetchStories()
    .then(stories => dispatch(receiveAllStories(stories)))
);

export const fetchStory = id => dispatch => (
  APIUtil.fetchStory(id)
    .then(story => dispatch(receiveStory(story)))
);

export const createStory = story => dispatch => (
  APIUtil.createStory(story)
    .then(result => dispatch(receiveStory(result)) )
);

export const receiveAllStories = stories => ({
  type: RECEIVE_ALL_STORIES,
  stories
});

export const receiveStory = story => ({
  type: RECEIVE_STORY,
  story
});
