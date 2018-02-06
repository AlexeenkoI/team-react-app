import React, { Component } from 'react'
import NavBar from '../../layout/Navbar';
import TopBlock from './top-block';
import AboutUs from './about-us';
import TeamBlock from './team-block';
import ServicesBlock from './services-block';
import Footer from '../../layout/footer';

export default class Main extends Component{
    
    render(){
        return(
            <div>
            {/* <NavBar/> */}
            <TopBlock/>
            <AboutUs/>
            <TeamBlock/>
            <ServicesBlock/>
            {/* <Footer/> */}
            </div>
        )
    }
}

function navBar(){
    var scrolled = window.pageYOffset;
    var winHeight = window.innerHeight;
    var nav = document.getElementsByClassName('navbar-default');
    if(scrolled>100){
      nav[0].classList.add('on');
    }else{
      nav[0].classList.remove('on');
    }
  }
  
  window.onscroll = function(){
   navBar();
   
  }