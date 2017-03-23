import { RECEIVE_ALL_FOLLOWERS, RECEIVE_SINGLE_FOLLOWERS, REMOVE_FOLLOW } from '../actions/follows_actions';
import merge from 'lodash/merge';

const FollowersReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_FOLLOWERS:
      return action.followers;
    case RECEIVE_SINGLE_FOLLOWERS:
      let newState = Object.assign([], state, {[state.length]: action.result});
      return newState;
    case REMOVE_FOLLOW:
      newState = merge([], state);
      const index = newState.findIndex(x => x.id === action.follow.id);
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
};

export default FollowersReducer;
