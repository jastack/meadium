import React from 'react';
import { Link, withRouter } from 'react-router';
import  Modal  from 'react-modal';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	componentWillMount() {
    Modal.setAppElement('body');
   }

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user);
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up</Link>;
		} else {
			return <Link to="/login">log in</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	destroyErrors() {
		this.props.errors = [];
	}

	render() {
		return (
			<div className="login-form-container">
				<Modal isOpen={true} contentLabel="Modal">
					<div className="login-form">
						<h2>MEADIUM</h2>
					<form onSubmit={this.handleSubmit} className="login-form-box">
						{this.renderErrors()}
							<br/>
							<label> Enter your username and password below:
								<br />
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input"
									placeholder="username" />
							</label>
							<br/>
							<label>
								<br />
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input"
									placeholder="password"/>
							</label>
							<br/>
							<input type="submit" value="Submit" />
					</form>
				</div>
			</Modal>
			</div>
		);
	}

}

export default withRouter(SessionForm);
