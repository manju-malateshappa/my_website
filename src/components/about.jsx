import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (

        <section id="about">  
        <div className="row section-intro">
            <div className="col-twelve">
            <h5>About</h5>
            <h1>Let me introduce myself.</h1>
            <div className="intro-info">
                <img src="images/profile-pic.jpg" alt="Profile" />
                <p className="lead">I am a graduate student at Simon Fraser University pursuing 
                my 2nd term. I'm passionate for Data Science and competent in Deep Neural Networks. Developing custom big data solutions is my thing.</p>
            </div>   			
            </div>   		
        </div> {/* /section-intro */}
        <div className="row about-content">
            <div className="col-six tab-full">
            <h3>Profile</h3>
            <p>Data Scientist with more than 1 year of 
                experience executing data-driven 
                solutions to increase efficiency, 
                accuracy, and utility of internal 
                data processing.Experienced at 
                creating data science solutions 
                and analyzing data patterns 
                to deliver insights and implement 
                action-oriented solutions to complex 
                business problems. Looking to use my 
                Bachelor of Computer Science and 
                Master of Science in Big Data to 
                manage statistical machine learning 
                and data-related solutions at 
                your organization.
            </p>
            <ul className="info-list">
                <li>
                <strong>Full name:</strong>
                <span>Manju Malateshappa</span>
                </li>
                <li>
                <strong>Current status:</strong>
                <span>Graduate student at Simon Fraser University</span>
                </li>
                <li>
                <strong>Interested roles:</strong>
                <span>Data Scientist, Big Data Developer, Data Engineer, Software Engineer</span>
                </li>
                <li>
                <strong>Website:</strong>
                <span>https://manjum2050.github.io/</span>
                </li>
                <li>
                <strong>Email:</strong>
                <span>manjum@sfu.com</span>
                </li>
            </ul> {/* /info-list */}
            </div>
            <div className="col-six tab-full">
            <h3>Skills</h3>
            <p>My previous work and projects are predominantly in Javascript and Python.  
                I am skilled in embedded UI development using HTML5, CSS3, JavaScript and React.js.</p>
            <ul className="disc">
                <li><strong>Python</strong>
                <ul>
                    <li>Panda, Numpy, and Matplotlib</li>
                    <li>Scikit-learn and OpenCV</li>
                </ul>
                </li>
                <li><strong>Big Data tools</strong>
                <ul>
                    <li>PySpark</li>
                    <li>Hadoop</li>
                </ul>
                </li>
                <li><strong>Databases</strong>
                <ul>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                </ul>
                </li>
                <li><strong>Tools</strong>
                <ul>
                    <li>Git SCM</li>
                    <li>Jira and Confluence</li>
                    <li>Tableau</li>
                    <li>AWS</li>
                </ul>
                </li>
                <li><strong>Web Development</strong>
                <ul>
                    <li>JavaScript,HTML5, CSS3</li>
                    <li>React.js,Redux, Node.js</li>
                </ul>
                </li>
            </ul>		
            </div>
        </div>
        <div className="row button-section">
            <div className="col-twelve">
            <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
            <a href="Manju_Malateshappa_resume.pdf" title="Download Resume" className="button button-primary" target="_blank">Download CV</a>
            </div>   		
        </div>
        </section>

    )
  }
}