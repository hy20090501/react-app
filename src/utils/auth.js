import * as _ from "lodash";

/**
 * 路径是否有访问权限
 * @param permission 权限列表
 * @param path 路由路径
 * @returns {boolean}
 */
export function hasPermission(permission, path) {
    let has = true;
    let permissionKey = Object.keys(permission);
    let unAllowed = [];
    if(!permissionKey.length) return true;
    permissionKey.forEach(item=>{
        if(!permission[item]) {
            unAllowed.push(item);
        }
    });
    if(unAllowed.length && unAllowed.find(item=>new RegExp("" + item + "").test(path))) {
        has = false;
    }
    return has;
}

/**
 * 是否登录
 * @param session
 * @returns {*}
 */
export function isLogin(session) {
    return !_.isNil(session);
}
