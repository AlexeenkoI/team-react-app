import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './layout/Navbar';
import TopBlock from './pages/mainpage/top-block';
import AboutUs from './pages/mainpage/about-us';
import TeamBlock from './pages/mainpage/team-block';
import ServicesBlock from './pages/mainpage/services-block';
import Footer from './layout/footer';
//import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import Slider from 'react-slick';
import './App.css';
import './styles/style.css';
import './styles/responsive.css';
import './styles/bootstrap.css';
import './styles/animate.css';




class App extends React.Component {
  state={
    loading:false
  }

  componentDidMount(){
    // const ele = document.getElementById('root');
    // if(ele){
    //   console.log('ele');
    //   setTimeout(()=>{
    //     setTimeout(() => {
    //       ele.outerHTML = ''
    //   }, 22000);
    //   },20000);
    // }

    setTimeout(() => {
      setTimeout(()=>{

      },3000)
    }, 1000);
  }
  render() {
    const isLoad = this.state.loading;
    
    return (
      <div>
        <NavBar/>
        <TopBlock/>
        <AboutUs/>
        <TeamBlock/>
        <ServicesBlock/>
        <Footer/>
        {/* <div id="team" className="owl-carousel owl-theme row">
        <SimpleSlider/>
        </div> */}
      </div>
    );
  
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

export default App;
