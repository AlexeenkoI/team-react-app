import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/actions';
import {actionTaskNote} from  '../helpers/actionstrings';

class NavBttn extends Component{
    constructor(props){
        super(props);
        this.state = {
            showTasks : false
        }
        console.log(this.props);
    }
    componentWillMount(){
        this.props.initFetch();
    }
    
    render(){
        const taskPopOver = this.props.state.isFetching? (<Popover id="tasks"><div>Загружаю...</div></Popover>) : (
            <Popover id="tasks" title="Задачи">
            {this.props.state.tasks.map(task=>(
                    <a key={task.id} className="task-item">
                    <div className="task-info clearfix">
                        <div className="desc pull-left">
                            <h5>{task.task}</h5>
                            <p>{task.text}</p>
                        </div>
                        <span className="notification-pie-chart pull-right" data-percent="45">
                        <span className="percent"></span>
                        </span>
                    </div>
                </a>
            ))}

                
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
                onClick={()=>{this.props.shown()}}
            >
            <a data-toggle="dropdown" className="dropdown-toggle">
                <i className="fa fa-tasks"></i>
                {this.props.state.count? <span className="badge bg-success">{this.props.state.count}</span>:''}
            </a>
            </OverlayTrigger>
        </li>
        )
    }
}
const mapStateToProps = (state)=>{
    return{state:state.taskNotes}
}
const mapDispatchToProps = (dispatch) =>{
    return{
        initFetch : ()=>{dispatch(actions.fetchTaskNotes())},
        shown:()=>{dispatch({
            type:actionTaskNote.SHOWN
        })}
    }

}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBttn));