import React, { Component } from 'react';
import Slider from 'react-slick';
import {Button} from 'react-bootstrap';
import Redactsliderform from '../components/redactsliderform';
import imgOne from '../../../img/team/Miha.jpg';
import cancelImg from '../../../img/cancel.svg';


//import { CSSTransitionGroup, Transition } from 'react-transition-group';
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group'


class MainSlider extends Component{
    constructor(props){
        super(props);
        this.state={
            showModal:false,
            sliders:[
                {id:1,name : 'Михаил',img:'/Miha.jpg',position:'test',descripton:'test'},
                {id:2,name : 'Юра',img:'/Yura.jpg',position:'test2',descripton:'test2'},
                {id:3,name : 'Игорь',img:'/Igor2.jpg',position:'test3',descripton:'test3'},
            ],
            editId:null
        }
    this.onSlideClick = this.onSlideClick.bind(this);
    console.log(this.props.location);
    }

    onSlideClick=(id,e)=>{
        e.preventDefault();
        this.setState({showModal:true,editId: this.state.sliders.find(slide=>{return slide.id === id})});
    }
    onAddBttnClick=(e)=>{
        e.preventDefault();
        this.setState({showModal:true})
    }
    onHideModal = (id,e)=>{
        if(id!=null){
            this.setState({showModal:false, editId:null});
        }else{
            this.setState({showModal:false});
        }
    }
    changeState = (res,id)=>{
        return [
            ...this.state.sliders.slice(0,id),
            this.state.sliders[id] = res,
            ...this.state.sliders.slice(id+1)
        ]
    }
    addToState = (state,res)=>{
        return [
            ...state,
            {
            id : res.id,
            name: res.name,
            position: res.position,
            description:res.description,
            img:res.img
            }
        ]
    }
    deleteState = (state,id)=>{
        return state.filter(item=>{
            item.id !== id
        })
    }
    onDelBttn=(id,e)=>{
        e.stopPropagation(); //Block parent-up event bubbling
        this.setState({sliders:this.state.sliders.filter(item =>{
            return item.id !==id;
        })});
    }
    changeData=(data)=>{
        let res;
        let id;
        if(data.id === null){

            res = {
                id : this.state.sliders.length+2,
                name: data.name,
                position : data.position,
                description : data.description,
                img : data.imgUrl
            }
            console.log(res);
            let t = this.addToState(this.state.sliders,res);
            this.setState({sliders:t})
        }else{
            res = this.state.sliders.find(function(slide){
                if(slide.id === data.id){
                    slide.name = data.name,
                    slide.position = data.position,
                    slide.descripton = data.description
                    slide.img = data.imgUrl
                    return slide;
                }
            })
            id = this.state.sliders.findIndex(function(slide){
                return slide.id === data.id
            });
            let total = this.changeState(res,id);
        }
        console.log(this.state.sliders);
    }
    render(){
        return(
            //  <TransitionGroup>
            // <CSSTransition 
            //     timeout={300}
            //     classNames="SlideIn"    
            //     mountOnEnter={true}
            //     unmountOnExit={true}
            //     appear
            //     >
            <section id="main-content">
                <section className="wrapper">
                    <div className="gallery">
                        <h3 className="slider-head">Слайдер</h3>
                        <div className="buttn-head"><Button  bsStyle="primary" onClick={(e)=>this.onAddBttnClick(e)}>Добавить изображение</Button></div>
                        <div className="gallery-grids">
                            <div className="gallery-top-grids">
                                <TransitionGroup>
                                {this.state.sliders.map(slide=>(
                                    <CSSTransition 
                                     key={slide.id}
                                    timeout={300}
                                    mountOnEnter={true}
                                    unmountOnExit={true}
                                    onExit={()=>{console.log('exited')}}
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
                                <div key={slide.id} className="col-sm-2 gallery-grids-left">
                                    <div className="gallery-grid" onClick={(e)=>this.onSlideClick(slide.id,e)}>
                                        <a className="example-image-link">
                                            <img src={process.env.PUBLIC_URL + slide.img} />
                                            <div className="captn desktop-only">
                                                <h4>{slide.name}</h4>
                                                <p>{slide.position}</p>
                                                <p>{slide.descripton}</p>
                                            </div>
                                            <div className="del-circle" onClick={(e)=>this.onDelBttn(slide.id,e)}>
                                            <img src={cancelImg}/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                </CSSTransition>
                                
                                ))}
                                </TransitionGroup>
                                <div className="clearfix"></div>    
                            </div>
                        </div>
                    </div>
                </section>
                {this.state.showModal && (
                <Redactsliderform
                show={this.state.showModal}
                hide={this.onHideModal}
                editItem={this.state.editId}
                change={this.changeData}
                />
                )}
            </section>
            //   </CSSTransition>
            //   </TransitionGroup>

        )
    }
}
export default MainSlider;