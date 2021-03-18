import { GET_USAGE } from '../constants'

const initialState  = {
    usage : {}
}

export default ( state = initialState, action) => {
    switch(action.type) {
        case GET_USAGE : 
        return {...state, usage: action.usage}
        default: 
        return state
    }
    
}