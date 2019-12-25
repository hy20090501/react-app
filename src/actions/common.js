import actionTypes from './actionTypes'
import * as api from '../api'

export function setSession(data) {
    return (dispatch)=>{
        dispatch({
            type: actionTypes.SET_SESSION,
            data: data
        })
    }
}

export function getMenuList() {
    return (dispatch)=>{
        return api.getMenuList().then(data=>{
            dispatch({
                type: actionTypes.GET_MENU_LIST,
                list: data
            })
        })
    }
}
