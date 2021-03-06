import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap'
import cancelImg from '../../../img/cancel.svg';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as actions from '../actions/actions';
import {actionString, actionStringService} from  '../helpers/actionstrings';

import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group'
import Redactserviceform from '../components/redactserviceform';
import ScrollAnimation from 'react-animate-on-scroll';

class Services extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     filters:[
        //         // {id:0,name:"Все",value:"All"},
        //         {id:0,name:"Web",value:"Web"},
        //         {id:1,name:"Desktop",value:"Desktop"},
        //         {id:2,name:"Mobile",value:"Mobile"},
        //         {id:3,name:"Service",value:"Service"},
        //     ],
        //     services:[
        //         {id:0,name:"Веб Интерфейс",description:"dasdasd",img:"/portfolio/01.jpg",currentFilters:["Web"]},
        //         {id:1,name:"Десктопные приложения",description:"asdasd2",img:"/portfolio/02.jpg",currentFilters:["Desktop"]},
        //         {id:2,name:"Создание сервисов",description:"asdasdas3",img:"/portfolio/03.jpg",currentFilters:["Service"]},
        //         {id:3,name:"Мобильная разработка",description:"asdasda4",img:"/portfolio/04.jpg",currentFilters:["Mobile"]},
        //         {id:4,name:"Индивидуальный дизайн",description:"asdasda5",img:"/portfolio/05.jpg",currentFilters:["Web","Desktop"]},
        //         {id:5,name:"Индивидуальный дизайн мобильного приложения",description:"asdasda6",img:"/portfolio/06.jpg",currentFilters:["Mobile"]},
        //         {id:6,name:"Создание тех задания",description:"asdasda7",img:"/portfolio/07.jpg",currentFilters:["Service"]},
        //     ],
        //     editId:null,
        //     showModal:false,
        //     applyFilter:'All'
        // };
    }

    componentDidMount(){
    }
    changeState = (res,id)=>{
        return [
            ...this.state.services.slice(0,id),
            this.state.services[id] = res,
            ...this.state.services.slice(id+1)
        ]
    }
    addToState = (state,res)=>{
        return [
            ...state,
            res
        ]
    }

    filterChange=(e)=>{
        console.log(e.target.value);
       // this.setState({applyFilter:e.target.value});
        this.props.filterService(e.target.value)
        
    }

    changeData=(data)=>{
        if(data.id === null){

            // res = {
            //     id : this.state.sliders.length+2,
            //     name: data.name,
            //     position : data.position,
            //     description : data.description,
            //     img : data.imgUrl
            // }
            // console.log(res);
            //let t = this.addToState(this.state.services,data);
            //this.setState({services:t})
            this.props.addService(data);
        }else{
            // res = this.state.services.find(function(service){
            //     if(service.id === data.id){
            //         service.name = data.name,
            //         service.position = data.position,
            //         service.descripton = data.desc
            //         service.img = data.imgUrl
            //         return service;
            //     }
            // })
            // id = this.state.services.findIndex(function(service){
            //     return service.id === data.id
            // });
            //let total = this.changeState(res,id);
            this.props.editService(data);
        }
        //console.log(this.state.services);
    }

    onServiceClick=(id,e)=>{
        e.preventDefault();
        this.props.openModal(this.props.store.services.find(service=>{return service.id === id}),true);
        //this.setState({showModal:true,editId: this.state.services.find(service=>{return service.id === id})});
    }

    onDelBttn=(id,e)=>{
        e.stopPropagation(); //Block parent-up event bubbling
        // this.setState({services:this.state.services.filter(item =>{
        //     return item.id !==id;
        // })});
        this.props.deleteService(id);
    }
    onHideModal = (id,e)=>{
        // if(id!=null){
        //     this.setState({showModal:false, editId:null});
        // }else{
        //     this.setState({showModal:false});
        // }
        this.props.closeModal(id);
    }
    onAddBttnClick=(e)=>{
        e.preventDefault();
        //this.setState({showModal:true})
        this.props.openModal(null,true);
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
                    <div className="service-page">
                    
                        <header className="panel-heading">
                            Услуги
                        </header>
                        <div className="filter-panel">
                            <div className="col-md-4">
                                <FormControl bsSize="small" value={this.props.store.applyFilter==='All'? 'All': this.props.store.applyFilter} componentClass="select" placeholder="select" onChange={this.filterChange.bind(this)} >
                                <option value="All">Все</option>
                                    {this.props.store.filters.map(filter=>(
                                        <option key={filter.id} value={filter.value}>{filter.name}</option>
                                    ))}
                                </FormControl>
                            </div>
                            <div className="col-md-4">
                                    <Button onClick={(e)=>this.onAddBttnClick(e)}> Добавить</Button>
                            </div>
                            <div className="col-md-4">
                                {/* <Form inline>
                                <FormControl type="text" placeholder="Jane Doe" />
                                    <Button>Добавить</Button>
                                </Form> */}
                            </div>
                        </div>
                        <div className="gallery-grids">
                        <div className="gallery-top-grids">
                        <TransitionGroup>
                        {this.props.store.services.filter(item=>{ 
                            return this.props.store.applyFilter === 'All' ? item : item.currentFilters.includes(this.props.store.applyFilter)
                        }).map(service=>(
                            <CSSTransition 
                                key={service.id}
                                timeout={300}
                                mountOnEnter={true}
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
                             <div key={service.id} className="col-md-4 gallery-grids-left">
                                    <div className="service-grid" onClick={(e)=>this.onServiceClick(service.id,e)}>
                                        <a className="example-image-link">
                                            <img src={service.imgUrl ? service.imgUrl : process.env.PUBLIC_URL + service.img} />
                                             <div className="captn">
                                                <h4>{service.name}</h4>
                                                <p>{service.description}</p>
                                                
                                            </div> 
                                            <div className="del-circle" onClick={(e)=>this.onDelBttn(service.id,e)}>
                                            <img src={cancelImg}/>
                                            </div>
                                        </a>
                                    </div>
                             </div>
                            </CSSTransition>
                        ))}
                        </TransitionGroup>
                        </div>
                    </div>
                        <div className="clearfix"></div>
                    </div>
                    {this.props.store.showModal && (
                        <Redactserviceform
                            show={this.props.store.showModal}
                            hide={this.onHideModal}
                            editItem={this.props.store.editId}
                            change={this.changeData}
                            filters={this.props.store.filters}
                        />
                )}
                </section>
            </section>
            //   </CSSTransition>
            //   </TransitionGroup>
        );
    }
}
const mapStateToProps = (state) => {
    return { store: state.editSerivces }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        openModal : (id,switcher)=>dispatch(actions.showServiceModal(id,switcher)),
        closeModal : (incid)=>dispatch({
            type:actionStringService.SHOW_ITEM,
            showModal:false,
            id:null
        }),
        addService : (result)=>dispatch({
            type:actionStringService.ADD,
            data:result
        }),
        deleteService : (id)=>dispatch(actions.deleteService(id)),
        editService : (result)=>dispatch({
            type:actionStringService.EDIT,
            id:result.id,
            data:result
        }),
        filterService : (value)=>dispatch(actions.filterData(value))
    }
    
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Services));