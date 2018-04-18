import {mainSlider} from '../actions/actions';

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

export default function editMainSlide(state = initialState, action){
    switch(action.type){
        case mainSlider.SHOW_MODAL:
            console.log(action);
            return Object.assign({}, state, {
                showModal: action.showModal,
                editId: action.editId
            })
        case mainSlider.ADD_SLIDE:
            return Object.assign({}, state, {
                sliders: [
                ...state.sliders,
                    action.data
                ]
            })
        case mainSlider.DELETE_SLIDE:
            return Object.assign({}, {
                sliders: state.sliders.filter(slider => slider.id !== action.deleteId)
            })     
        case mainSlider.EDIT_SLIDE:
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
