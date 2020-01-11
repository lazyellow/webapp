<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>
<script>
// 将header引入进来
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/icons'
export default{
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>
<style</style>