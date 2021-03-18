import { GET_CHILDREN } from '../constants'

const initialState  = {
    children : {}
}

export default ( state = initialState, action) => {
    switch(action.type) {
        case GET_CHILDREN : 
        return {...state, children: action.children}
        default: 
        return state
    }
    
}