import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <header className="main-nav">
      <nav className="left-nav">
        <ul>
          <li>Meadium</li>
        </ul>
      </nav>
      <nav className="right-nav">
        <ul className="login">
          <li><GreetingContainer /></li>
          <li className="search-modal"><i className="fa fa-search"></i></li>
        </ul>
      </nav>
    </header>
    <header className="topics">
      <nav className="sub-topics">
        <ul>
          <li>Home</li>
          <li>Top Stories</li>
          <li>Politics</li>
        </ul>
      </nav>

    </header>
    { children }
  </div>
);

export default App;
