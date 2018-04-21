import {actionString, actionStringService, actionServerNote, actionMailNote,actionTaskNote} from  '../helpers/actionstrings';


/* Slider actions */
export function showModal(id,switcher){
    return {
        type:actionString.SHOW_ITEM,
        showModal:switcher,
        editId : id
    }
}

export function closeModal(id){
    return{
        type : actionString.SHOW_ITEM,
        showModal:false,
        editId:null
    }
}
export function changeData(result){
    return{
        type:actionString.EDIT,
        id: result.id,
        data:result
    }
}

export function addData(result){
    return{
        type:actionString.ADD,
        data:result
    }
}

export function deleteData(incId){
    return{
        type:actionString.DELETE,
        deleteId:incId
    }
}

/* Services actions */
export function filterData(filterType){
    return{
        type:actionStringService.FILTER,
        filter:filterType
    }
}

export function showServiceModal(id,switcher){
    return {
        type:actionStringService.SHOW_ITEM,
        showModal:switcher,
        editId : id
    }
}

export function deleteService(id){
    return{
        type:actionStringService.DELETE,
        deleteId:id
    }
}

/*ServerNotes component actions */

export function recieveServerNotes(data){
    console.log('recieved');
    return{
        type:actionServerNote.FETCH_COMPLETE,
        notes:[
            {id:1,message:'В процессе',type:'info'},
            {id:2,message:'Завершено с ошибкой',type:'danger'},
            {id:3,message:'Успешная операция',type:'success'}
        ]
    }
}

export function fetchServerNotes(){
    return function(dispatch){
        setTimeout(function(){
            return dispatch(recieveServerNotes())
        },1500)
    }
}

/* MailNotes component actions */

export function recieveMailNotes(data){
    console.log('recieved mails');
    return{
        type:actionMailNote.FETCH_COMPLETE,
        messages:[
            {id:1,message:'test',author:'habibi',date:Date.now()},
            {id:2,message:'test',author:'habibi',date:Date.now()},
            {id:3,message:'test',author:'habibi',date:Date.now()}
        ]
    }
}

export function fetchMailNotes(){
    return function(dispatch){
        setTimeout(function(){
            return dispatch(recieveMailNotes())
        },2000)
    }
}

/* Task notes component actions */

export function recieveTaskNotes(data){
    console.log('recieved tasks');
    return{
        type:actionTaskNote.FETCH_COMPLETE,
        tasks:[
            {id:1,task:'Закончить 1 компонент',text:'законнекчен в тесте'},
            {id:2,task:'Закончить 2 компонент',text:'законнекчен в тесте'},
            {id:3,task:'Закончить 3 компонент',text:'законнекчен в тесте'}
        ]
    }
}

export function fetchTaskNotes(){
    return function(dispatch){
        console.log('fetching tasks');
        setTimeout(function(){
            console.log('timeout-ended-mails');
            return dispatch(recieveTaskNotes())
        },2500)
    }
}


//import fetch from 'isomorphic-fetch'


// export function loginAttempt(login,password){
//     return({
//         type:LOGIN_ATTEMPT,
//         data:{login:login,password:password}
//     })
// }

// export function initialFetch(data){
//     return({
//         type:INITIAL_FETCH,

//     })
// }

