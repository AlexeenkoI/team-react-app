import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

import img from '../../../styles/admin/images/2.png';


export default class LogUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            showTasks : false
        }
    }
    onBttnClick=(e)=>{
        this.setState(Prevstate=>({
            showTasks : !Prevstate.showTasks
        }))
 
    }
    render(){
        let className = "dropdown";
        if(this.state.showTasks){
            className += ' open';
        }
        const logOverlay = (
            <Popover bgClass="" >
            <ul className="logout-item">
                <li><a href="#"><i className=" fa fa-suitcase"></i>Profile</a></li>
                <li><a href="#"><i className="fa fa-cog"></i> Settings</a></li>
                <li><a href="login.html"><i className="fa fa-key"></i> Log Out</a></li>
            </ul>
            </Popover>
        )
        return(
        <li className="dropdown" onClick={(e)=>this.onBttnClick(e)}>
            <OverlayTrigger
            trigger="click"
            rootClose
            placement="bottom"
            overlay={logOverlay}
            >
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <img alt="" src={img}/>
                <span className="username">Игорь</span>
                <b className="caret"></b>
            </a>
            </OverlayTrigger>
            {/* <ul className="dropdown-menu extended logout">
                <li><a href="#"><i className=" fa fa-suitcase"></i>Profile</a></li>
                <li><a href="#"><i className="fa fa-cog"></i> Settings</a></li>
                <li><a href="login.html"><i className="fa fa-key"></i> Log Out</a></li>
            </ul> */}
        </li>
        )
    }
}