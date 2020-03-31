<template>
    <div>
        <home-header ></home-header>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>

    </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default{
    name:'Home',
    components:{
        HomeIcons,
        HomeHeader,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return{
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res = res.data
            if( res.ret && res.data ){
                const data = res.data
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted(){
        this.getHomeInfo()
    }
}
</script>

<style>

</style>