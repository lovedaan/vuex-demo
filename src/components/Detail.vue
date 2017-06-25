<template>
    <div class="detail">
        <h2>我是详情页:{{setTitle}}</h2>
        <p>点击修改state里面的count值</p>
        <input type="button" value="点击修改" @click="changeCount" />
    </div>
</template>
<script type="text/javascript">
    import {mapMutations,mapGetters} from 'vuex'
     export default{
        computed:{
            ...mapGetters([
                'setTitle'
                ])
        },
        methods:{
            changeCount(){
                //修改state的值
                this.setCount(50);
            },
            ...mapMutations({
                setCount:'SET_COUNT'
            })
        }
     }
</script>