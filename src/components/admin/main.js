import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './containers/header';
import Menu from './containers/menu';
import DashBoard from './containers/dashboard';
import Login from './containers/login';
import MainSlider from './containers/mainslider';
import Services from './containers/services';

import '../../styles/admin/styles/style.css';
import '../../styles/admin/styles/style-responsive.css';

import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group'
//import PageTransition from 'react-router-page-transition';

export default class MainAdmin extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogged:false,
            bottomMenu:true
        }
        // this.props= {
        //     closeInfos : false
        // }
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
                // <CSSTransition>
                <Login login={this.tryToLogin}/>
                // </CSSTransition>
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
<TransitionGroup>
	<CSSTransition
		key={this.props.location.key}
		classNames="SlideIn"
        timeout={{ enter: 600, exit: 0 }}
        unmountOnExit={true}
        mountOnEnter={true}
	>
                  <Switch >
                    <Route  exact path="/admin" component={DashBoard}/>
                    <Route  exact path="/admin/main-slider" component={MainSlider}/>
                    <Route  exact path="/admin/main-services" component={Services}/>
                  </Switch>
                  </CSSTransition>
</TransitionGroup>
                </div>

        )
        }
    }
} 