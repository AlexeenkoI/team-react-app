import React, { Component } from 'react';
import MenuItem from '../components/menuitem';


export default class Menu extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            isShow:this.props.showMenu
        }
    }
    
    render(){
        let className = "nav-collapse";
        if(!this.props.showMenu){
            className +=" hide-left-bar";
        }
        return(
            <div id="sidebar" className={className}>
                <div className="leftside-navigation">
                    <ul className="sidebar-menu" id="nav-accordion">
                    <MenuItem/>
                    </ul>
                </div>
            </div>
        )
    }
}