import { RECEIVE_ALL_STORIES, RECEIVE_STORY } from '../actions/story_actions.js';
import merge from 'lodash/merge';

const defaultStory = {
  id: "",
  title: "",
  body: "",
  author: "",
  author_id: "",
  image_url: "",
  description: "",
  avatar_url: "",
  subtitle: "",
  comments: "",
  likes: []
};


const StoryReducer = (state = defaultStory, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STORY:
      return action.story;
    default:
      return state;
  }
};

export default StoryReducer;
