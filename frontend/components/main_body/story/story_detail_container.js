import { connect } from 'react-redux';
import { fetchStory } from '../../../actions/story_actions';
import { fetchAllLikes, newLike, disLike } from '../../../actions/likes_actions';
import { createFollow, fetchAllFollowers } from '../../../actions/follows_actions';


import StoryDetail from './story_detail';

const mapStateToProps = ({storyDetail, session, likes, followers}) => {
  return ({
    details: storyDetail,
    currentUser: session.currentUser,
    likes: likes,
    followers: followers
   });
};

const mapDispatchToProps = (dispatch) => ({
  fetchStory: id => dispatch(fetchStory(id)),
  fetchAllLikes: id => dispatch(fetchAllLikes(id)),
  newLike: (id, like) => dispatch(newLike(id, like)),
  disLike: (id) => dispatch(disLike(id)),
  createFollow: (authorId, userId) => dispatch(createFollow(authorId, userId)),
  fetchAllFollowers: id => dispatch(fetchAllFollowers(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetail);
