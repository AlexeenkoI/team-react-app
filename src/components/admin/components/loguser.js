import React, { Component } from 'react';

import img from '../../../styles/admin/images/2.png';


export default class LogUser extends Component {
    render(){
        return(
        <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <img alt="" src={img}/>
                <span className="username">John Doe</span>
                <b className="caret"></b>
            </a>
            <ul className="dropdown-menu extended logout">
                <li><a href="#"><i className=" fa fa-suitcase"></i>Profile</a></li>
                <li><a href="#"><i className="fa fa-cog"></i> Settings</a></li>
                <li><a href="login.html"><i className="fa fa-key"></i> Log Out</a></li>
            </ul>
        </li>
        )
    }
}