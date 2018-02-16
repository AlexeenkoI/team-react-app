export const LOGIN_ATTEMPT = "LOGIN_ATTEMPT";
export const INITIAL_FETCH="INITIAL_FETCH";

import fetch from 'isomorphic-fetch'


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