/*
 * @Author: Marte
 * @Date:   2017-06-25 19:08:09
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-06-25 19:14:00
 */

'use strict';
import loadingView from './loading.vue'

const loading = {
    install(Vue) {
        Vue.component('loading', loadingView);
    }
}

export default loading