import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import RichTextEditor from 'react-rte';


class NewStory extends React.Component {
  constructor(props){
    super(props);
    this.state = { title: "", body: "", image_url: "", subtitle: "", author_id: this.props.author.id, mode: "edit", value: RichTextEditor.createEmptyValue() };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderPreview = this.renderPreview.bind(this);
    this.preview = this.preview.bind(this);
    this.handleRender = this.handleRender.bind(this);
    this.edit = this.edit.bind(this);
    this.bodyUpdate = this.bodyUpdate.bind(this);
    this.checkfields = this.checkfields.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e){
    e.preventDefault();
    const story = {title: this.state.title, body: this.state.body, image_url: this.state.image_url, subtitle: this.state.subtitle, author_id: this.state.author_id, topic_id: 7};
    this.props.createStory(story).then(response =>
      hashHistory.push(`/${response.story.id}`)
    );
  }


  renderBody(){
    var $log = $('#log');
    const str = this.props.details.body.toString('html');
    const html = $.parseHTML( str );
    $log.replaceWith( html );
  }

  createMarkup() {
    return {__html: this.state.body};
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
              <div className="author-follow">
                <h2 className="name">{author}</h2>
              </div>
              <h3 className="description">{authorDescription}</h3>
            </div>
          </section>

          <section className="body">
            <h1>{title}</h1>
            <img className="header-image" src={imageUrl} />
            <div id="log">
              <div dangerouslySetInnerHTML={this.createMarkup()} />
            </div>
          </section>
        </div>
        <div className="button">
          <button className="follow" onClick={this.handleSubmit}>Publish!</button>
          <button className="follow" onClick={this.edit}>Edit</button>
        </div>
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

            <RichTextEditor
              value={this.state.value}
              onChange={this.bodyUpdate}
              placeholder="your great story"
              />

            <br />
            <br />
          </form>
        </div>
        <div className="button">
          <button className="follow" onClick={this.preview}>Preview</button>
        </div>
      </div>
    );
  }

  preview(e){
    e.preventDefault();
    let ready = this.checkfields();
    if (ready){
      this.setState({mode: "preview"});
    }
  }

  checkfields(){
    if (this.state.title === "" || this.state.body === "" ){
      alert("Story must have a title and body");
      return false;
    }

    return true;
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

  bodyUpdate(text) {
    this.setState({ value: text });
    this.setState({body: this.state.value.toString('html')});
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
