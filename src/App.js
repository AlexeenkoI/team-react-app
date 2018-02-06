import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Navbar from './layout/Navbar';
import Main from './components/mainpage/main';
import MainAdmin from './components/admin/main';
import MainCabinet from './components/cabinet/main';
import Footer from './layout/footer';
import './App.css';
import './styles/style.css';
import './styles/responsive.css';
import './styles/bootstrap.css';
import './styles/animate.css';




class App extends React.Component {
  state={
    loading:false
  }

  render() {
    const isLoad = this.state.loading;
    
    return (
      <div>
        <Navbar/>
          <Route exact path="/" component={Main}/>
          <Route path="/cabinet" component={MainCabinet}/>
          
        <Footer/>
        <Route path="/admin" component={MainAdmin}/>
      </div>
    );
  }
}



export default App;
