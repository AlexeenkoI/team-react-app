import React, { Component } from 'react';

class NavBar extends Component{
    constructor(props){
        super(props);
    };

    render(){
        
        return( <nav id="tf-menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">Spirit8</a>
          </div>
  
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#tf-home" className="page-scroll">Home</a></li>
              <li><a href="#tf-about" className="page-scroll">About</a></li>
              <li><a href="#tf-team" className="page-scroll">Team</a></li>
              <li><a href="#tf-services" className="page-scroll">Services</a></li>
              <li><a href="#tf-works" className="page-scroll">Portfolio</a></li>
              <li><a href="#tf-testimonials" className="page-scroll">Testimonials</a></li>
              <li><a href="#tf-contact" className="page-scroll">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav> );
    }
}

export default NavBar;