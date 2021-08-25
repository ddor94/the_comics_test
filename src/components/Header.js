import React from 'react';

function Header() {
  return(
    <nav class="navbar has-background-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item has-text-white" href="/">
          <b>MARVEL HEROES</b>
        </a>

        <a role="button" class="navbar-burger has-text-white" aria-label="menu" aria-expanded="false" data-target="headerMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="headerMenu" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Search..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;
