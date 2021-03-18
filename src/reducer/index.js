import { combineReducers } from 'redux'
import inventoryReducer from './inventoryReducer'
import productsReducer from './productsReducer'
import usageReducer from './usageReducer'
import childrenReducer from './childrenReducer'

export default combineReducers({
    inventory: inventoryReducer,
    products: productsReducer,
    usage: usageReducer,
    children: childrenReducer
})