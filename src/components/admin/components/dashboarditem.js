import React, { Component } from 'react';

export default class DashboardItem extends Component{
    render(){
        return(
        <div className="col-md-3 market-update-gd zoomIn animated">
            <div className="market-update-block clr-block-2">
                <div className="col-md-4 market-update-right">
                    <i className="fa fa-eye"> </i>
                </div>
                 <div className="col-md-8 market-update-left">
                 <h4>Visitors</h4>
                <h3>13,500</h3>
                <p>Other hand, we denounce</p>
              </div>
              <div className="clearfix"> </div>
            </div>
        </div>
        )
    }
}