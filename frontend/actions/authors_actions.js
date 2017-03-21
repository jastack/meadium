import * as APIUtil from '../util/authors_api_util';

export const RECEIVE_AUTHOR = "RECEIVE_AUTHOR";

export const fetchAuthor = id => dispatch => (
  APIUtil.fetchAuthor(id)
    .then(author => dispatch(receiveAuthor(author)))
);

export const receiveAuthor = author => ({
  type: RECEIVE_AUTHOR,
  author
});
