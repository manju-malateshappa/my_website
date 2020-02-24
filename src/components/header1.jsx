import React, { Component } from 'react'

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false  
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        console.log("Toggle Menu okay")
        this.setState({visible: !this.state.visible})
        console.log(" state is === ", this.state.visible)
    }

    showOrHideMenu() {
        this.toggleMenu()
        if (this.state.visible) {
            // var toggleButton = $('.menu-toggle'),
            var toggleButton = document.getElementsByClassName("menu-toggle'"),
            nav = document.getElementsByClassName("menu-navigation");
            // nav = $('.main-navigation');
            toggleButton.toggleClass('is-clicked');
            nav.slideToggle();
        } else {
            console.log(" === you are in else part == ")
        }
    }


//     render() {
//         return (
//             <div>
//                 <button onClick={this.showOrHideMenu}></button>
//                 {
//                 this.state.visible && 
//                     <ul className="main-navigation">
//                     <li className="current"><a href="#introduction" data-nav-section="Introduction">Home</a></li>
//                     <li><a href="#about" data-nav-section="about">About</a></li>
//                     {/* <li className="current"><a className="smoothscroll" href="#intro" title>Home</a></li> */}
//                     <li><a className="smoothscroll" href="#about" data-nav-section="about">About</a></li>
//                     <li><a className="smoothscroll" href="#resume" data-nav-section="resume">Resume</a></li>
//                     <li><a className="smoothscroll" href="#services" data-nav-section="services">Projects</a></li>
//                     <li><a className="smoothscroll" href="#contact" data-nav-section="contact">Contact</a></li>				
//                     </ul>
                
//                 }
//             </div>
//         );
//     }
// }



    render() {
    return (
        <header>   	
            <div className="row">
                <div className="top-bar">
                    <button className="menu-toggle" onClick={this.showOrHideMenu} ></button>
                    <a className="menu-toggle" href="#"><span>Menu</span></a>
                        <div className="logo">
                    <a href="index.html">Menu</a>
                </div>		      
                    <nav id="main-nav-wrap">
                        <ul className="main-navigation">
                            <li className="current"><a href="#introduction" data-nav-section="Introduction">Home</a></li>
                            <li><a href="#about" data-nav-section="about">About</a></li>
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
