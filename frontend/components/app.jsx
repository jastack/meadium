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
      <GreetingContainer />
    </header>

    <header className="topics">
      <nav className="sub-topics">
        <ul>
          <li>Home</li>
          <li>Top Stories</li>
          <li>Editor's picks</li>
          <li>Technology</li>
          <li>Humans</li>
          <li>Culture</li>
          <li>Business</li>
          <li>Bookmarks</li>
        </ul>
      </nav>
    </header>

    { children }
  </div>
);

export default App;
