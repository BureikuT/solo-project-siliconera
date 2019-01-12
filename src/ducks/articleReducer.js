import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';

const HANDLE_RESET = 'HANDLE_RESET'
const HANDLE_CHANGE = 'HANDLE_CHANGE'
const HANDLE_LOCATION_CHANGE = 'HANDLE_LOCATION_CHANGE'
const HANDLE_SYSTEMS_CHANGE = 'HANDLE_SYSTEMS_CHANGE'
const HANDLE_PREVIEW_CHANGE = 'HANDLE_PREVIEW_CHANGE'
const HANDLE_BODY_CHANGE = 'HANDLE_BODY_CHANGE'


const initialState = {
    title: '',
    previewImage: '',
    image: '',
    previewSummary: '',
    article: '',
    systems: {
        threeDs: false,
        switch: false,
        ps4: false,
        ps3: false,
        vita: false,
        psp: false,
        ios: false,
        xOne: false,
        x360: false,
        interviews: false
    },
    locations: {
        japan: false,
        northAmerica: false,
        europe: false
    }
}

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_CHANGE:
            return Object.assign({}, state, {
                [action.payload.property]: action.payload.value
            })
        case HANDLE_PREVIEW_CHANGE:
            return Object.assign({}, state, {
                previewSummary: action.payload.value
            })
            case HANDLE_BODY_CHANGE:
            return Object.assign({}, state,{
              article: action.payload.value  
            })
        case HANDLE_RESET:
            return Object.assign({}, state, {
                title: '',
                previewImage: '',
                image: '',
                previewSummary: '',
                article: '',
                systems: {
                    threeDs: false,
                    switch: false,
                    ps4: false,
                    ps3: false,
                    vita: false,
                    psp: false,
                    ios: false,
                    xOne: false,
                    x360: false,
                    interviews: false
                },
                locations: {
                    japan: false,
                    northAmerica: false,
                    europe: false
                }
            })
        case HANDLE_LOCATION_CHANGE:
            const updatedLocations = { ...state.locations, [action.payload]: !state.locations[action.payload] }
            return Object.assign({}, state, {
                locations: updatedLocations
            })
        case HANDLE_SYSTEMS_CHANGE:
            const updatedSystems = { ...state.systems, [action.payload]: !state.systems[action.payload] }
            return Object.assign({}, state, {
                systems: updatedSystems
            })
        case HANDLE_RESET:
            return Object.assign({}, state, {
                title: '',
                previewImage: '',
                image: '',
                previewSummary: '',
                article: '',
                systems: {
                    threeDs: false,
                    switch: false,
                    ps4: false,
                    ps3: false,
                    vita: false,
                    psp: false,
                    ios: false,
                    xOne: false,
                    x360: false,
                    interviews: false
                },
                locations: {
                    japan: false,
                    northAmerica: false,
                    europe: false
                }
            })
        default:
            return state
    }
}

export function handlePreviewChange(preview) {
console.log(preview)

return{
    type: HANDLE_PREVIEW_CHANGE,
    payload:{value: preview}
}
}

export function handleBodyChange(body){
    return{
        type: HANDLE_BODY_CHANGE,
        payload:{value: body}
    }
}

export function handleInputChange(event, property) {
    console.log(property, event.target.value)
    event.preventDefault()

    return {
        type: HANDLE_CHANGE,
        payload: { value: event.target.value, property }
    }
}

export function handleLocationsChange(location) {

    return {
        type: HANDLE_LOCATION_CHANGE,
        payload: location
    }
}

export function handleSystemsChange(system) {

    return {
        type: HANDLE_SYSTEMS_CHANGE,
        payload: system
    }
}

export function resetState(obj) {
    return {
        type: HANDLE_RESET
    }
}
