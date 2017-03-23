import { connect } from 'react-redux';
import { fetchAllStories } from '../../../../actions/story_actions';
import TopStories from './top_stories';

const mapStateToProps = ({storyIndex, session}) => {
  return ({
    stories: storyIndex,
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchAllStories: () => dispatch(fetchAllStories())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopStories);
