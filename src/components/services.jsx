import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    return (

        <section id="services">
            <div className="overlay" />
            <div className="row section-intro">
                <div className="col-twelve">
                <h5>Projects</h5>
                <h1>My recent works</h1>
                <p className="lead">Below are some of my recent projects which I worked on, as part of my course work at SFU. Please click on the respective projects for Github page and more info.</p>
                </div>   		
            </div> {/* /section-intro */}
            <div className="row services-content">
                <div id="owl-slider" className="owl-carousel services-list">
                <a href="https://github.com/manjum2050/Airbnb-Big-Data-Project.git" target="_blank">
                    <div className="service">	
                    <span className="icon"><i className="fa fa-shield" /></span>            
                    <div className="service-content">	
                        <h3>Analysis of Airbnb data to Identify the criterion of becoming superhost</h3>
                        <p className="desc">Increasing the Bookings for Host Listings on Airbnb Website 
                        using |Big Data Technologies and Machine Learning Pipelines|.
                        </p>
                    </div>          
                    </div></a> {/* /service */}
                </div> {/* /services-list */}
            </div> {/* /services-content */}
        </section>

    )
  }
}