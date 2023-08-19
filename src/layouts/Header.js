import React, { Component } from "react";

class Header extends Component {
  state = {};

  render() {
    return (
      <header className="header p-3 mb-5 shadow font-monospace" id="header">
        <div className="container">
          <nav className="nav d-flex align-items-center justify-content-between">
            <a
              href="#!"
              className="nav__logo text-dark text-decoration-none fs-3"
            >
              Create movie app
            </a>
            <ul className="nav__list d-flex gap-4">
              <li className="nav__item">
                <a href="#!" className="nav__link text-decoration-none fs-5">
                  Movies
                </a>
              </li>
              <li className="nav__item">
                <a href="#!" className="nav__link text-decoration-none fs-5">
                  Series
                </a>
              </li>
              <li className="nav__item">
                <a href="#!" className="nav__link text-decoration-none fs-5">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
