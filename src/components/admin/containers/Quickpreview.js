import React, { Component } from 'react';

import DashboardItem from '../components/dashboarditem';

export default class QuickPreview extends Component{
    render(){
        return(
            <div className="market-updates">
                <DashboardItem/>
                <DashboardItem/>
                <DashboardItem/>
                <DashboardItem/>
            </div>
        );
    }
}