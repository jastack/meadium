import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {modalIsOpen: false, formType: null};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLink = this.handleLink.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.overlay = this.overlay.bind(this);
    this.signout = this.signout.bind(this);
  }

  sessionLinks() {
    return (<nav className="right-nav">
      <ul>
        <li><button onClick={this.handleLogin}>Sign in</button></li>
        <li>/</li>
        <li><button onClick={this.handleSignUp}>Sign up</button></li>
        <li className="search-modal"><i className="fa fa-search"></i></li>
      </ul>
    </nav>);
  }

  signout(e){
    e.preventDefault();
    hashHistory.push('/');
    this.props.logout();
  }

  personalGreeting(currentUser, logout) {
  	return (<nav className="right-nav">
      <ul>
        <li><Link to="/create">Write a story</Link></li>
        <li><Link to={`/authors/${currentUser.id}`}>{currentUser.username}</Link></li>
        <li><button className="header-button" onClick={this.signout}>Log Out</button></li>
        <li className="search-modal"><i className="fa fa-search"></i></li>
      </ul>
  	</nav>);
  }

	componentWillMount() {
    Modal.setAppElement('body');
   }



   openModal(){
     this.setState({modalIsOpen: true});
   }

  closeModal(){
   this.setState({modalIsOpen: false});
  }

  handleLogin(e){
   e.preventDefault();
   this.setState({formType: "login"});
   this.setState({modalIsOpen: true});
   this.clearErrors();
  }

   handleSignUp(e){
     e.preventDefault();
     this.setState({formType: "signup"});
     this.setState({modalIsOpen: true});
     this.clearErrors();
   }

  handleLink(e) {
    e.preventDefault();
    if (this.state.formType === 'login') {
      this.setState({formType: "signup"});
      this.clearErrors();
    } else {
      this.setState({formType: "login"});
      this.clearErrors();
    }
  }

  navLink() {
  	if (this.state.formType === "login") {
  		return <h3>Need an account? <button className="link"  onClick={this.handleLink} >Sign up!</button></h3>;
  	} else {
  		return <h3>Already have an account? <button className="link" onClick={this.handleLink} >Sign in!</button></h3>;
  	}
  }

  clearErrors(){
    this.props.clearErrors();
  }

  renderButtons(){
    if (this.props.currentUser) {
      return this.personalGreeting(this.props.currentUser, this.props.logout);
    } else {
      return this.sessionLinks();
    }
  }

  overlay(){
    if (this.state.modalIsOpen === true) {
      return (<div className="overlay2"></div>);
    } else {
      return (<div></div>);
    }
  }

  render (){
    return (
      <div>
        {this.renderButtons()}
        {this.overlay()}
        <Modal isOpen={this.state.modalIsOpen} contentLabel="Modal"
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          className="modal"
          overlayClassName="overlay"
          >

          <SessionFormContainer formType={this.state.formType} closeModal={this.closeModal} />
          {this.navLink()}
        </Modal>
      </div>
    );
  }
}

export default Greeting;
