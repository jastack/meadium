import { RECEIVE_ALL_FOLLOWING, RECEIVE_SINGLE_FOLLOWING } from '../actions/follows_actions';
import merge from 'lodash/merge';

const FollowingReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_FOLLOWING:
      return action.following;
    case RECEIVE_SINGLE_FOLLOWING:
      let newState = Object.assign([], state, {[state.length]: action.result});
      return newState;
    default:
      return state;
  }
};

export default FollowingReducer;
