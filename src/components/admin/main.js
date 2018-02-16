import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './containers/header';
import Menu from './containers/menu';
import DashBoard from './containers/dashboard';
import Login from './containers/login';

import '../../styles/admin/styles/style.css';
import '../../styles/admin/styles/style-responsive.css';

export default class MainAdmin extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogged:false,
            bottomMenu:true
        }
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
               <div>
                  <Header isShowMenu={this.displayMenu} show={this.state.showMenu}/>
                  <Menu showMenu={this.state.showMenu}/>
                  <Route path="/admin" component={DashBoard}/>
               {/* <DashBoard/> */}
               </div>
        )
        }
    }
} 