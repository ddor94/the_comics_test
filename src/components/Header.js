import React from 'react';
import TopSearch from './TopSearch';

function Header({ updateContent }) {
  return(
    <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item has-text-white" href="/">
          <b>MARVEL HEROES</b>
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <TopSearch updateContent={updateContent} />
        </div>
      </div>
    </nav>
  )
}

export default Header;
