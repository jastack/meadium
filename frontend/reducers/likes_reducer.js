import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/likes_actions';
import merge from 'lodash/merge';

const LikesReducer = ( state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      let newState = Object.assign([], state, {[state.length]: action.like});
      return newState;
    case REMOVE_LIKE:
      newState = merge([], state);
      const index = newState.findIndex(x => x.id === action.like.id);
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
};

export default LikesReducer;
