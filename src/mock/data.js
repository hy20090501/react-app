
export default {
    login: () => {
        return {
            "code": "200",
            "result": {
                token: '9284924829438294'
            }
        }
    },
    getList: () => {
        return {
            "code": "200",
            "result": [
                {
                    id: 1,
                    name: 'lucy'
                },
                {
                    id: 2,
                    name: 'jack'
                }
            ]
        }
    },
    getPermissionList: () => {
        return {
            code: "200",
            result: [
                {
                    key: "about",
                    hasPermission: true
                },
                {
                    key: "topics",
                    hasPermission: false
                }
            ]
        }
    },
    getMenuList: () => {
        return {
            "code": "200",
            "result": [
                {
                    url: 'home',
                    name: 'Home'
                },
                {
                    url: 'about',
                    name: 'About'
                },
                {
                    url: 'topics',
                    name: 'Topics'
                }
            ]
        }
    }
}
