import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header>   	
            <div className="row">
                <div className="top-bar">
                    <a className="menu-toggle" hre f="#"><span>Menu</span></a>
                        <div className="logo">
                    <a href="index.html">Menu</a>
                </div>		      
                    <nav id="main-nav-wrap">
                        <ul className="main-navigation">
                            <li className="current"><a className="smoothscroll" href="#intro" title>Home</a></li>
                            <li><a className="smoothscroll" href="#about" title>About</a></li>
                            <li><a className="smoothscroll" href="#resume" title>Resume</a></li>
                            <li><a className="smoothscroll" href="#services" title>Projects</a></li>
                            <li><a className="smoothscroll" href="#contact" title>Contact</a></li>				
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
