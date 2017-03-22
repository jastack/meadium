import React from 'react';
import { withRouter, Link } from 'react-router';

class StoryPreview extends React.Component {
  constructor(props){
    super(props);

  }


  render(){
    console.log(this.props);

    return (
      <div className="background">
        <div className='story'>

          <section className="author">
            <img className="avatar" ></img>
            <div className="info">
              <h2 className="name"><Link to={`/authors/`}>Author</Link></h2>
              <button className="follow">Follow</button>
              <h3 className="description">Description</h3>
            </div>
          </section>

          <section className="body">
            <h1>Title</h1>
            <img className="header-image" />
            <p>Body</p>
          </section>

        </div>
      </div>
    );
  }

}

export default withRouter(StoryPreview);
