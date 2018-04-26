import React, { Component } from 'react';
import Slider from 'react-slick';
import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';

import Redactsliderform from '../components/redactsliderform';
import imgOne from '../../../img/team/Miha.jpg';
import cancelImg from '../../../img/cancel.svg';


//import { CSSTransitionGroup, Transition } from 'react-transition-group';
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';


class MainSlider extends Component{
    constructor(props){
        super(props);
        this.onSlideClick = this.onSlideClick.bind(this);
        console.log(this.props);
    }

    componentDidMount(){

    }

    onSlideClick=(id,e)=>{
        e.preventDefault();
        this.props.openModal(this.props.store.sliders.find(slide=>{return slide.id===id}),true);
        // console.log('after dispatch');
        //console.log(this.props);
        //this.setState({showModal:true,editId: this.state.sliders.find(slide=>{return slide.id === id})});
    }
    onAddBttnClick=(e)=>{
        e.preventDefault();
        // this.setState({showModal:true})
        this.props.openModal(null,true);
    }
    onHideModal = (id,e)=>{
        if(id!=null){
            this.props.closeModal(id);
           // this.setState({showModal:false, editId:null});
        }else{
            this.props.closeModal(id);
            //this.setState({showModal:false});
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
        this.props.deleteSlide(id);
    }
    changeData=(data)=>{
        let res;
        let id;
        if(data.id === null){

            res = {
                id : this.props.store.sliders.length+2,
                name: data.name,
                position : data.position,
                description : data.description,
                img : data.imgUrl
            }
            //console.log(res);
            this.props.addSlide(data);

            //let t = this.addToState(this.state.sliders,res);
            //this.setState({sliders:t})
        }else{
            this.props.editSlide(data);
        }
        //console.log(this.state.sliders);
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
                                <TransitionGroup>
                                {this.props.store.sliders.map(slide=>(
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
                {this.props.store.showModal && (
                    <Redactsliderform
                        show={this.props.store.showModal}
                        hide={this.onHideModal}
                        editItem={this.props.store.editId}
                        change={this.changeData}
                    />
                )}
            </section>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    return { store: state.editMainSlide }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        openModal : (id,switcher)=>dispatch(actions.showModal(id,switcher)),
        closeModal : (id)=>dispatch(actions.closeModal(id)),
        addSlide : (result)=>dispatch(actions.addData(result)),
        deleteSlide : (id)=>dispatch(actions.deleteData(id)),
        editSlide : (data)=>dispatch(actions.changeData(data))
    }

}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainSlider));