import { connect } from 'react-redux';
import { fetchAllStories } from '../../../actions/story_actions';
import StoryIndex from './story_index';
import {selectAllStories} from '../../../reducers/selectors';

const mapStateToProps = ({storyIndex, session}) => {
  return ({
    stories: storyIndex,
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchAllStories: () => dispatch(fetchAllStories())
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryIndex);
