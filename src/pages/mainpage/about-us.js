
import React, { Component } from 'react';

export default class AboutUs extends Component {
    render(){
        return(
    <div id="tf-about">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="img/02.png" className="img-responsive"/>
                </div>
                <div className="col-md-6">
                    <div className="about-text">
                        <div className="section-title">
                            <h4>About us</h4>
                            <h2>Some words <strong>about us</strong></h2>
                            <hr/>
                            <div className="clearfix"></div>
                        </div>
                        <p className="intro">We love building and rebuilding brands through our  specific skills. Using colour, fonts, and illustration, we brand companies in a way they will never forget.</p>
                        <ul className="about-list">
                            <li>
                                <span className="fa fa-dot-circle-o"></span>
                                <strong>Mission</strong> - <em>We deliver uniqueness and quality</em>
                            </li>
                            <li>
                                <span className="fa fa-dot-circle-o"></span>
                                <strong>Skills</strong> - <em>Delivering fast and excellent results</em>
                            </li>
                            <li>
                                <span className="fa fa-dot-circle-o"></span>
                                <strong>Clients</strong> - <em>Satisfied clients thanks to our experience</em>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

        );
    }
}