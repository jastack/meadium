import { connect } from 'react-redux';
import { fetchStory } from '../../../actions/story_actions';

import StoryDetail from './story_detail';

const mapStateToProps = ({storyDetail}) => {
  return ({details: storyDetail});
};

const mapDispatchToProps = (dispatch) => ({
  fetchStory: id => dispatch(fetchStory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetail);
