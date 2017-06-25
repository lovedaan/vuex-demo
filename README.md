# vuex-demo 练习

vuex是vue的状态管理器，开始接触的时候是比较难理解。第一步先定义state数据，也就是我们在vuex要维护的数据，全局共享，types.js 定义我们每次操作的mutations的方法名字，getters.js是返回state的值，actions.js是我们需要异步请求或批量处理mutations时使用。使用vuex就是定义数据(state)，获取数据(getters)，修改设置数据(mutations),修改数据只能通过mutations。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

