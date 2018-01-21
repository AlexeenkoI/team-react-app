import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './layout/Navbar';
import TopBlock from './pages/mainpage/top-block';
import AboutUs from './pages/mainpage/about-us';


import './App.css';
import './styles/style.css';
import './styles/responsive.css';
import './styles/bootstrap.css';



class App extends React.Component {
 render() {
    return (
      <div>
        <NavBar/>
        <TopBlock/>
        <AboutUs/>
      </div>
    );
  }
}

export default App;
