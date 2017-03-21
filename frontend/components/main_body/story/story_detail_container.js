import { connect } from 'react-redux';
import { fetchStory } from '../../../actions/story_actions';
import { fetchAllLikes, newLike, disLike } from '../../../actions/likes_actions';

import StoryDetail from './story_detail';

const mapStateToProps = ({storyDetail, session, likes}) => {
  return ({
    details: storyDetail,
    currentUser: session.currentUser,
    likes: likes
   });
};

const mapDispatchToProps = (dispatch) => ({
  fetchStory: id => dispatch(fetchStory(id)),
  fetchAllLikes: id => dispatch(fetchAllLikes(id)),
  newLike: (id, like) => dispatch(newLike(id, like)),
  disLike: (id) => dispatch(disLike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetail);
