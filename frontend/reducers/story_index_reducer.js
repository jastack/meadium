import { RECEIVE_ALL_STORIES, RECEIVE_STORY, REMOVE_STORY } from '../actions/story_actions.js';
import merge from 'lodash/merge';

const defaultStory = {
  id: "",
  title: "",
  author: "",
  author_id: "",
  image_url: "",
  avatar_url: "",
  subtitle: ""
};


const StoryIndexReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories;
    case REMOVE_STORY:
      let newState = merge({}, state);
      delete newState[action.story.id];
      return newState;
    default:
      return state;
  }
};

export default StoryIndexReducer;
