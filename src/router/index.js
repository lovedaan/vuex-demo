/*
 * @Author: Marte
 * @Date:   2017-06-25 17:11:07
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-06-25 17:21:24
 */

'use strict';
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Detail from '../components/Detail.vue'

const routes = [{
    path: '*',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/list',
    component: List
}, {
    path: '/detail',
    component: Detail
}];

export default routes