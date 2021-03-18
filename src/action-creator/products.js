import axios from 'axios'
import { GET_PRODUCTS } from '../constants'

const receiveProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        products: products
    }
}

export const getProducts = () => {
    return function (dispatch) {
        axios.get('https://my-json-server.typicode.com/reversegremlin/testapi/products')
        .then(res => res.data)
        .then(products => {
            dispatch(receiveProducts(products))
        })
    }
}