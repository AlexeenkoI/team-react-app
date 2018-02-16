import React, { Component } from 'react';


export default class NavBttn extends Component{
    render(){
        return(
            <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="fa fa-tasks"></i>
                <span className="badge bg-success">8</span>
            </a>
            
        </li>
        )
    }
}