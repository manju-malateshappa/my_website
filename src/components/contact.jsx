import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <section id="contact">
            <div className="row section-intro">
                <div className="col-twelve">
                <h5>Contact</h5>
                <h1>I'd Love To Hear From You.</h1>
                <p className="lead">You can reach me through below mentioned mails.</p>
                </div> 
            </div> {/* /section-intro */}
            <div id="contact" className="row contact-info">
                <div className="icon">
                <i className="icon-mail" />
                </div>
                <h5>Email Me At</h5>
                <a href="mailto:manjum@sfu.ca?
                        subject=subject text">
                manjum@sfu.ca
                </a> <br />
                or<br />
                <a href="mailto:mmanju2@gmail.com?
                        subject=subject text">
                mmanju2@gmail.com
                </a>
            </div>
        </section>

    )
  }
}