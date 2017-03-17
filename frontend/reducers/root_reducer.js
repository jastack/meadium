import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import StoryDetailReducer from './story_detail_reducer';
import StoryIndexReducer from './story_index_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  storyDetail: StoryDetailReducer,
  storyIndex: StoryIndexReducer
});

export default rootReducer;
