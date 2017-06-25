/*
 * @Author: Marte
 * @Date:   2017-06-25 17:23:04
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-06-25 19:18:48
 */

'use strict';
import * as types from './types.js'

const mutations = {
    [types.SET_COUNT](state, count) {
        state.count = count;
    },
    [types.SET_TITLE](state, index) {
        state.title = index;
    },
    [types.SET_LOADING](state, flag) {
        state.isShowLoading = flag;
    }
};

export default mutations