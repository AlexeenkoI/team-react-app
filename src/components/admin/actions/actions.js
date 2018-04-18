export const LOGIN_ATTEMPT = "LOGIN_ATTEMPT";
export const INITIAL_FETCH="INITIAL_FETCH";

export const mainSlider = {
    SHOW_MODAL : 'SHOW_MODAL',
    ADD_SLIDE : 'ADD_SLIDE',
    DELETE_SLIDE : 'DELETE_SLIDE',
    EDIT_SLIDE : 'EDIT_SLIDE' 
}

export function showModal(id,switcher){
    return {
        type:mainSlider.SHOW_MODAL,
        showModal:switcher,
        editId : id
    }
}

export function closeModal(id){
    return{
        type : mainSlider.SHOW_MODAL,
        showModal:false,
        editId:null
    }
}
export function changeData(result){
    return{
        type:mainSlider.EDIT_SLIDE,
        id: result.id,
        data:result
    }
}

export function addData(result){
    return{
        type:mainSlider.ADD_SLIDE,
        data:result
    }
}

export function deleteData(incId){
    return{
        type:mainSlider.DELETE_SLIDE,
        deleteId:incId
    }
}

//import fetch from 'isomorphic-fetch'


export function loginAttempt(login,password){
    return({
        type:LOGIN_ATTEMPT,
        data:{login:login,password:password}
    })
}

export function initialFetch(data){
    return({
        type:INITIAL_FETCH,

    })
}

