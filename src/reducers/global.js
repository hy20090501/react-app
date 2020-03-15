import actionTypes from "../actions/actionTypes";

const initialState = {
    session: null, //session: token
    //菜单权限
    permission: {
        home: true,
        about: true,
        topics: true
    },
    menuList: [
        {
            url: 'home',
            name: 'Home',
            icon: 'home'
        },
        {
            url: 'about',
            name: 'About',
            icon: 'user'
        },
        {
            url: 'topics',
            name: 'Topics',
            icon: 'star'
        }
    ]
}

export default function global(state = initialState, action) {
    switch(action.type) {
        case actionTypes.SET_SESSION:
            return {
                ...state,
                session: action.data
            };
        case actionTypes.GET_MENU_LIST:
            return {
                ...state,
                menuList: action.list
            };
        default:
            return state
    }
}
