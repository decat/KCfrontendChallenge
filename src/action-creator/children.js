import axios from 'axios'
import { GET_CHILDREN } from '../constants'

const receiveChildren = (children) => {
    return {
        type: GET_CHILDREN,
        children: children
    }
}

export const getChildren = () => {
    return function (dispatch) {
        axios.get('https://my-json-server.typicode.com/reversegremlin/testapi/children')
        .then(res => res.data)
        .then(children => {
            dispatch(receiveChildren(children))
        })
    }
}