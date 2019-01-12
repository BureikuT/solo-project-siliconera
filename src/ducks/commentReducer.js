const HANDLE_INPUT_CHANGE ='HANDLE_INPUT_CHANGE'
const HANDLE_RESET = 'HANDLE_RESET'


const initialState = {
    comment: ''
}

export default function commentReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_INPUT_CHANGE:
            return Object.assign({}, state, {
                comment: action.payload.value
            })
        case HANDLE_RESET:
            return Object.assign({}, state, {
                comment: ''
            })
        default:
            return state

    }
}

export function handleInputChange(comment) {
 
    return {
        type: HANDLE_INPUT_CHANGE,
        payload: { value: comment }
    }
}

export function resetState(obj) {
    return {
        type: HANDLE_RESET
    }
}
