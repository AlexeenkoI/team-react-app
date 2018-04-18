import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import editMainSlide from './reducers/reducers'

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
var teststore = createStore(editMainSlide);

export default class MainAdmin extends Component{


    constructor(props){
        super(props);
        this.state = {
            login:'admin',
            pass:'mihadomain',
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
         console.log(teststore.getState());
    }

    logOut=()=>{
        this.setState({isLogged:false});
    }

    tryToLogin=(login,pass)=>{
        console.log(login);
        console.log(pass);
        if(this.state.login === login && this.state.pass === pass){
            this.setState({
                isLogged:true,
                showMenu:true
            });
        }

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
            <Provider store={teststore}>
               <div id="test">
                    <Header
                        isShowMenu={this.displayMenu} 
                        show={this.state.showMenu}
                        hideNotifications={this.props.closeInfos}
                        isLogged={this.logOut}
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
            </Provider>

        )
        }
    }
} 