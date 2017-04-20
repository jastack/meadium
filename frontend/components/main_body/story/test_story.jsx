import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';

class TestStoryDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {story: {}};
  }

  componentDidMount(){
    this.fetchStory(11);
  }

  fetchStory(id){
    fetch(`/api/stories/${id}`).then(response => response.json())
      .then(responseData => this.setState({story: responseData}));
  }


  renderBody(){
    var $log = $('#log');
    const str = this.state.story.body.toString('html');
    const html = $.parseHTML( str );
    $log.append( html );
  }

  render(){
    console.log(this.state);
    if (this.state.story.body) {
      this.renderBody();
    }


    return (
      <div className="background">
        <div className='story'>


          <section className="body">
            <h1>Title</h1>
            <h2 className="subtitle">Subtitle</h2>
            <img className="header-image" src="" />
            <div id="log">
              <p>Body</p>
            </div>

          </section>


        </div>

      </div>
    );
  }

}

export default withRouter(TestStoryDetail);
