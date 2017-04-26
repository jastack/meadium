import React from 'react';
import fetchTopicStories from '../../../util/topics_api_util';
import TopicItem from './topic_item';

var topics = {
  1: "Top Stories",
  2: "Editor's Picks",
  3: "Technology",
  4: "Humans",
  5: "Culture",
  6: "Business"
};

class TopicFeed extends React.Component {
  constructor(props){
    super(props);
    this.state = {topicId: this.props.params.id, stories: null};
  }

  componentDidMount(){
    fetch(`api/topics/${this.state.topicId}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({stories: responseData});
      });
  }

  componentWillReceiveProps(newProps){
    this.setState({topicId: newProps.params.id});
    fetch(`api/topics/${this.state.topicId}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({stories: responseData});
      });
  }

  renderTopicItem(){
    if (this.state.stories) {
      const stories = this.state.stories.map(story => <TopicItem story={story} key={story.id} />);
      return (
        stories
      );
    } else {
      return (
        <h2>Loading...</h2>
      );
    }
  }

  render(){
    const topicId = this.props.params.id;
    return(
      <div className="stories-index">
        <h2 id="name">{topics[topicId]}</h2>
        {this.renderTopicItem()}
      </div>
    );
  }
}

export default TopicFeed;
