import { connect } from 'react-redux';
import { createFollow, unFollow } from '../../../actions/follows_actions';
import Follow from './follow';

const mapStateToProps = ({ session, storyDetail}) => {
  return ({
    storyDetail: storyDetail,
    currentUser: session.currentUser
  });
};


const mapDispatchToProps = (dispatch) => ({
  createFollow: (authorId, userId) => dispatch(createFollow(authorId, userId)),
  unFollow: (authorId, followId) => dispatch(unFollow(authorId, followId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
