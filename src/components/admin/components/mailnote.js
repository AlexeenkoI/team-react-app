import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

export default class MailNote extends Component{
    render(){
        const mailPopOver = (
            <Popover id="mail" title="1 пропущенное Сообщение">
                <div className="msg-row">
                {/* <span className="photo"><img alt="avatar" src="images/3.png"/></span> */}
                                <span className="subject">
                                <span className="from">Jonathan Smith</span>
                                <span className="time">Just now</span>
                                </span>
                                <span className="message">
                                    Hello, this is an example msg.adasdasdasdasd
                                </span>
                </div>
                <div className="msg-row">
                {/* <span className="photo"><img alt="avatar" src="images/3.png"/></span> */}
                                <span className="subject">
                                <span className="from">Jonathan Smith</span>
                                <span className="time">Just now</span>
                                </span>
                                <span className="message">
                                    Hello, this is an example msg.adasdasdasdasd
                                </span>
                </div>
            </Popover>
        )

        return(
            <li className="dropdown">
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom"
                    overlay={mailPopOver}>
                        <a data-toggle="dropdown" className="dropdown-toggle">
                            <i className="fa fa-envelope-o"></i>
                            <span className="badge bg-important">2</span>
                        </a>
                </OverlayTrigger>
            </li>
        )
    }
}