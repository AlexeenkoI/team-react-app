// Request admin methods to server api here
import fetch from 'isomorphic-fetch'

//Imitate fetch data to testing some things like preloaders/spinners
function ImitateFetch(){
    setTimeout(function(){
        return true;
    },600)
}

export function loginAttempt(data){
    console.log('sendData');
    console.log(JSON.stringify(data));
    return fetch('http://localhost:8000/apiv1/admin/login/',{
        headers: {
             //'Access-Control-Allow-Origin':'*',
            // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            // 'Access-Control-Allow-Credentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:'POST',
        body:JSON.stringify(data)
    })
}