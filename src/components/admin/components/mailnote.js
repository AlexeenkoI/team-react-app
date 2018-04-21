import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/actions';
import {actionServerNote, actionMailNote} from  '../helpers/actionstrings';

class MailNote extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.initFetch();
    }
    render(){
        const mailPopOver = this.props.state.isFetching ? 
        (<Popover id="mail"><div>Загружаю...</div></Popover>) : (
            <Popover id="mail" title="1 пропущенное Сообщение">
                {this.props.state.messages.map(msg=>(
                    <div key={msg.id} className="msg-row">
                    {/* <span className="photo"><img alt="avatar" src="images/3.png"/></span> */}
                        <span className="subject">
                            <span className="from">{msg.author}</span>
                            <span className="time">{msg.date}</span>
                        </span>
                        <span className="message">
                                {msg.message}
                        </span>
                </div>
                ))}
            </Popover>
        )

        return(
            <li className="dropdown">
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom"
                    onClick={()=>{this.props.shown()}}
                    overlay={mailPopOver}>
                        <a data-toggle="dropdown" className="dropdown-toggle">
                            <i className="fa fa-envelope-o"></i>
                            {this.props.state.count>0 ? <span className="badge bg-important">{this.props.state.count}</span>:''}
                        </a>
                </OverlayTrigger>
            </li>
        )
    }
}

const mapStateToProps = (state)=>{
    return{state:state.mailNotes}
}
const mapDispatchToProps = (dispatch) =>{
    return{
        initFetch : ()=>{dispatch(actions.fetchMailNotes())},
        shown:()=>{dispatch({
            type:actionMailNote.SHOWN
        })}
    }

}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MailNote));