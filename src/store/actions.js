/*
 * @Author: Marte
 * @Date:   2017-06-25 17:23:04
 * 处理异步请求
 * 和批量处理mutations
 *
 */
'use strict';
import axios from 'axios'
import * as types from './types.js'
export const setTitle = ({
    commit,
    state
}, {
    index
}) => {
    if (index == 1) {
        axios.get('./data/data.json').then((res) => {
            console.log(res.data);
            commit(types.SET_TITLE, res.data.name);
        });
    } else if (index == 2) {

    }
}

export const setLoading = ({
    commit,
    state
}, {
    flag
}) => {
    commit(types.SET_LOADING, flag)
}