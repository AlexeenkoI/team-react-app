import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux'
import {mainReducer,editMainSlide,editSerivces,dashBoard,logData} from './components/admin/reducers/reducers';
import {serverNotes,mailNotes,taskNotes} from './components/admin/reducers/notereducers'
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import Navbar from './layout/Navbar';
import Main from './components/mainpage/main';
import MainAdmin from './components/admin/main';
import MainCabinet from './components/cabinet/main';
import Footer from './layout/footer';
import Slider from 'react-slick';

const AppStore = combineReducers({
  logData,
  dashBoard,
  editMainSlide,
  editSerivces,
  serverNotes,
  mailNotes,
  taskNotes,
  mainReducer
})
var store = createStore(AppStore,applyMiddleware(thunkMiddleware));


class App extends React.Component {
  constructor(props){
    super(props);
  
  this.state={
    loading:false
  }
  }
  componentDidMount(){
    console.log(store.getState());
  }
  render() {
    const isLoad = this.state.loading;
    
    return (
      <Provider store={store}>
        <Switch location={this.props.location}>
          <Route exact path="/" component={Main}/>
          <Route path="/cabinet" component={MainCabinet}/>
          <Route path="/admin" component={MainAdmin}/>
        </Switch>
      </Provider>
    );
  }
}

// const mapStateToProps = (state,ownProps) => {
//   return { store: state.mainStore }
// }
// const mapDispatchToProps = (dispatch) =>{
//   return {
//       openModal : (id,switcher)=>dispatch(actions.showModal(id,switcher)),
//       closeModal : (id)=>dispatch(actions.closeModal(id)),
//       addSlide : (result)=>dispatch(actions.addData(result)),
//       deleteSlide : (id)=>dispatch(actions.deleteData(id)),
//       editSlide : (data)=>dispatch(actions.changeData(data))
//   }

// }
//export default withRouter(connect(mapStateToProps)(App));

export default App;
