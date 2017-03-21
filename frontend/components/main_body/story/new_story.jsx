import React from 'react';
import { withRouter } from 'react-router';


class NewStory extends React.Component {
  constructor(props){
    super(props);
    this.state = { title: "", body: "", image_url: "", subtitle: "", author_id: this.props.author.id };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e){
    e.preventDefault();
    const story = this.state;
    this.props.createStory(story);
  }

  render(){
    const avatarUrl = this.props.author.avatar_url;
    const author = this.props.author.username;
    const description = this.props.author.description;
    return(
      <div>

        <div className="createStoryAuthor">
            <img className="avatar" src={avatarUrl}></img>
            <div className="info">
              <h2 className="name">{author}</h2>
              <h3>Draft</h3>
            </div>
        </div>

        <div className="editor">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update("title")}
                placeholder="Title" />
            </label>
            <br />
            <br />

            <label>
              <input type="text"
                value={this.state.subtitle}
                onChange={this.update("subtitle")}
                placeholder="subtitle" />
            </label>
            <br />
            <br />

            <label>
              <textarea
                value={this.state.body}
                onChange={this.update("body")}
                placeholder="your great story"/>
            </label>
            <br />
            <br />

            <label>
              <input type="text"
                value={this.state.image_url}
                onChange={this.update("image_url")}
                placeholder="find a picture url"/>
            </label>

            <br />
            <br />
            <input type="submit" value="Publish"/>
          </form>

        </div>
      </div>
    );
  }
}

export default withRouter(NewStory);
