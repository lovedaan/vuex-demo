/*
 * @Author: Marte
 * @Date:   2017-06-25 17:23:04
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-06-25 19:19:38
 */

'use strict';

export const setCount = (state) => {
    return state.count;
}

export const setTitle = (state) => {
    return state.title;
}

export const getLoading = (state) => {
    return state.isShowLoading;
}