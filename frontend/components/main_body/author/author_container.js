import { connect } from 'react-redux';
import { fetchAuthor } from '../../../actions/authors_actions';
import { fetchAllFollowing, createFollow, fetchAllFollowers, unFollow } from '../../../actions/follows_actions';

import Author from './author';

const mapStateToProps = ({author, following, session, followers}) => {
  return ({
    author: author,
    following: following,
    followers: followers,
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchAuthor: id => dispatch(fetchAuthor(id)),
  fetchAllFollowing: id => dispatch(fetchAllFollowing(id)),
  fetchAllFollowers: id => dispatch(fetchAllFollowers(id)),
  createFollow: (authorId, userId) => dispatch(createFollow(authorId, userId)),
  unFollow: (authorId, followId) => dispatch(unFollow(authorId, followId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Author);
