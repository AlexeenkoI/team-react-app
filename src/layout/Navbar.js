import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import Modal from 'react-responsive-modal';
import NavForm from '../forms/navbarform';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.activateMenu=this.activateMenu.bind(this);
        this.state = {
          mMenuActive:false,
          open:false
        };

    }

    activateMenu(){
      var menu = document.getElementById('bs-example-navbar-collapse-1');
      var toggleList = document.getElementsByClassName('navbar-right');
      var open = this.state.mMenuActive;
      if(open==false){
        menu.classList.add('in');
        toggleList[0].classList.remove('slideOutUp');
        toggleList[0].classList.add('slideInDown');
        this.setState(prevState=>({
          mMenuActive : !prevState.mMenuActive
        }));
      }else{
        toggleList[0].classList.remove('slideInDown');
        toggleList[0].classList.add('slideOutUp');
        setTimeout(()=>{menu.classList.remove('in');},700);
        this.setState(prevState=>({
          mMenuActive : !prevState.mMenuActive
        }));
      }
    }
    onOpenModal(){
        //var body = document.getElementsByTagName('body');
        //body[0].classList.add('no-scroll');
      this.setState({open:true});
    };

    onCloseModal(){
        //var body = document.getElementsByTagName('body');
        //body[0].classList.remove('no-scroll');
      this.setState({open:false});
      
    }

    

    render(){
        return( 
        <nav id="tf-menu" className="navbar navbar-default navbar-fixed-top">
        <div id="nav-container" className="container ">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={this.activateMenu}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">Team X</a>
          </div>
  
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right slideInDown animated">
              <li><NavLink to="/cabinet" className="page-scroll" activeClassName="a-link">Кабинет</NavLink></li>
              <li><NavLink to="/admin" className="page-scroll" activeClassName="a-link">Admin</NavLink></li>
              <li><a  className="page-scroll" onClick={this.onOpenModal.bind(this)}>Написать нам</a></li>
            </ul>
          </div>
        </div>
        
        <Modal open={this.state.open} onClose={this.onCloseModal.bind(this)} classNames={{overlay:'d-overlay'}}>
        <div>Обратная связь</div>
          <NavForm/>
        </Modal> 
      </nav>
      
      );
    }
}
window.onload = function(){
  //const container = document.getElementById('nav-container');
  //container.classList.remove('fadeInDown');
}
export default NavBar;