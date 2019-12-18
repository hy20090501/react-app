import actionTypes from './actionTypes'
import * as api from '../api'


export function getMenuList() {
	debugger
    return (dispatch)=>{
        return api.getMenuList().then(data=>{
            dispatch({
                type: actionTypes.GET_MENU_LIST,
                list: data
            })
        })
    }
}
