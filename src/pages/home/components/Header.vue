<template>
    <div>
        <div class="header">
            <div class="header-left">
                <div class="iconfont back-icon">&#xe624;</div>
            </div>
            <div class="header-input">
                <div class="iconfont  back-icon">&#xe744;</div>
                输入城市/景点/游玩主题
            </div>
            <div class="header-right">
                <div class="iconfont ">&#xe673;</div>
                城市</div>
        </div>
    </div>

</template>

<script>
    export default{
        name:'HomeHeader'
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl";
.header
    display:flex
    line-height:.86rem
    background:$bgColor
    color:#fff
    .header-left
        width:.64rem
        float:left
        .back-icon
            text-algin:left
            font-size:.4rem
    .header-input
        flex:1
        line-height:.64rem
        height:.64rem
        margin-top:.12rem
        margin-left:.2rem
        padding-left:.2rem
        background:#fff
        border-radius:.1rem
        color:#ccc
    .header-right
        width:1.24rem
        float:right
        text-align:center
        .arrow-icon
            margin-left:.1rem
            font-size:.24rem
</style>