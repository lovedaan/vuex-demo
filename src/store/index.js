/*
 * @Author: Marte
 * @Date:   2017-06-25 17:22:56
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-06-25 19:21:56
 */

'use strict';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import * as actions from './actions.js'
import state from './state.js'
import mutations from './mutations.js'
import * as getters from './getters.js'


export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})