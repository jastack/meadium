import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';


class NewStory extends React.Component {
  constructor(props){
    super(props);
    this.state = { title: "", body: "", image_url: "", subtitle: "", author_id: this.props.author.id, mode: "edit" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderPreview = this.renderPreview.bind(this);
    this.preview = this.preview.bind(this);
    this.handleRender = this.handleRender.bind(this);
    this.edit = this.edit.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e){
    e.preventDefault();
    const story = this.state;
    this.props.createStory(story).then(hashHistory.push(`/authors/${this.state.author_id}`));
  }

  renderPreview(){
    const author = this.props.author.username;
    const title = this.state.title;
    const body = this.state.body;
    const imageUrl = this.state.image_url;
    const avatarUrl = this.props.author.avatar_url;
    const authorDescription = this.props.author.description;
    const authorId = this.state.author_id;
    const subtitle = this.state.subtitle;

    return(
      <div className="background">
        <div className='story'>
          <section className="author">
            <img className="avatar" src={avatarUrl}></img>
            <div className="info">
              <h2 className="name"><Link to={`/authors/${authorId}`}>{author}</Link></h2>
              <button className="follow">Follow</button>
              <h3 className="description">{authorDescription}</h3>
            </div>
          </section>

          <section className="body">
            <h1>{title}</h1>
            <img className="header-image" src={imageUrl} />
            <p>{body}</p>
          </section>
        </div>
        <button onClick={this.handleSubmit}>Publish!</button>
        <button onClick={this.edit}>Edit</button>
      </div>
    );
  }

  renderForm(){
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
                value={this.state.title}
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
              <input type="text"
                value={this.state.image_url}
                onChange={this.update("image_url")}
                placeholder="find a picture url"/>
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
          </form>
        </div>
        <button onClick={this.preview}>Preview</button>
      </div>
    );
  }

  preview(e){
    e.preventDefault();
    this.setState({mode: "preview"});
  }

  edit(e){
    e.preventDefault();
    this.setState({mode: "edit"});
  }

  handleRender(){
    if (this.state.mode === "edit") {
      return this.renderForm();
    } else {
      return this.renderPreview();
    }
  }

  render(){
    return(
      <div>
        {this.handleRender()}
      </div>
    );
  }
}

export default withRouter(NewStory);
