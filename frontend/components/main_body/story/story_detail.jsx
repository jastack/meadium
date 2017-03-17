import React from 'react';
import { withRouter } from 'react-router';

class Story extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchStory(this.props.params.id);
  }

  render(){
    const author = this.props.details.author;
    const title = this.props.details.title;
    const body = this.props.details.body;
    const imageUrl = this.props.details.image_url;
    const avatarUrl = this.props.details.avatar_url;
    const description = this.props.details.description;
    return (
      <div className='story'>
        <section className="author">
          <img className="avatar" src={avatarUrl}></img>
          <div className="info">
            <h2 className="name">{author}</h2>
            <button className="follow">Follow</button>
            <h3 className="description">{description}</h3>
          </div>
        </section>

        <section className="body">
          <h1>{title}</h1>
          <img className="header-image" src={imageUrl} />
          <p>{body}</p>
        </section>
      </div>
    );
  }

}

export default withRouter(Story);
