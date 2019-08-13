"use strict";

import Vue from 'vue';
import axios from "axios";
import queryString from 'querystring'


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.transformRequest = [function (data) {
    return queryString.stringify(data)
}]
let config = {
    //判断当前开发环境，切换代理配置
    baseURL: process.env.NODE_ENV === 'production' ? '/basic/' : 'api',
    timeout: 60 * 1000, // Timeout
    withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.response.use(response => {
    return response;
}, error => {
    // logger and notification;
    Notification.error({
        title: '错误',
        message: error.message
    });
    return Promise.reject(error);
});

Plugin.install = function (Vue, options) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        http: {
            get() {
                return _axios;
            }
        },
        $http: {
            get() {
                return _axios;
            }
        },
    });
};
Vue.use(Plugin)

export default Plugin;
