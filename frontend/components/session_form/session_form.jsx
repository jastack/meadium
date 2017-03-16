import React from 'react';
import { Link, withRouter } from 'react-router';
import  Modal  from 'react-modal';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.clearErrors = this.clearErrors.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	clearErrors(){
		this.props.clearErrors();
	}

	componentWillMount() {
    Modal.setAppElement('body');
   }

	 closeModal(){
		 this.props.router.push('/');
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
			return <h3>Need an account? <Link className="link" to="/signup" onClick={this.clearErrors} >Sign up!</Link></h3>;
		} else {
			return <h3>Already have an account? <Link className="link" to="/login" onClick={this.clearErrors} >Sign in!</Link></h3>;
		}
	}

	renderGreet(){
		if (this.props.formType === 'login') {
			return (
				<h3>Sign in to Meadium to connect with voices and perspectives on America's
				favorite electricity-producing reservoir. </h3>
			);
		} else {
				return (
						<h3> Sign up for to Meadium to connect with voices and perspectives on America's
							favorite electricity-producing reservoir. </h3>
					);
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

	renderSubmit(){
		if (this.props.formType === 'login') {
			return (
					<input type="submit" value="Sign in" />
			);
		} else {
			return (
				<input type="submit" value="Sign up" />
			);
		}
	}

	guestLogin(e){
		e.preventDefault();
		this.props.login({username: "guest", password: "password"});
	}


	render() {
		return (
			<div className="login-form-container">
				<Modal isOpen={true} contentLabel="Modal"
					onRequestClose={this.closeModal}
					shouldCloseOnOverlayClick={true}
					className="modal"
					overlayClassName="Overlay">
					<div className="login-form">
						<header className="head">
							<img src="http://res.cloudinary.com/dopv3qpj7/image/upload/v1489687547/nature_gq8c8x.svg"></img>
							<h2>Meadium</h2>
						</header>
						{this.renderGreet()}
					<form onSubmit={this.handleSubmit} className="login-form-box">
						<ul>
							{this.renderErrors()}
						</ul>
							<br/>
							<label> Enter your username and password below:
								<br />
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input"
									placeholder="your username" />
							</label>
							<br/>
							<label>
								<br />
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input"
									placeholder="your password"/>
							</label>
							<br/>
							<div className="buttons">
								<button onClick={this.guestLogin}>Demo</button>
								{this.renderSubmit()}
							</div>
							{this.navLink()}
					</form>
				</div>
			</Modal>
			</div>
		);
	}

}

export default withRouter(SessionForm);
