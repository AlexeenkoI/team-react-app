import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

export default class ServerNote extends Component{
    render(){
        const srvPopOver=(
            <Popover id="srv" title="3 уведомления">
                    <div className="alert alert-info clearfix">
                        <span className="alert-icon"><i className="fa fa-bolt"></i></span>
                        <div className="noti-info">
                            <a href="#"> В процессе.</a>
                        </div>
                    </div>

                    <div className="alert alert-danger clearfix">
                        <span className="alert-icon"><i className="fa fa-bolt"></i></span>
                        <div className="noti-info">
                            <a href="#"> Завершено с ошибкой</a>
                        </div>
                    </div>

                    <div className="alert alert-success clearfix">
                        <span className="alert-icon"><i className="fa fa-bolt"></i></span>
                        <div className="noti-info">
                            <a href="#"> Успешная операция</a>
                        </div>
                    </div>
            </Popover>
        );
        return(
            <li className="dropdown">
            <OverlayTrigger
                trigger="click"
                rootClose
                placement="bottom"
                overlay={srvPopOver}>
                    <a data-toggle="dropdown" className="dropdown-toggle">
                        <i className="fa fa-bell-o"></i>
                        <span className="badge bg-warning">3</span>
                    </a>
            </OverlayTrigger>
        </li>
        )
    }
}