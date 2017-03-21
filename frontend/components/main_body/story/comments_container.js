import { connect } from 'react-redux';
import { createComment, fetchAllComments } from '../../../actions/comment_actions';
import Comments from './comments';

const mapStateToProps = ({session, comments}, ownProps) => {
  return ({
    comments: comments,
    currentUser: session.currentUser,
    storyId: ownProps.storyId,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchComments: id => dispatch(fetchAllComments(id)),
  createComment: (id, comment) => dispatch(createComment(id, comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
