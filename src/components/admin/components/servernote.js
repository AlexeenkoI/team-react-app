import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/actions';
import {actionServerNote} from  '../helpers/actionstrings';

class ServerNote extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log('imitate-fetch');
        this.props.initFetch();
    }
    render(){
        const srvPopOver = this.props.state.isFetching ? 
        ( <Popover id="srv"><div>Загружаю...</div></Popover>) :(
            <Popover id="srv" title="Новые уведомления">
                    {this.props.state.notes.map(note=>(
                        <div key={note.id} className={"clearfix alert alert-"+note.type}>
                            <span className="alert-icon"><i className="fa fa-bolt"></i></span>
                            <div className="noti-info">
                                <a>{note.message}</a>
                            </div>
                        </div>
                    ))}
            </Popover>
        );
        return(
            <li className="dropdown">
            <OverlayTrigger
                trigger="click"
                rootClose
                placement="bottom"
                overlay={srvPopOver}
                onClick={()=>{this.props.shown()}}
            >
                <a data-toggle="dropdown" className="dropdown-toggle">
                    <i className="fa fa-bell-o"></i>
                    {this.props.state.count>0 ? <span className="badge bg-warning">{this.props.state.count}</span>:''}
                </a>
            </OverlayTrigger>
        </li>
        )
    }
}
const mapStateToProps = (state)=>{
    return{state:state.serverNotes}
}
const mapDispatchToProps = (dispatch) =>{
    return{
        initFetch : ()=>{dispatch(actions.fetchServerNotes())},
        shown:()=>{dispatch({
            type:actionServerNote.SHOWN
        })}
    }

}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ServerNote));