import axios from 'axios'

const GET_ARTICLES='GET_ARTICLES'
const GET_ARTICLES_FULFILLED = 'GET_ARTICLES_FULFILLED'

let initialState = {
    data:[]
}


export default function recieveReducer(state=initialState,action){
    switch(action.type){
        case GET_ARTICLES_FULFILLED:
        return{...state,data: action.payload.data}
        default:
        return state
    }
}

export function getArticles(){
    return{
        type: GET_ARTICLES,
        payload: axios.get(`/api/get-articles`)
    }
}