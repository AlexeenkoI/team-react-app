import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './containers/header';
import Menu from './containers/menu';
import DashBoard from './containers/dashboard';
import Login from './containers/login';
import MainSlider from './containers/mainslider';

import '../../styles/admin/styles/style.css';
import '../../styles/admin/styles/style-responsive.css';

export default class MainAdmin extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogged:false,
            bottomMenu:true
        }
        this.props= {
            closeInfos : false
        }
        console.log("main");
        console.log(this.props);
    }

    componentDidMount(){
         document.body.classList.add('adm-bg');
    }

    tryToLogin=(login,pass)=>{
        console.log(login);
        console.log(pass);
        this.setState({
            isLogged:true,
            showMenu:true
        });

    }
    componentWillUnmount(){
        document.body.classList.remove('adm-bg');

    }

    displayMenu = (menuState)=>{
        this.setState(prevState => ({
            showMenu: menuState
          }));
        const merger = document.getElementById('main-content');
        if(typeof merger !="undefined"){
            if(!menuState){
                merger.classList.add('merge-left');
            }else{
                merger.classList.remove('merge-left');
            }
        }
        
    }

    render(){
        if(!this.state.isLogged){
            return(
                <Login login={this.tryToLogin}/>
            )
        }else{
        return(
               <div id="test">
                  <Header
                   isShowMenu={this.displayMenu} 
                   show={this.state.showMenu}
                   hideNotifications={this.props.closeInfos}
                   />
                  <Menu 
                  showMenu={this.state.showMenu}
                  />
                  <Route exact path="/admin" component={DashBoard}/>
                  <Route path="/admin/main-slider" component={MainSlider}/>
               {/* <DashBoard/> */}
               </div>
        )
        }
    }
} 