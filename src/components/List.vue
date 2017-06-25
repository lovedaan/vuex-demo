<template>
    <div class="list">
        <h2>
            我是列表页
        </h2>
        <p>来自首页过来的数据:{{setCount}}</p>
        <input type="button" value="异步请求" @click="asyncSub" />
    </div>
</template>
<script type="text/javascript">
    import {mapGetters,mapActions} from 'vuex'
     export default {
        data(){
            return {
                count:''
            }
        },
        computed:{
            ...mapGetters([
                    'setCount',
                    'title'
                ])
        },
        methods:{
            asyncSub(){
                this.setTitle({
                    index:1
                });
            },
            ...mapActions([
                'setTitle'
            ])
        }
     }
</script>