import { GET_INVENTORY, UPDATE_INVENTORY, DELETE_INVENTORY } from '../constants'

const initialState  = {
    inventory : {}
}

export default ( state = initialState, action) => {
    switch(action.type) {
        case GET_INVENTORY : 
        return {...state, inventory: action.inventory}
        default: 
        return state
    }
    
}