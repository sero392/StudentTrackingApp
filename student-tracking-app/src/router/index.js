import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginForm from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import StudentsPage from '../views/StudentsPage.vue';

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
    },
    {
        path: '/Students',
        name: 'StudentPage',
        component: StudentsPage,
    }
]

var router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL, routes
});

export default router;