import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginForm from '../components/LoginForm.vue';
import HomePage from '../components/HomePage.vue';

Vue.use(VueRouter);

var routes = [
    {
        path: '/',
        name: 'LoginForm',
        component: LoginForm,
    },
    {
        path: '/Home',
        name: 'HomePage',
        component: HomePage,
    }
]

var router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL, routes
});

export default router;