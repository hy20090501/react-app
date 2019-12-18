// reducers/count.js
import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA, GETTOPMENU, GETLEFTMENU } from '../constants' // 引入action类型常量名

// 初始化state数据
const initialState = {
    menuList: [],
    leftMenuList: []
}

// 通过dispatch action进入
export default function update(state = initialState, action) {

    // 根据不同的action type进行state的更新
    switch(action.type) {
        case INCREASE:
            return Object.assign({}, state, { number: state.number + action.amount })
        case DECREASE:
            return Object.assign({}, state, { number: state.number - action.amount })
        case GETSUCCESS:
            return Object.assign({}, state, { data: action.json })
        case GETTOPMENU:
            // console.log('******************** GETTOPMENU *****************' + action.json);
            // Object.assign({}, state, { menuList: action.json })
            // console.log("********************state menuList:" + state.menuList);
            return Object.assign({}, state, { menuList: action.json })
        case GETLEFTMENU:
            return Object.assign({}, state, { leftMenuList: action.json })
        case REFRESHDATA:
            return Object.assign({}, state, { data: [] })
        default:
            return state
    }
}
