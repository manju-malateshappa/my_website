import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header>   	
            <div className="row">
                <div className="top-bar">
                    {/* <button className="menu-toggle" onClick={index.html} >Menu</button> */}
                    <a className="menu-toggle" href="#">
                        <span>Menu</span>
                    </a>
                    <div className="logo">
                    <a href="index.html">Menu</a>
                </div>		      
                    <nav id="main-nav-wrap">
                        <ul className="main-navigation">
                            <li className="current"><a href="#introduction" data-nav-section="Introduction">Home</a></li>
                            <li><a href="#about" data-nav-section="about">About</a></li>
                            {/* <li className="current"><a className="smoothscroll" href="#intro" title>Home</a></li> */}
                            <li><a className="smoothscroll" href="#about" data-nav-section="about">About</a></li>
                            <li><a className="smoothscroll" href="#resume" data-nav-section="resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#services" data-nav-section="services">Projects</a></li>
                            <li><a className="smoothscroll" href="#contact" data-nav-section="contact">Contact</a></li>				
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
  }
}




// import React, { Component } from 'react'

// export default class Header extends Component {
//   render() {
//     return (

//     )
//   }
// }
