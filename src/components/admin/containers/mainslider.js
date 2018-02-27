import React, { Component } from 'react';
import Slider from 'react-slick';
import {Button} from 'react-bootstrap';
import Redactsliderform from '../components/redactsliderform';
import imgOne from '../../../img/team/Miha.jpg';
import cancelImg from '../../../img/cancel.svg';

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
    //this.onSlideClick = this.onSlideClick.bind(this);
    }

    onSlideClick=(id,e)=>{
        e.preventDefault();
        //console.log(id);
        this.setState({showModal:true,editId:this.state.sliders[id-1]})
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
       
        console.log(id);
        e.stopPropagation();
        let newsliders = this.state.sliders.filter(item =>{
            return item.id !==id;
        });
        console.log(newsliders);
        // this.setState({sliders: this.state.sliders.filter(function(item){
        //         return item.id!==id
        //     }
        // )})
        //console.log(newState);
        this.setState({sliders:newsliders});
        
        console.log(this.state);
    }
    changeData=(data)=>{
        console.log('parent comp');
        console.log(data);
        let res;
        let id;
        if(data.id === null){

            res = {
                id : this.state.sliders.length+1,
                name: data.name,
                position : data.position,
                description : data.description,
                img : data.imgUrl
            }
            let t = this.addToState(this.state.sliders,res);
            console.log(t);
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


        //console.log(total);
        // this.setState({
        //     sliders: total
        // })
        //console.log('result filter');
        console.log(this.state.sliders);
    }
    render(){
        return(
            <section id="main-content">
                <section className="wrapper">
                    <div className="gallery">
                        <h3 className="slider-head">Слайдер</h3>
                        <div className="buttn-head"><Button  bsStyle="primary" onClick={(e)=>this.onAddBttnClick(e)}>Добавить изображение</Button></div>
                        <div className="gallery-grids">
                            <div className="gallery-top-grids">
                                {this.state.sliders.map(slide=>(
                                <div key={slide.id} className="col-sm-4 gallery-grids-left">
                                    <div className="gallery-grid" onClick={(e)=>this.onSlideClick(slide.id,e)}>
                                        <a className="example-image-link">
                                            <img src={process.env.PUBLIC_URL + slide.img} />
                                            <div className="captn">
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
                                ))}
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
        )
    }
}
export default MainSlider;