<template>
    <div>
        <div class="header">
            <div class="header-left">111</div>
            <div class="header-input">222</div>
            <div class="header-right">333</div>
        </div>
    </div>

</template>

<script>
    export default{
        name:'HomeHeader'
    }
</script>

<style lang="stylus" scoped>
.header
    display:flex
    line-height:.86rem
    background:#00bcd4
    color:#fff
    .header-left
        width:.64rem
        float:left
        .header-right
            width:1.24rem
            float:right
</style>