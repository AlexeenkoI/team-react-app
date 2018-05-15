import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux'
import {editMainSlide,editSerivces,dashBoard,logData} from './reducers/reducers'
import {serverNotes,mailNotes,taskNotes} from './reducers/notereducers'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as actions from './actions/actions';

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
const AppStore = combineReducers({
    logData,
    dashBoard,
    editMainSlide,
    editSerivces,
    serverNotes,
    mailNotes,
    taskNotes
})
var store = createStore(AppStore,applyMiddleware(thunkMiddleware));
//
class MainAdmin extends Component{


    constructor(props){
        super(props);
        this.state = {
            login:'admin',
            pass:'mihadomain',
            isLogged:false,
            bottomMenu:true,
            showMenu:true
        }
        // this.props= {
        //     closeInfos : false
        // }
        console.log("main");
        //console.log(this.props);
       
    }

    componentDidMount(){
         document.body.classList.add('adm-bg');
         console.log(store.getState());
    }

    logOut=()=>{
        this.props.logOut();
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
            let unsubscribe = store.subscribe(() =>{
                let isLogginIn = store.getState();
                if(isLogginIn.logData.isLogged != this.state.isLogged){
                    console.log('change');
                this.setState({isLogged: isLogginIn.logData.isLogged});
                }
        }
        )
       // console.log(isLogginIn.logData);
         
        
        return(
            // <Provider store={store}>
            <div>
            {!this.props.store.isLogged ? (<Login login={this.tryToLogin}/>):
               (<div id="test">
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
		                    
                            timeout={300}
                            mountOnEnter={true}
                            unmountOnExit={true}
                            onExit={()=>{console.log('exited')}}
                            appear={true}
                            classNames={{
                                appear: 'example-enter',
                                appearActive: 'example-enter-active',
                                enter: 'example-enter',
                                enterActive: 'example-enter-active',
                                exit: 'example-leave',
                                exitActive: 'example-leave-active',
                               }}
                        >
                            <Switch >
                                <Route  exact path="/admin" component={DashBoard}/>
                                <Route  exact path="/admin/main-slider" component={MainSlider}/>
                                <Route  exact path="/admin/main-services" component={Services}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>)}
                </div>
            // </Provider>

        )
        
    }
}
const mapStateToProps = (state,ownProps) => {
    return { store: state.logData }
}
const mapDispatchToProps =(dispatch) =>{
    return{
        logOut: ()=>dispatch(actions.logout()),
        logIn : (data)=>dispatch(actions.loginToApp(data))
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainAdmin));