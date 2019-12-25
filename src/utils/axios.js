import axios from 'axios';
import merge from 'lodash/merge'
const service = axios.create({
    baseURL: '/',
    timeout: 30 * 1000
});
// 添加一个请求拦截器
service.interceptors.request.use(config => {
        // Do something before request is sent
        // if (process.env.NODE_ENV !== 'production') {
        //     merge(config, {
        //         params: {
        //             code: **
        //         }
        //     })
        // }
        if (process.env.NODE_ENV !== 'production') {
            let { url, method, data} = config;
            let apiInfo = {
                url,
                method,
                data
            };
            console.log('[API]>>>>' + JSON.stringify(apiInfo));
        }
        merge(config, {
            params: {
                iosTimeStamp: new Date().getTime()
            }
        });
        return config;
    }, error =>
        // Do something with request error
        Promise.reject(error)
);

// 添加一个响应拦截器
service.interceptors.response.use(response => {
    const data = response.data || {};
    const { msg = '', result=[] } = data;
    if (msg.indexOf('过期') !== -1) {
        return Promise.reject(msg);
    }
    // Do something with response data
    return result;
}, error => {
    // Do something with response error
    return Promise.reject(error);
});

export default service;

