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
        const popoverClick = (
            <Popover id="tasks" title="1 пропущенное задание">
                    <a  className="task-item">
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
                
                    <a href="#" className="task-item">See All Tasks</a>     
            </Popover>
        )
        return(
        <li className="dropdown">
            <OverlayTrigger
                trigger="click"
                rootClose
                placement="bottom"
                overlay={popoverClick}
            >
            <a data-toggle="dropdown" className="dropdown-toggle">
                <i className="fa fa-tasks"></i>
                <span className="badge bg-success">1</span>
            </a>
            </OverlayTrigger>
            {/* <ul className="dropdown-menu extended tasks-bar">
                <li>
                    <p className="">у тебя 1 пропущенное задание</p>
                </li>
                <li>
                    <a href="#">
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
                </li>
                <li className="external">
                    <a href="#">See All Tasks</a>
                </li>
            </ul> */}
        </li>
        )
    }
}