
import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (

        <section id="intro">   
            <div className="intro-overlay" />	
            <div className="intro-content">
                <div className="row">
                    <div className="col-twelve">
                        <h5>Hello, World.</h5>
                        <h1>I'm Manju Malateshappa.</h1>
                        <p className="intro-position">
                        <span>Data Scientist</span>
                        <span>Big Data Developer</span> 
                        </p>
                        <a className="button stroke smoothscroll" href="#about" data-nav-section="about">More About Me</a>
                    </div>  
                </div>   		 		
            </div> {/* /intro-content */} 
            <ul className="footer-social">
                <li><a href="https://www.linkedin.com/in/manju-malateshappa/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/manjum2050" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" /></a></li>
            </ul>
        </section>

    )
  }
}
