import axios from 'axios'
import { GET_INVENTORY } from '../constants'

const receiveInventory = (inventory) => {
    return {
        type: GET_INVENTORY,
        inventory: inventory
    }
}

export const getInventory = () => {
    return function (dispatch) {
        axios.get('https://my-json-server.typicode.com/reversegremlin/testapi/inventory')
        .then(res => res.data)
        .then(inventory => {
            dispatch(receiveInventory(inventory))
        })
    }
}