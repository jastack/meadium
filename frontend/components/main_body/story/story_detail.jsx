import React from 'react';
import { withRouter, Link } from 'react-router';
import CommentsContainer from './comments_container';
import LikesContainer from './likes_container';

class Story extends React.Component {
  constructor(props){
    super(props);
    this.comments = this.comments.bind(this);

  }

  componentDidMount(){
    this.props.fetchStory(this.props.params.id);
    this.props.fetchAllLikes(this.props.params.id);
  }

  comments(id){
    if (this.props.currentUser) {
      return <CommentsContainer storyId={id}/>;
    } else {
      return <h2>You must be logged in to see comments</h2>;
    }
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  render(){
    const id = this.props.location.pathname.slice(1);
    const author = this.props.details.author;
    const title = this.props.details.title;
    const body = this.props.details.body;
    const imageUrl = this.props.details.image_url;
    const avatarUrl = this.props.details.avatar_url;
    const description = this.props.details.description;
    const comments = this.props.details.comments;
    const authorId = this.props.details.author_id;
    let commentSection;
    if (comments) {
      commentSection = comments.map(comment => (comment.comment));
    }
    return (
      <div className='story'>
        <section className="author">
          <img className="avatar" src={avatarUrl}></img>
          <div className="info">
            <h2 className="name"><Link to={`/authors/${authorId}`}>{author}</Link></h2>
            <button className="follow">Follow</button>
            <h3 className="description">{description}</h3>
          </div>
        </section>

        <section className="body">
          <h1>{title}</h1>
          <img className="header-image" src={imageUrl} />
          <p>{body}</p>
        </section>

        <section className="likes">
          <LikesContainer />
        </section>

        {this.comments(id)}
        {this.props.children}
      </div>
    );
  }

}

export default withRouter(Story);
