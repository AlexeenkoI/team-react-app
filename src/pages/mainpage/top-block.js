import React, { Component } from 'react';

export default class TopBlock extends Component {
    render(){
        return(
        <div id="tf-home" className="text-center">
            <div className="overlay">
                <div className="content">
                    <h1 className="bounceInRight animated">Добро пожаловать.Мы -<strong><span className="color"> Team X</span></strong></h1>
                    <p className="lead fadeIn animated">Мы группа энтузиастов-разработчиков, готовых воплотить <strong className="color">любые ваши идеи в жизнь</strong> каждый из нас по-своему <strong className="color">уникальная личность</strong></p>
                    <a href="#tf-about" className="fa fa-angle-down page-scroll"></a>
                </div>
            </div>
        </div>
        );
    }
}