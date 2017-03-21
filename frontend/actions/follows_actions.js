import * as APIUtil from '../util/follows_api_util';

export const RECEIVE_ALL_FOLLOWING = "RECEIVE_ALL_FOLLOWING";
export const RECEIVE_SINGLE_FOLLOWING = "RECEIVE_SINGLE_FOLLOWING";
export const RECEIVE_ALL_FOLLOWERS = "RECEIVE_ALL_FOLLOWERS";
export const RECEIVE_SINGLE_FOLLOWERS = "RECEIVE_SINGLE_FOLLOWERS";

export const fetchAllFollowing = (userId) => dispatch => (
  APIUtil.following(userId)
    .then(following => dispatch(receiveAllFollowing(following)))
);

export const createFollow = (authorId, userId) => dispatch => (
  APIUtil.newFollow(authorId, userId)
    .then(result => dispatch(receiveSingleFollowing(result)))
);

export const receiveAllFollowing = following => ({
  type: RECEIVE_ALL_FOLLOWING,
  following
});

export const receiveSingleFollowing = (result) => ({
  type: RECEIVE_SINGLE_FOLLOWING,
  result
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
