import * as APIUtil from '../util/comments_api_util.js';

export const RECEIVE_SINGLE_COMMENT = "RECEIVE_SINGLE_COMMENT";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";

export const fetchAllComments = (id) => dispatch => (
  APIUtil.fetchComments(id)
    .then(comments => dispatch(receiveAllComments(comments)))
);

export const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});


export const createComment = (id, comment) => dispatch => (
  APIUtil.createComment(id, comment)
    .then(result => dispatch(receiveComment(result)) )
);

export const receiveComment = comment => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment
});
