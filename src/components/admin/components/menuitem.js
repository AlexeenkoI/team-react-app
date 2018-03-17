import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';


export default class MenuItem extends Component{
    constructor(props){
        super(props);
        this.state={
            active:false,
            open:false,
        }
    }

    render(){
        const sub = this.props.sub;
        if(this.props.sub.length>0){
            return(
            <div>
                <li>
                    <a className={this.state.active? 'active':''} onClick={() => this.setState({ open: !this.state.open, active:!this.state.active })}>
                        <i className="fa fa-dashboard"></i>
                        <span>{this.props.name}</span>
                        <span className="dcjq-icon"></span>
                    </a> 
                    <Collapse in={this.state.open} appear={true} timeout={300}>
                        <div>
                            <ul className="subling">
                                {sub.map(oneSub=>(
                                    <li key={oneSub.id}><NavLink to={oneSub.link?oneSub.link:'/admin'} activeClassName="active">{oneSub.name}</NavLink></li>
                                ))} 
                            </ul>
                        </div>
                    </Collapse>
                </li>
            </div>
            )
        }else{
            return(
                <div>
                    <li>
                        <Link to={this.props.link ? this.props.link : '/admin'} >
                            <i className="fa fa-dashboard"></i>
                            <span>{this.props.name}</span>
                        </Link>
                        {/* <a className="" onClick={() => this.setState({ open: !this.state.open })}>
                            <i className="fa fa-dashboard"></i>
                            <span>{this.props.name}</span>
                        </a>  */}
                    </li>
                </div>
            )
        }
    }
}
