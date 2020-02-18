import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (

    <section id="resume" className="grey-section">
        <div className="row section-intro">
            <div className="col-twelve">
            <h5>Resume</h5>
            <h1>More of my credentials.</h1>
            <p className="lead"> I completed my under-graduation with distinction 
                and started as a Software Engineer at Nagra Kudelski group. 
                Later, my inquisitiveness for finding patterns and crunching 
                numbers made me shift my career to Data Science. So, I enrolled 
                in Masters in Big Data program at Simon Fraser University to 
                enhance my skills further.
            </p>
            </div>   		
        </div> {/* /section-intro*/} 
        <div className="row resume-timeline">
            <div className="col-twelve resume-header">
            <h2>Work Experience</h2>
            </div> {/* /resume-header */}
            <div className="col-twelve">
            <div className="timeline-wrap">
                <div className="timeline-block">
                <div className="timeline-ico">
                    <i className="fa fa-briefcase" />
                </div>
                <div className="timeline-header">
                    <h3>Teaching Assistant</h3>
                    <p>September 2019 - December 2019</p>
                </div>
                <div className="timeline-content">
                    <h4>Simon Fraser University</h4>
                    <ul className="disc">
                    <li>Worked as a TA for the course CMPT120 D400 Introduction to Computing Science and Programming I (Python)</li>
                    <li>Primary tasks included teaching the students in the labs, student consultation, grading and invigilation of exams.</li>
                    </ul>
                </div>
                </div> {/* /timeline-block */}
                <div className="timeline-block">
                <div className="timeline-ico">
                    <i className="fa fa-briefcase" />
                </div>
                <div className="timeline-header">
                    <h3>Software Engineer</h3>
                    <p>January 2013 - August 2019</p>
                </div>
                <div className="timeline-content">
                    <h4>Nagravision India Private ltd.</h4>
                    <ul className="disc">
                    <li>Designed And Developed Applications (Ios/Android/Website/Stb) In Javascript, Reactjs And Redux.</li>
                    <li>Performed Unit Testing In Python And Automated Testing Using Selenium For Web Applications.</li>
                    <li>Provided Solutions For Various Performance Issues Involving Boot-Up, Ui Rendering And Navigation Between The Screens.</li>
                    <li>Interacted With Clients/Stakeholders And Gathered Business Requirements.</li>
                    <li>Conducted Feasibility Study, Proposed Solutions, Wrote Technical Specifications.</li>
                    </ul>
                </div>
                </div> {/* /timeline-block */}
            </div> {/* /timeline-wrap */}   			
            </div> {/* /col-twelve */}
        </div> {/* /resume-timeline */}
        <div className="row resume-timeline">
            <div className="col-twelve resume-header">
            <h2>Education</h2>
            </div> {/* /resume-header */}
            <div className="col-twelve">
            <div className="timeline-wrap">
                <div className="timeline-block">
                <div className="timeline-ico">
                    <i className="fa fa-graduation-cap" />
                </div>
                <div className="timeline-header">
                    <h3>Master Degree</h3>
                    <p>September 2019 - Present</p>
                </div>
                <div className="timeline-content">
                    <h4>Simon Fraser University</h4>
                    <ul className="disc">
                    <li>Area - Computing Science (Big Data) </li>
                    <li>CGPA - 3.36 </li>
                    <li>Courses - Algorthims for Big Data, Machine Learning, Programming for Big Data, and Systems for Big Data.</li>
                    </ul>
                </div>
                </div> {/* /timeline-block */}
                <div className="timeline-block">
                <div className="timeline-ico">
                    <i className="fa fa-graduation-cap" />
                </div>
                <div className="timeline-header">
                    <h3>Bachelor Degree</h3>
                    <p>Septmber 2009 - June 2013</p>
                </div>
                <div className="timeline-content">
                    <h4>University Visvesvaraya College Of Engineering</h4>
                    <ul className="disc">
                    <li>Area - Computer Science and Engineering </li>
                    <li>CGPA - 3.5</li>
                    <li>Courses - Data Mining, Operating systems, Data Structures, Desing and Analysis of Algorithms, Compilers, and Operating Systems.</li>
                    </ul>
                </div>
                </div> {/* /timeline-block */}
            </div> {/* /timeline-wrap */}   			
            </div> {/* /col-twelve */}
        </div> {/* /resume-timeline */}
    </section>


    )
  }
}