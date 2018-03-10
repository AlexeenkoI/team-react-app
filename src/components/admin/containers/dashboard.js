import React, { Component } from 'react';

import QuickPreview from '../containers/Quickpreview';
import SmallStats from '../components/smallstats';
import TaskWidget from '../components/taskswidget';
import { CSSTransition } from 'react-transition-group';

import { Spinner } from 'react-preloading-component';
import  Preloader from '../helpers/preloader';

export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
        }
    }
    componentDidMount(){
        setTimeout(function(){
            console.log('callback');
            this.setState({isLoading:false});
        }.bind(this),2000);
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
        {this.state.isLoading ? (
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