import React, { Component } from 'react';
import Slider from 'react-slick';
import tOne from '../../img/team/Igor2.jpg';
import tTwo from '../../img/team/Miha.jpg';
import tThree from '../../img/team/Yura.jpg';

export default class TeamBlock extends Component{
    render(){
        const settings = {
            dots:false,
            arrows:false,
            slidesToShow:3,
            infinite: true,
            responsive :[
                { breakpoint: 768, 
                    settings: 
                            { 
                                slidesToShow: 1 
                            } 
                }
            ]
        }
        return(
        <div id="tf-team" className="text-center">
        <div className="overlay">
            <div className="container">
                <div className="section-title center">
                    <h2><strong>Наша команда</strong></h2>
                    <div className="line">
                        <hr/>
                    </div>
                </div>

                <div id="team" className="owl-carousel owl-theme row">
                <Slider {...settings}>
                    <div className="item">
                        <div className="thumbnail">
                            <img src={tOne} alt="..." className="img-circle team-img"/>
                            <div className="caption">
                                <h3>Игорь</h3>
                                <p>FrontEnd/BackEnd Web Developer</p>
                                <p>Специалист FrontEnd/BackEnd Web разработке</p>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="thumbnail">
                            <img src={tTwo} alt="..." className="img-circle team-img"/>
                            <div className="caption">
                                <h3>Михаил</h3>
                                <p>Service / Desktop Developer</p>
                                <p>Специалист по сервисам и серверным решениям.</p>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="thumbnail">
                            <img src={tThree} alt="..." className="img-circle team-img"/>
                            <div className="caption">
                                <h3>Юрий</h3>
                                <p>Andrioid / IOS Developer</p>
                                <p>Специалист по мобильной разработке</p>
                            </div>
                        </div>
                    </div>
                </Slider>
                </div>          
            </div>
        </div>
    </div>
        );
    }
}