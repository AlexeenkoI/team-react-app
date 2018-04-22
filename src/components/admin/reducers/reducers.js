//import * as actions from '../actions/actions';
import {actionString, actionStringService,actionDashboard,loginStrings} from  '../helpers/actionstrings';

import { combineReducers } from 'redux';

const initialState = {
        showModal:false,
        sliders:[
            {id:1,name : 'Михаил',img:'/Miha.jpg',position:'test',descripton:'test'},
            {id:2,name : 'Юра',img:'/Yura.jpg',position:'test2',descripton:'test2'},
            {id:3,name : 'Игорь',img:'/Igor2.jpg',position:'test3',descripton:'test3'},
        ],
        editId:null
}

export function editMainSlide(state = initialState, action){
    switch(action.type){
        case actionString.SHOW_ITEM:
            console.log('first reducer')
            console.log(action);
            return Object.assign({}, state, {
                showModal: action.showModal,
                editId: action.editId,
            })
        case actionString.ADD:
            return Object.assign({}, state, {
                sliders: [
                ...state.sliders,
                    action.data
                ]
            })
        case actionString.DELETE:
            return Object.assign({},state,{
                sliders: state.sliders.filter(slider => slider.id !== action.deleteId)
            })     
        case actionString.EDIT:
        return Object.assign({},state,{
            sliders: state.sliders.map( slide =>{
                if(slide.id === action.id){
                    slide = action.data
                }
                return slide
            })
        })
        default:
            return state

    }
}

const initialServiceState={
    filters:[
        {id:0,name:"Web",value:"Web"},
        {id:1,name:"Desktop",value:"Desktop"},
        {id:2,name:"Mobile",value:"Mobile"},
        {id:3,name:"Service",value:"Service"},
    ],
    services:[
        {id:0,name:"Веб Интерфейс",description:"dasdasd",img:"/portfolio/01.jpg",currentFilters:["Web"]},
        {id:1,name:"Десктопные приложения",description:"asdasd2",img:"/portfolio/02.jpg",currentFilters:["Desktop"]},
        {id:2,name:"Создание сервисов",description:"asdasdas3",img:"/portfolio/03.jpg",currentFilters:["Service"]},
        {id:3,name:"Мобильная разработка",description:"asdasda4",img:"/portfolio/04.jpg",currentFilters:["Mobile"]},
        {id:4,name:"Индивидуальный дизайн",description:"asdasda5",img:"/portfolio/05.jpg",currentFilters:["Web","Desktop"]},
        {id:5,name:"Индивидуальный дизайн мобильного приложения",description:"asdasda6",img:"/portfolio/06.jpg",currentFilters:["Mobile"]},
        {id:6,name:"Создание тех задания",description:"asdasda7",img:"/portfolio/07.jpg",currentFilters:["Service"]},
    ],
    editId:null,
    showModal:false,
    applyFilter:'All'
};

export function editSerivces(state = initialServiceState,action){
    switch(action.type){
        case actionStringService.SHOW_ITEM:
            return Object.assign({}, state, {
                showModal: action.showModal,
                editId: action.editId,
            })

        case actionStringService.ADD :
            return Object.assign({}, state, {
                services: [
                ...state.services,
                    action.data
                ]
            })
        case actionStringService.DELETE :
            return Object.assign({},state,{
                services: state.services.filter(service => service.id !== action.deleteId)
            })     
        case actionStringService.EDIT :
        console.log(action);
            return Object.assign({},state,{
                services: state.services.map( service =>{
                    if(service.id === action.id){
                        service = action.data
                    }
                    return service
                })
            })
        case actionStringService.FILTER :
            return Object.assign({}, state, {
                applyFilter:action.filter,
                showModal: action.showModal,
                editId: action.editId,
            })
        default:
            return state
    }
}

export function dashBoard(state={
    //user:{id:1,name:'Игорь',}
    fetching:true
},action){
    switch(action.type){
        case actionDashboard.INITIAL_FETCH:
            return state
        case actionDashboard.FETCH_COMPLETE:
            return Object.assign({}, state, {
                fetching:false,
                data:action.data
            })
        default:
            return state
    }
}
export function logData(state={
    isLogged:false
},action){
    switch(action.type){
        case  loginStrings.LOGIN_ATTEMPT:
            return state
        case loginStrings.LOGIN_SUCCESS:
            console.log('change to log');
            return Object.assign({}, state, {
                isLogged:true,
                data:action.data
            })
        case loginStrings.LOGIN_ERROR:
            return state
        default:
            return state;
    }

}
