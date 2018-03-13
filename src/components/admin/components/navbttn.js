import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

export default class NavBttn extends Component{
    constructor(props){
        super(props);
        this.state = {
            showTasks : false
        }
        console.log(this.state);
    }
    
    render(){
        const taskPopOver = (
            <Popover id="tasks" title="1 пропущенное задание">
                    <a className="task-item">
                        <div className="task-info clearfix">
                            <div className="desc pull-left">
                                <h5>Закончить верстку</h5>
                                <p>75% , Дедлайн  18 Февраля</p>
                            </div>
                                    <span className="notification-pie-chart pull-right" data-percent="45">
                            <span className="percent"></span>
                            </span>
                        </div>
                    </a>
                
                    {/* <a href="#" className="task-item">See All Tasks</a>      */}
            </Popover>
        )

        return(
        <li className="dropdown">
            <OverlayTrigger
                trigger="click"
                rootClose
                placement="bottom"
                overlay={taskPopOver}
            >
            <a data-toggle="dropdown" className="dropdown-toggle">
                <i className="fa fa-tasks"></i>
                <span className="badge bg-success">1</span>
            </a>
            </OverlayTrigger>
            {/* <OverlayTrigger
                trigger="click"
                rootClose
                placement="bottom"
                overlay={mailPopOver}
            >
              <a data-toggle="dropdown" className="dropdown-toggle">
                <i className="fa fa-envelope-o"></i>
                <span className="badge bg-success">1</span>
            </a>
            </OverlayTrigger> */}
        </li>
        )
    }
}