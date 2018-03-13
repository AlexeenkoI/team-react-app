import React, { Component } from 'react';
//import  TabLink  from 'react-tabs-redux';
//import { Tabs, TabLink, TabContent } from '../../../src';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import ScrollAnimation from 'react-animate-on-scroll';
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group'

import p1 from '../../img/portfolio/01.jpg';
import p2 from '../../img/portfolio/02.jpg';
import p3 from '../../img/portfolio/03.jpg';
import p4 from '../../img/portfolio/04.jpg';
import p5 from '../../img/portfolio/05.jpg';
import p6 from '../../img/portfolio/06.jpg';
import p7 from '../../img/portfolio/07.jpg';
import p8 from '../../img/portfolio/08.jpg';

export default class ServicesBlock extends Component{
    constructor(props){
        super(props);
        this.onFilterChange.bind(this);
        this.state = {
            filters:[
                // {id:0,name:"Все",value:"All"},
                {id:0,name:"Web",value:"Web"},
                {id:1,name:"Desktop",value:"Desktop"},
                {id:2,name:"Mobile",value:"Mobile"},
                {id:3,name:"Service",value:"Service"},
            ],
            services:[
                {id:0,name:"Веб Интерфейс",description:"Создадим веб-интерфейсы любой сложности",img:"/portfolio/01.jpg",currentFilters:["Web"]},
                {id:1,name:"Десктопные приложения",description:"Создадим десктопные приложения под любую ОС",img:"/portfolio/02.jpg",currentFilters:["Desktop"]},
                {id:2,name:"Создание сервисов",description:"Cоздадим мощные сервисы и API под ваши нужды",img:"/portfolio/03.jpg",currentFilters:["Service"]},
                {id:3,name:"Мобильная разработка",description:"asdasda4",img:"/portfolio/04.jpg",currentFilters:["Mobile"]},
                {id:4,name:"Индивидуальный дизайн",description:"Создадим уникальный дизайн",img:"/portfolio/05.jpg",currentFilters:["Web","Desktop"]},
                {id:5,name:"Индивидуальный дизайн мобильного приложения",description:"Подберем удобный интерфейс для вашего мобильного решения",img:"/portfolio/06.jpg",currentFilters:["Mobile"]},
                {id:6,name:"Создание тех задания",description:"составим подробнейшее тз и документацию на проект",img:"/portfolio/07.jpg",currentFilters:["Service"]},
            ],
            editId:null,
            showModal:false,
            applyFilter:'All',
            // imgUrls: [
            //     p1,
            //     p2,
            //     p3,
            //     p4,
            //     p5,
            //     p6,
            //     p7,
            //     p8
            // ]
        };
    }
    onFilterChange=(e,value)=>{
        e.preventDefault();
        console.log(value);
        this.setState({applyFilter:value});
    }
    render(){
        return(
            <div id="tf-works">
            <div className="container">
                <div className="section-title text-center center">
                <ScrollAnimation
                    animateIn="bounceIn"
                    animateOut="bounceOut"
                    animateOnce={true}>
                    <h2>Наши<strong>услуги</strong></h2>
                    <div className="line">
                        <hr/>
                    </div>
                    <div className="clearfix"></div>
                    <small><em>Мы предоставляем большой спектр услуг разработки и поддержки ваших проектов.</em></small>
                    </ScrollAnimation>
                </div>
                <div className="space"></div>
                <div className="categories">
                    
                    <ul className="cat">
                    <ScrollAnimation
                     animateIn='bounceInRight'
                     animateOut='bounceOutLeft'
                     animateOnce={true}>
                        <li className="pull-left"><h4>Фильтр услуг:</h4></li>
                    </ScrollAnimation>
                    <ScrollAnimation
                     animateIn='bounceInLeft'
                     animateOut='bounceOutRight'
                     animateOnce={true}>
                        <li className="pull-right">
                            <ol className="type">
                                <li onClick={(e)=>this.onFilterChange(e,'All')}><div><a>Все</a></div></li>
                                {this.state.filters.map(filter=>(
                                    <li key={filter.id} onClick={(e)=>this.onFilterChange(e, filter.value)}><div><a >{filter.name}</a></div></li>
                                ))}
                            </ol>
                        </li>
                    </ScrollAnimation>
                    </ul>
                    <div className="clearfix"></div>
                </div>
    
                <div id="lightbox" className="row isotope">
                <TransitionGroup>
                {this.state.services.filter(item=>{ 
                            return this.state.applyFilter === 'All' ? item : item.currentFilters.includes(this.state.applyFilter)
                        }).map(service=>(
                            <CSSTransition 
                                key={service.id}
                                timeout={{enter:400,exit:200}}
                                mountOnEnter={true}
                                appear={true}
                                classNames={{
                                    appear: 'example-enter',
                                    appearActive: 'example-enter-active',
                                    enter: 'example-enter',
                                    enterActive: 'example-enter-active',
                                    exit: 'example-leave',
                                    exitActive: 'example-leave-active',
                                }}
                                >
                            <div key={service.id} className="col-sm-6 col-md-3 col-lg-3 photography app">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="">
                                            <div className="hover-text">
                                                <h4>{service.name}</h4>
                                                <small>{service.description}</small>
                                                <div className="clearfix"></div>
                                                <i className="fa fa-plus"></i>
                                            </div>
                                            <img src={process.env.PUBLIC_URL + service.img} className="img-responsive" alt="..."/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
            </div>
        </div>
        )
    }
}