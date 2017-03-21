import { connect } from 'react-redux';
import { createStory } from '../../../actions/story_actions';

import NewStory from './new_story';

const mapStateToProps = ({session}) => ({
  author: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createStory: story => dispatch(createStory(story))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewStory);
