import * as APIUtil from '../util/follows_api_util';

export const RECEIVE_ALL_FOLLOWING = "RECEIVE_ALL_FOLLOWING";
export const RECEIVE_SINGLE_FOLLOWING = "RECEIVE_SINGLE_FOLLOWING";
export const RECEIVE_ALL_FOLLOWERS = "RECEIVE_ALL_FOLLOWERS";
export const RECEIVE_SINGLE_FOLLOWERS = "RECEIVE_SINGLE_FOLLOWERS";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";


export const fetchAllFollowing = (userId) => dispatch => (
  APIUtil.following(userId)
    .then(following => dispatch(receiveAllFollowing(following)))
);

export const createFollow = (authorId, userId) => dispatch => (
  APIUtil.newFollow(authorId, userId)
    .then(result => dispatch(receiveSingleFollowers(result)))
);

export const unFollow = (authorId, followId) => dispatch => (
  APIUtil.unFollow(authorId, followId)
    .then(result => dispatch(removeFollow(result)))
);

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const receiveAllFollowing = following => ({
  type: RECEIVE_ALL_FOLLOWING,
  following
});

export const receiveSingleFollowing = (follow) => ({
  type: RECEIVE_SINGLE_FOLLOWING,
  follow
});


export const fetchAllFollowers = (userId) => dispatch => (
  APIUtil.followers(userId)
    .then(followers => dispatch(receiveAllFollowers(followers)))
);

export const receiveAllFollowers = followers => ({
  type: RECEIVE_ALL_FOLLOWERS,
  followers
});

export const receiveSingleFollowers = (result) => ({
  type: RECEIVE_SINGLE_FOLLOWERS,
  result
});
