<template>
  <div id="app">
      <div class="header">
          <nav class="nav">
              <router-link to="/home">首页</router-link>
              <router-link to="/list">列表</router-link>
              <router-link to="/detail">详情</router-link>
          </nav>
      </div>
      <div class="content">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
      </div>
      <loading v-if="getLoading"></loading>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters([
        'getLoading'
      ])
  },
  data(){
    return {
      isShow:false
    }
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
ul{
    list-style:none;
}
a{
    text-decoration:none;
    color:#333;
}
img{
    border:none;
    vertical-align:top;
}
.header{
    width: 100%;
    height: 40px;
    background:#999;
    position: absolute;
    left: 0;
    top: 0;
}
.header .nav{
    width: 100%;
    display:flex;
    display:-webkit-flex;
}
.header .nav a{
    -webkit-flex:1;
    flex:1;
    height: 40px;
    line-height:40px;
    text-align: center;
    box-sizing:border-box;
    border-right: 1px solid #fff;
}
.header .nav a:last-child{
    border-right: 0;
}
.header .nav .router-link-active{
    background:yellowgreen;
}
.content{
    position: absolute;
    left: 0;
    top: 40px;
    bottom: 0;
    width: 100%;
}
.home{
    padding: 20px;
}
.home .homelist{
    border: 1px solid #000;
}
.home .homelist li{
    width: 100%;
    height: 35px;
    line-height:35px;
    border-bottom: 1px solid #000;
    text-indent:30px;
    position: relative;
}
.home .homelist li:last-child{
    border-bottom:0;
}
.home .homelist li::before{
    content: '>';
    position: absolute;
    right: 10px;
    top: 0px;
    font-size:30px;
}

/* 电影列表 */
.movielist{
    position: fixed;
    left: 0;
    top:0;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index:20;
    background:#000;
}
.movielist .movieTitle{
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    text-align: center;
    height: 40px;
    line-height:40px;
    color:#fff;
    background:#ccc;
    font-size:18px;
}
.movielist .movieTitle .icon_back{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height:40px;
    font-size:25px;
    color:yellowgreen;
    font-weight:bold;
}
.moviecon{
    position: absolute;
    left: 0;
    top: 40px;
    bottom: 0;
    right: 0;
    width: 100%;
}
.moviecon .movie-wrapper{
    padding: 15px;
}
.moviecon .movie-wrapper li{
    color:#fff;
    font-size:14px;
    line-height:36px;
    text-indent:20px;
}
.slider-enter-active,.slider-leave-active{
    transition:opacity 1s;
}
.slider-enter,.slider-leave-to{
    opacity:0;
}
</style>
