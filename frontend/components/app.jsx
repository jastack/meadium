import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <header className="main-nav">
      <nav className="left-nav">
        <ul>
          <li><img src="http://res.cloudinary.com/dopv3qpj7/image/upload/v1489687547/nature_gq8c8x.svg"></img></li>
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
