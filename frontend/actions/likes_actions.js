import * as APIUtil from '../util/likes_api_util.js';


export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const fetchAllLikes = (storyId) => dispatch => (
  APIUtil.fetchLikes(storyId)
    .then(likes => dispatch(receiveAllLikes(likes)))
);

export const newLike = (storyId, like) => dispatch => (
  APIUtil.newLike(storyId, like)
    .then(result => dispatch(receiveLike(result)))
);

export const disLike = (storyId, likeId) => dispatch => (
  APIUtil.removeLike(storyId, likeId)
    .then(result => dispatch(removeLike(result)))
);

export const removeLike = (like) => ({
  type: REMOVE_LIKE,
  like
});

export const receiveAllLikes = (likes) => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like
});
