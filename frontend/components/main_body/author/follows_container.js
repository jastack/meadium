import { connect } from 'react-redux';
import { createFollow, unFollow } from '../../../actions/follows_actions';

const mapStateToProps = ({ session, followers}) => {
  return ({
    followers: followers,
    currentUser: session.currentUser
  });
};


const mapDispatchToProps = (dispatch) => ({
  createFollow: (authorId, userId) => dispatch(createFollow(authorId, userId)),
  unFollow: (authorId, followId) => dispatch(unFollow(authorId, followId))
});
