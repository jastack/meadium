import { connect } from 'react-redux';
import { createStory } from '../../../actions/story_actions';

import StoryPreview from './story_preview';

const mapStateToProps = ({session}, ownProps) => ({
  author: session.currentUser,
  ownProps
});

const mapDispatchToProps = (dispatch) => ({
  createStory: story => dispatch(createStory(story))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryPreview);
