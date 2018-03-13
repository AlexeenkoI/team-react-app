import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import ScrollAnimation from 'react-animate-on-scroll';

import tOne from '../../img/team/Igor2.jpg';
import tTwo from '../../img/team/Miha.jpg';
import tThree from '../../img/team/Yura.jpg';

export default class TeamBlock extends Component{
    constructor(props){
        super(props);
        this.state={
            sliders:[
                {id:1,name : 'Михаил',img:'/Miha.jpg',position:'FrontEnd/BackEnd Web Developer',descripton:'Специалист FrontEnd/BackEnd Web разработке'},
                {id:2,name : 'Юра',img:'/Yura.jpg',position:'Service / Desktop Developer',descripton:'Специалист по сервисам и серверным решениям.'},
                {id:3,name : 'Игорь',img:'/Igor2.jpg',position:'Andrioid / IOS Developer',descripton:'Специалист по мобильной разработке'},
            ]
        }
    }
    render(){
        const settings = {
            dots:false,
            arrows:false,
            infinite: false,
            slidesToShow:3,
            slidesToScroll: 1,
            draggable:false,
            responsive :[
                { breakpoint: 768, 
                    settings: 
                            { 
                                slidesToShow: 1,
                                infinite:true,
                                draggable:true 
                            },
                 
                }
            ]
        }
        return(
        <div id="tf-team" className="text-center">
        <div className="overlay">
            <div className="container">
                <div className="section-title center">
                <ScrollAnimation 
                    animateIn="fadeIn" 
                    animateOut="fadeOut"
                    animateOnce={true}>
                    <h2><strong>Наша команда</strong></h2>
                </ScrollAnimation>
                    <div className="line">
                        <hr/>
                    </div>
                </div>

                <div id="team" className="owl-carousel owl-theme row">
                <ScrollAnimation 
                    animateIn="zoomIn" 
                    duration={2}
                    animateOut="zoomOut"
                    animateOnce={true}>
                <Slider {...settings}>
                {this.state.sliders.map(slider=>(
                    <div key={slider.id} className="item">
                        <div className="thumbnail">
                            <img src={process.env.PUBLIC_URL + slider.img} alt="..." className="img-circle team-img"/>
                                <div className="caption">
                                    <h3>{slider.name}</h3>
                                    <p>{slider.position}</p>
                                    <p>{slider.descripton}</p>
                                </div>
                        </div>
                    </div>
                ))}
                    
                </Slider>
                </ScrollAnimation>
                </div>          
            </div>
        </div>
    </div>
        );
    }
}