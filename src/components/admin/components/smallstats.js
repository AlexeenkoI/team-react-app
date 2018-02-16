import React, { Component } from 'react';

export default class SmallStats extends Component{
    render(){
        return(
            <div className="col-md-4 stats-info widget">
            <div className="stats-info-agileits">
                <div className="stats-title">
                    <h4 className="title">Статистика активности клиента</h4>
                </div>
                <div className="stats-body">
                    <ul className="list-unstyled">
                        <li>Хрен с косой горы<span className="pull-right">85%</span>  
                            <div className="progress progress-striped active progress-right">
                                <div className="bar green" style={{width:'80%'}}></div> 
                            </div>
                        </li>
                        <li>Увалень <span className="pull-right">35%</span>  
                            <div className="progress progress-striped active progress-right">
                                <div className="bar yellow" style={{width:'80%'}}></div>
                            </div>
                        </li>
                        <li>Ахмед Бибосович <span className="pull-right">78%</span>  
                            <div className="progress progress-striped active progress-right">
                                <div className="bar red" style={{width:'80%'}}></div>
                            </div>
                        </li>
                        <li>Гиви <span className="pull-right">50%</span>  
                            <div className="progress progress-striped active progress-right">
                                <div className="bar blue" style={{width:'80%'}}></div>
                            </div>
                        </li>
                        <li>Рандомный парень <span className="pull-right">80%</span>  
                            <div className="progress progress-striped active progress-right">
                                <div className="bar light-blue" style={{width:'80%'}}></div>
                            </div>
                        </li>
                        <li className="last">Others <span className="pull-right">60%</span>  
                            <div className="progress progress-striped active progress-right">
                                <div className="bar orange" style={{width: '60%' }}></div>
                            </div>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}