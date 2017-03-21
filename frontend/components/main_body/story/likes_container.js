import { connect } from 'react-redux';
import { fetchAllLikes, newLike, disLike } from '../../../actions/likes_actions';

import Likes from './likes';

const mapStateToProps = ( {session, likes, storyDetail} ) => {
  return ({
    likes: likes,
    currentUser: session.currentUser,
    storyId: storyDetail.id
  });
};

const mapDispatchToProps = (dispatch) => ({
  newLike: (storyId, like) => dispatch(newLike(storyId, like)),
  disLike: (storyId, id) => dispatch(disLike(storyId, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
