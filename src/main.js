import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import routes from './router/index'
import store from './store/index'
import Loading from './base/loading/index.js'

Vue.use(VueRouter);
Vue.use(Loading);

const router = new VueRouter({
    routes
});

//https://github.com/mzabriskie/axios

//axios的一些配置
// 添加开始请求到请求回来之前的配置
axios.interceptors.request.use(function(config) {
    console.log('开始请求到请求回来之前');
    //让loading显示
    store.dispatch('setLoading', {
        flag: true
    });
    return config;
}, function(error) {

    return Promise.reject(error);
});

// 添加请求回来之后的配置
axios.interceptors.response.use(function(response) {
    //让loading消失
    store.dispatch('setLoading', {
        flag: false
    });
    console.log('请求回来之后');
    return response;
}, function(error) {

    return Promise.reject(error);
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})