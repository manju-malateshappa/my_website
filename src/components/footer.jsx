import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (

        <footer>
            <div className="row">
                <div className="col-six tab-full pull-right social">
                <ul className="footer-social">
                    <li><a href="https://www.linkedin.com/in/manju-malateshappa/" target="_blank"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="https://github.com/manjum2050" target="_blank"><i className="fa fa-github" /></a></li>
                </ul> 
                </div>
                <div className="col-six tab-full">
                <div className="copyright">
                    <span>© Copyright Kards 2016.</span> 
                    <span>Template from <a href="http://www.styleshout.com/">styleshout</a></span>	         	
                </div>		                  
                </div>
                <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up" /></a>
                </div>
            </div> {/* /row */}	
        </footer>

    )
  }
}