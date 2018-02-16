import React, { Component } from 'react';

export default class Logo extends Component{
    constructor(props){
        super(props);
        this.onClickIcon.bind(this);
        this.state={
            display:this.props.display
        }

        this.onClickIcon = this.onClickIcon.bind(this);
    }
    onClickIcon=(e)=>{
        e.preventDefault();
       this.props.isDisplayMenu(!this.props.display);
    }
    render(){
    return(
    <div className="brand">
        <a href="index.html" className="logo">
        TEAM X
        </a>
        <div className="sidebar-toggle-box" onClick={(e)=> this.onClickIcon(e)}>
            <div className="fa fa-bars"></div>
        </div>
    </div>
    )
    }
}