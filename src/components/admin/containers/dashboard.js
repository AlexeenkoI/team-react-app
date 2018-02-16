import React, { Component } from 'react';

import QuickPreview from '../containers/Quickpreview';
import SmallStats from '../components/smallstats';
import TaskWidget from '../components/taskswidget';

export default class Dashboard extends Component{
    render(){
        return(
            
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
        )
    }
}