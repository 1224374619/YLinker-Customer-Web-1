import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Login from './views/Login.vue'
import ResetPassword from './views/ResetPassword.vue'
import ResetResult from './views/ResetResult.vue'
import Register from './views/Register.vue'
import RegisterResult from './views/RegisterResult.vue'
import UserLicense from './views/UserLicense.vue'
import JobDetail from './views/JobDetail.vue'
// import Resumes from './views/resumes.vue'
import www from './views/www.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'front',
            component: resolve => require(['./layout/front'], resolve),
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                },

                {
                    path: '/www',
                    name: 'www',
                    component: www
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/reset-password',
            name: 'reset-password',
            component: ResetPassword
        },
        {
            path: '/reset-result',
            name: 'reset-result',
            component: ResetResult
        },
        {
            path: '/register-result',
            name: 'register-result',
            component: RegisterResult
        },
        {
            path: '/user-license',
            name: 'user-license',
            component: UserLicense
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: JobDetail
        },
    ]
});
