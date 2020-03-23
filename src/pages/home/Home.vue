<template>
    <div>
        <home-header></home-header>
        <home-icons></home-icons>

        <div></div>
    </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeIcons from './components/Icons'
export default{
    name:'Home',
    components:{
        HomeIcons,
        HomeHeader

    }
}
</script>

<style>

</style>