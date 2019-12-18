import actionTypes from './actionTypes'
import * as api from '../api'

export function increase() {
    return {
    	type: actionTypes.INCREASE
	}
}

export function decrease() {
    return {
        type: actionTypes.DECREASE
    }
}

export function getList() {
    return (dispatch)=>{
        return api.getList().then(data=>{
            dispatch({
                type: actionTypes.GET_LIST,
                list: data
            })
        })
    }
}
