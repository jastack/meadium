import React from 'react';
import GreetingContainer from './greeting/greeting_container';

import { Link } from 'react-router';


const App = ({ children }) => (
  <div>
    <header className="main-nav">
      <nav className="left-nav">
        <ul>

          <li><Link to="/index"><img src="http://res.cloudinary.com/dopv3qpj7/image/upload/v1489687547/nature_gq8c8x.svg"></img></Link></li>
          <li><Link to="/index">Meadium</Link></li>
        </ul>
      </nav>
      <GreetingContainer />
    </header>

    <header className="topics">
      <nav className="sub-topics">
        <ul>
          <li><Link to="/index">Home</Link></li>
          <li><Link to="topics/1/">Top Stories</Link></li>
          <li><Link to="topics/2/">Editor's Picks</Link></li>
          <li><Link to="topics/3/">Technology</Link></li>
          <li><Link to="topics/4/">Humans</Link></li>
          <li><Link to="topics/5/">Culture</Link></li>
          <li><Link to="topics/6/">Business</Link></li>
        </ul>
      </nav>
    </header>
    { children }
  </div>
);

export default App;
