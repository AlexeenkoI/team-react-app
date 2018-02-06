
import React, { Component } from 'react';
import blockImg from '../../img/02.png'

export default class AboutUs extends Component {
    render(){
        return(
    <div id="tf-about">
        <div className="container">
            <div className="row">
                <div className="col-md-6 zoomIn animated">
                    <img src={blockImg} className="img-responsive"/>
                </div>
                <div className="col-md-6">
                    <div className="about-text">
                        <div className="section-title">
                            <h4 className="lightSpeedIn animated">О нас</h4>
                            <h2 className="lightSpeedIn animated">Несколько слов <strong>о нас</strong></h2>
                            <hr/>
                            <div className="clearfix"></div>
                        </div>
                        <p className="intro bounceIn animated">Мы любим создавать интересные проекты, решать сложные задачи, воплощать в реальность ваши замыслы.</p>
                        <ul className="about-list">
                            <li>
                                <span className="fa fa-dot-circle-o"></span>
                                <strong>Цель</strong> - <em>Хорошее ПО для ваших нужд</em>
                            </li>
                            <li>
                                <span className="fa fa-dot-circle-o"></span>
                                <strong>Навыки</strong> - <em>Гарантируем результат</em>
                            </li>
                            <li>
                                <span className="fa fa-dot-circle-o"></span>
                                <strong>Коллектив</strong> - <em>Мы молодые специалисты, которые жаждут новых задач</em>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

        );
    }
}