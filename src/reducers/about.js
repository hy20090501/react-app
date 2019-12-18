import actionTypes from '../actions/actionTypes' // 引入action类型常量名

const initialState = {
    count: 1,
    list: []
}

export default function about(state = initialState, action) {
    switch(action.type) {
        case actionTypes.INCREASE:
            return {
                ...state,
                count: state.count+1
            };
        case actionTypes.DECREASE:
            return Object.assign({}, state, { count: state.count-1 })
        case actionTypes.GET_LIST:
            return Object.assign({}, state, { list: action.list })
        default:
            return state
    }
}
