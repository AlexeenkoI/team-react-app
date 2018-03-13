import React, { Component } from 'react';
import Logo from '../components/navlogo'
import NavBttn from '../components/navbttn';
import MailNote from '../components/mailnote'
import ServerNote from '../components/servernote'
import LogUser from '../components/loguser';


export default class Header extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.isDisplayMenu.bind(this);
        //console.log("header");
        //console.log(this.props.hideNotifications);
    }
    
    isDisplayMenu=(trigger)=>{
        this.props.isShowMenu(trigger);
    }
    render(){
        return(
            <header className="header fixed-top clearfix ">
            <Logo isDisplayMenu={this.isDisplayMenu} display={this.props.show}/>
            <div className="nav notify-row" id="top_menu">
                <ul className="nav top-menu">
                    <NavBttn
                    hideTasks={this.props.hideNotifications}
                    />
                    <MailNote/>
                    <ServerNote/>
                </ul>
            </div>
            <div className="top-nav clearfix">
                <ul className="nav pull-right top-menu">
                    <LogUser
                    logout={this.props.isLogged}
                    />
                </ul>
            </div>
            </header>
        );
    }
}