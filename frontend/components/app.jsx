import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Example from './modal';

const App = ({ children }) => (
  <div>
    <header className="main-nav">
      <nav className="left-nav">
        <ul>
          <li>Meadium</li>
        </ul>
      </nav>
      <GreetingContainer />
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
