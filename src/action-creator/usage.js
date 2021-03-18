import axios from 'axios'
import { GET_USAGE } from '../constants'

const receiveUsage = (usage) => {
    return {
        type: GET_USAGE,
        usage: usage
    }
}

export const getUsage = () => {
    return function (dispatch) {
        axios.get('https://my-json-server.typicode.com/reversegremlin/testapi/daily_usage')
        .then(res => res.data)
        .then(usage => {
            dispatch(receiveUsage(usage))
        })
    }
}