import Vue from 'vue';
import VueRouter from 'vue-router';

// router pages
import Home from './routes/home/home.vue';
import App from './App.vue';

const routes = [
    { path: '/', name: '', component: Home }
];

Vue.use(VueRouter);

/*
    initiate vue routing,
    without this use function routing would not work 
*/

const router = new VueRouter({ 
    routes,
    mode: 'history'
 });

const app = new Vue({
    router, 
    render: h => h(App)
}).$mount('#app');