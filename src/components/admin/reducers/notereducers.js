import {actionServerNote,actionMailNote,actionTaskNote} from  '../helpers/actionstrings';

export function serverNotes(state={
    isFetching:true,
    count:0,
    notes:[]
},action){
    switch(action.type){
        case actionServerNote.FETCH_DATA:
            return state
        case actionServerNote.SHOWN:
            return Object.assign({}, state, {
                count:0
            })
        case actionServerNote.INITIAL_FETCH:
            return state
        case actionServerNote.FETCH_COMPLETE:
            return Object.assign({}, state, {
                isFetching: false,
                count:action.notes.length,
                notes: action.notes,
            })
        default:
            return state;
    }
}

export function mailNotes(state={
    isFetching:true,
    count:0,
    messages:[
        {id:1,message:'test',author:'habibi',date:Date.now()}
    ]
},action){
    switch(action.type){
        case actionMailNote.FETCH_DATA:
            return state
        case actionMailNote.SHOWN:
            return Object.assign({}, state, {
                count:0
            })
        case actionMailNote.INITIAL_FETCH:
            return state
        case actionMailNote.FETCH_COMPLETE:
            return Object.assign({}, state, {
                isFetching: false,
                count:action.messages.length,
                messages: action.messages,
            })
        default:
            return state;
    }
}

export function taskNotes(state={
    isFetching:true,
    count:0,
    tasks:[]
},action){
    switch(action.type){
        case actionTaskNote.FETCH_DATA:
            return state
        case actionTaskNote.SHOWN:
            return Object.assign({}, state, {
                count:0
            })
        case actionTaskNote.INITIAL_FETCH:
            return state
        case actionTaskNote.FETCH_COMPLETE:
        return Object.assign({}, state, {
            isFetching: false,
            count:action.tasks.length,
            tasks: action.tasks,
        })
        default:
            return state;
    }
}