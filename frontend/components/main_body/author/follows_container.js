import { connect } from 'react-redux';
import { createFollow, unFollow, fetchAllFollowing } from '../../../actions/follows_actions';
import Follow from './follow';

const mapStateToProps = ({ session, storyDetail, following}) => {
  return ({
    storyDetail: storyDetail,
    currentUser: session.currentUser,
    following: following
  });
};


const mapDispatchToProps = (dispatch) => ({
  createFollow: (authorId, userId) => dispatch(createFollow(authorId, userId)),
  unFollow: (authorId, followId) => dispatch(unFollow(authorId, followId)),
  fetchAllFollowing: userId => dispatch(fetchAllFollowing(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
