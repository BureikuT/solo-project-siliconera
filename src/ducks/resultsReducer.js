import axios from 'axios'

const GET_RESULTS = 'GET_RESULTS'
const GET_RESULTS_FULFILLED = 'GET_RESULTS_FULFILLED'

const initialState = {
    data: []
}

export default function resultsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RESULTS_FULFILLED:
            return { ...state, data: action.payload }
        default:
            return state
    }

}

export function getResults(data) {
    return {
        type: GET_RESULTS_FULFILLED,
        payload: data
    }
}
