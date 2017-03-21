import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import StoryDetailReducer from './story_detail_reducer';
import StoryIndexReducer from './story_index_reducer';
import CommentReducer from './comment_reducer';
import LikesReducer from './likes_reducer';
import AuthorReducer from './author_reducer';
import FollowingReducer from './following_reducer';
import FollowersReducer from './followers_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  storyDetail: StoryDetailReducer,
  storyIndex: StoryIndexReducer,
  comments: CommentReducer,
  likes: LikesReducer,
  author: AuthorReducer,
  following: FollowingReducer,
  followers: FollowersReducer
});

export default rootReducer;
