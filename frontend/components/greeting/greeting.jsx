import React from 'react';
import { Link } from 'react-router';


const sessionLinks = () => (
  <nav className="right-nav">
    <ul>
      <li><Link to="/login">Sign in</Link></li>
      <li>/</li>
      <li><Link to="/signup">Sign up</Link></li>
      <li className="search-modal"><i className="fa fa-search"></i></li>
    </ul>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<nav className="right-nav">
    <ul>
      <li>{currentUser.username}</li>
      <li><button className="header-button" onClick={logout}>Log Out</button></li>
      <li className="search-modal"><i className="fa fa-search"></i></li>
    </ul>
	</nav>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
