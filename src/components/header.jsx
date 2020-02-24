import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { isOpen: false };
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu = e => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <header>
        <div className="row">
          <div className="top-bar">
            <div
              onClick={this.openMenu}
              className={`menu-toggle ${this.state.isOpen ? "is-clicked" : ""}`}
            >
              <span>Menu</span>
            </div>
            <div className="logo">
              <a href="index.html">Menu</a>
            </div>
            {this.state.isOpen && (
              <nav onClick={this.openMenu} id="main-nav-wrap">
                <ul onClick={this.openMenu} className="main-navigation">
                  <li className="current">
                    <a className="smoothscroll" href="#intro" title>
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#about" title>
                      About
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#resume" title>
                      Resume
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#services" title>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#contact" title>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>
    );
  }
}

// import React, { Component } from 'react'

// export default class Header extends Component {
//   render() {
//     return (

//     )
//   }
// }
