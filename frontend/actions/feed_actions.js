import * as APIUtil from '../util/feeds_api_util';

export const RECEIVE_FEED = "RECEIVE_FEED";

export const fetchFeed = (userId) => dispatch => (
  APIUtil.fetchFeed(userId)
    .then(feed => dispatch(receiveFeed(feed)))
);

export const receiveFeed = feed => ({
  type: RECEIVE_FEED,
  feed
});
