import React, { Component } from 'react';

export default class TopBlock extends Component {
    onDonwClick(){
        window.scrollTo(0,200);
    }
    scrollTo(e) {
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            V = 1,
            hash = document.getElementById('tf-about');

        var t = document.querySelector('#tf-about').getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r !== w + t) {
                requestAnimationFrame(step)
            } else {
                window.hash = hash  // URL с хэшем
            }
        }
    }
    render(){
        return(
        <div id="tf-home" className="text-center">
            <div className="overlay">
                <div className="content">
                    <h1 className="bounceInRight animated">Добро пожаловать.Мы -<strong><span className="color"> Team X</span></strong></h1>
                    <p className="lead fadeIn animated">Мы группа энтузиастов-разработчиков, готовых воплотить <strong className="color">любые ваши идеи в жизнь</strong> каждый из нас по-своему <strong className="color">уникальная личность</strong></p>
                    <a href="#tf-about" className="fa fa-angle-down page-scroll" onClick={this.scrollTo.bind(this)}></a>
                </div>
            </div>
        </div>
        );
    }
}