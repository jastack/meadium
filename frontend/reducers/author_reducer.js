import { RECEIVE_AUTHOR } from '../actions/authors_actions';
import merge from 'lodash/merge';


const AuthorReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_AUTHOR:
      return action.author;
    default:
      return state;
  }
};

export default AuthorReducer;
