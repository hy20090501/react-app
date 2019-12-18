import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA, GETTOPMENU, GETLEFTMENU } from '../constants'  // 引入action类型名常量
import 'whatwg-fetch'  // 可以引入fetch来进行Ajax

// 这里的方法返回一个action对象
export const increase = n => {
	return {
		type: INCREASE,
		amount: n
	}
}

export const decrease = n => {
	return {
		type: DECREASE,
		amount: n
	}
}

export const refreshData = () => {
	return {
		type: REFRESHDATA
	}
}

export const getSuccess = (json) => {
	return {
		type: GETSUCCESS,
		json
	}
}
export const getTopMenuSuccess = (json) => {
	return {
		type: GETTOPMENU,
		json
	}
}
export const getLeftMenuSuccess = (json) => {
	return {
		type: GETLEFTMENU,
		json
	}
}
export async function syncFetch() {
    fetch('/api/menu.json')
        .then((res) => {
            // console.log(res.status);
            return res.json()
        })
        // .then((mock) => {
        //     resolve(mock);
        // })
        .catch((e) => { console.log(e.message) })
}
// function fetchPosts() {
//     return dispatch => {
//         return fetch('mock.json')
//             .then((res) => { console.log(res.status); return res.json() })
//             .then((mock) => {
//                 dispatch(getSuccess(mock))
//             })
//             .catch((e) => { console.log(e.message) })
//         }
// }
function fetchPosts(isSub,type) {
	// console.log('fetch Possts ..')
	let reqStr = '/mock/menu.json';
	if(isSub) {
		if(type==='employee'){
			reqStr = '/mock/employee_menu.json';
		} else if(type === 'goods') {
			reqStr = '/mock/goods_menu.json';
		}
		// reqStr = '/mock/sub_menu.json';
	}
	debugger
	console.log(reqStr)
	return dispatch => {
		return fetch(reqStr)
			.then((res) => { /*console.log("res:" + res.status);*/ return res.json() })
			.then((data) => {
				debugger
				if(isSub){
					dispatch(getLeftMenuSuccess(data))
				} else {
					dispatch(getTopMenuSuccess(data))
				}
			})
			.catch((e) => { console.log(e.message) })
		}
}



// 这里的方法返回一个函数进行异步操作
export function fetchPostsIfNeeded(isSub, type) {
	debugger
	// 注意这个函数也接收了 getState() 方法
	// 它让你选择接下来 dispatch 什么
	return (dispatch, getState) => {
		debugger
		// console.log(getState())
		// console.log('**********************')
		return dispatch(fetchPosts(isSub, type))
	}
}

// 这里的方法返回一个函数进行异步操作
export function updateSubMenuWhenClick(isSub, type) {

	// 注意这个函数也接收了 getState() 方法
	// 它让你选择接下来 dispatch 什么
	return (dispatch, getState) => {
		// console.log(getState())
		// console.log('**********************')
		return dispatch(fetchPosts(isSub, type))
	}
}
