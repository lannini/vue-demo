<template>
    <div>
        <div class="header">
            <div class="header-left">返回</div>
            <div class="header-input"><span>&#xe632;</span>输入城市/景点/游玩主题</div>
            <div class="header-right">城市</div>
        </div>
    </div>

</template>

<script>
    export default{
        name:'HomeHeader'
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl";
    //@import "styles/varibles.styl";
.header
    display:flex
    line-height:.86rem
    background:$bgColor
    color:#fff
    .header-left
        width:.64rem
        float:left
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