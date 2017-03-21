import { RECEIVE_ALL_COMMENTS, RECEIVE_SINGLE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const defaultComment = {
  id: "",
  user_id: "",
  story_id: "",
  comment: "",
};


const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_SINGLE_COMMENT:
      let newState = Object.assign([], state, {[state.length]: action.comment});
      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
