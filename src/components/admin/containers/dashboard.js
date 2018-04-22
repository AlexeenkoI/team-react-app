import React, { Component } from 'react';

import QuickPreview from '../containers/Quickpreview';
import SmallStats from '../components/smallstats';
import TaskWidget from '../components/taskswidget';
import { CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/actions';

import { Spinner } from 'react-preloading-component';
import  Preloader from '../helpers/preloader';
import {actionDashboard} from  '../helpers/actionstrings';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
        }
    }
    componentDidMount(){
        console.log('try-fetch');
        this.props.fetchData();
        //console.log('dash-props');
        //console.log(this.props);
        // setTimeout(function(){
        //     console.log('callback');
        //     this.setState({isLoading:false});
        // }.bind(this),2000);
    }
    render(){
        return(
        //     <CSSTransitionGroup
        //     transitionAppear={true}
        //     transitionLeave={true}
        //     transitionAppearTimeout={600}
        //     transitionEnterTimeout={600}
        //     transitionLeaveTimeout={600}
        //     transitionName="SlideIn"
        //   >
        <div>
        {this.props.state.fetching ? (
            <Preloader/>
        ):(
            <section id="main-content">
                <section className="wrapper">
                    <QuickPreview/>
                    <div className="clearfix"></div>
                    <div className="agileits-w3layouts-stats">
                    <SmallStats/>
                    <TaskWidget/>
                    </div>
                </section>  
            </section>
        )}
        </div>
            // </CSSTransitionGroup>
        )
    }
}
const mapStateToProps = (state)=>{
    return{state:state.dashBoard}
}
const mapDispatchToProps = (dispatch) =>{
    return{
        fetchData: ()=>dispatch(actions.fetchDashboardData())
    }

}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));