import { connect } from 'react-redux';
import { fetchFeed } from '../../../actions/feed_actions';
import Feed from './feed';

const mapStateToProps = ({ feed, session }) => {
  return({
    feed: feed,
  currentUser: session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchFeed: userId => dispatch(fetchFeed(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
