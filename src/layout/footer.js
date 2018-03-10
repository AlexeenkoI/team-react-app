import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Footer extends Component{
    render(){
        return(
        <nav id="footer">
            <div className="container">
                <div className="pull-left fnav">
                    <p>Дизайн и разработка <a >Team X</a></p>
                </div>
                <div className="pull-right fnav">
                    <ul className="footer-social">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}