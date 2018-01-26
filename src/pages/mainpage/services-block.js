import React, { Component } from 'react';
//import  TabLink  from 'react-tabs-redux';
//import { Tabs, TabLink, TabContent } from '../../../src';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

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
        this.state = {
            imgUrls: [
                p1,
                p2,
                p3,
                p4,
                p5,
                p6,
                p7,
                p8
            ]
        };
    }
    render(){
        return(
            <div id="tf-works">
            <div className="container">
                <div className="section-title text-center center">
                    <h2>Наши<strong>услуги</strong></h2>
                    <div className="line">
                        <hr/>
                    </div>
                    <div className="clearfix"></div>
                    <small><em>Мы предоставляем большой спектр услуг разработки и поддержки ваших проектов.</em></small>
                </div>
                <div className="space"></div>
                <Tabs renderActiveTabContentOnly={true}>
                <div className="categories">
                    
                    <ul className="cat">
                        <li className="pull-left"><h4>Фильтр услуг:</h4></li>
                        <li className="pull-right">
                            <ol className="type">
                                <li><a  className=""><TabLink to="tab1" default>Все</TabLink></a></li>
                                <li><a  ><TabLink to="tab2" >Web</TabLink></a></li>
                                <li><a  ><TabLink to="tab3">Desktop</TabLink></a></li>
                                <li><a  ><TabLink to="tab4">Mobile</TabLink></a></li>
                                <li><a  ><TabLink to="tab5">Service</TabLink></a></li>
                            </ol>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
    
                <div id="lightbox" className="row isotope">
    
                    <TabContent for="tab1">
                    <div className="col-sm-6 col-md-3 col-lg-3 photography app zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Мобильная разработка</h4>
                                        <small>все услуги</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[1]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 branding zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Десктопные приложения</h4>
                                        <small>Создадим десктопные приложения под любую ОС</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[2]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 branding zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Создание сервисов</h4>
                                        <small>создадим мощные сервисы и API под ваши нужды</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[3]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 web zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Индивидуальный дизайн</h4>
                                        <small>Создадим уникальный дизайн</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[4]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 app zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Индивидуальный дизайн Мобильного приложения</h4>
                                        <small>Подберем удобный интерфейс для вашего мобильного решения</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[5]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 photography web zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Веб интерфейс</h4>
                                        <small>Создадим веб-интерфейсы любой сложности</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[6]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 web zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Составление Тех Задания</h4>
                                        <small>составим подробнейшее тз и документаци на проект</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[7]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </TabContent>
                    <TabContent for="tab2">
                    <div className="col-sm-6 col-md-3 col-lg-3 photography web zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Веб интерфейс</h4>
                                        <small>Создадим веб-интерфейсы любой сложности</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[6]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 web zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Индивидуальный дизайн</h4>
                                        <small>Создадим уникальный дизайн</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[4]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </TabContent>
                    <TabContent for="tab3">
                    <div className="col-sm-6 col-md-3 col-lg-3 branding zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Десктопные приложения</h4>
                                        <small>Создадим десктопные приложения под любую ОС</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[2]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 web zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Индивидуальный дизайн</h4>
                                        <small>Создадим уникальный дизайн</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[4]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </TabContent>
                    <TabContent for="tab4">
                    <div className="col-sm-6 col-md-3 col-lg-3 photography app zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Мобильная разработка</h4>
                                        <small>все услуги</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[1]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 app zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Индивидуальный дизайн Мобильного приложения</h4>
                                        <small>Подберем удобный интерфейс для вашего мобильного решения</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[5]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </TabContent>
                    <TabContent for="tab5">
                    <div className="col-sm-6 col-md-3 col-lg-3 branding zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Создание сервисов</h4>
                                        <small>создадим мощные сервисы и API под ваши нужды</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[3]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 web zoomIn animated">
                        <div className="portfolio-item">
                            <div className="hover-bg">
                                <a href="">
                                    <div className="hover-text">
                                        <h4>Составление Тех Задания</h4>
                                        <small>составим подробнейшее тз и документаци на проект</small>
                                        <div className="clearfix"></div>
                                        <i className="fa fa-plus"></i>
                                    </div>
                                    <img src={this.state.imgUrls[7]} className="img-responsive" alt="..."/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </TabContent>
                </div>
                </Tabs>
            </div>
        </div>
        )
    }
}