import React, { Component } from 'react';

import QuickPreview from '../containers/Quickpreview';
import SmallStats from '../components/smallstats';
import TaskWidget from '../components/taskswidget';
import { CSSTransition } from 'react-transition-group';

export default class Dashboard extends Component{
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
            // </CSSTransitionGroup>
        )
    }
}