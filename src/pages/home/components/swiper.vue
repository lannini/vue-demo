<template>
    <div class="wrapper">
    <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>
<script>
    export default{
        name:'HomeSwiper',
        data:function () {
           return{
               swiperOption:{
                   pagination:'swiper-pagination'
               }
           }
        }
    }
</script>
<style lang="stylus" scoped>
    .wrapper
        overflow:hidden
        width:100%
        height:0
        padding-bottom:31.25%
        background:#eee
        .swiper-img
            width:100%

</style>