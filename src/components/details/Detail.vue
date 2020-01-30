<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div style="height:2000px;"></div>
    </div>
</template>
<script>
import DetailBanner from './pages/Banner'
import DetailHeader from './pages/Header'
export default {
    components:{
        DetailBanner,
        DetailHeader
    },
    //点击进入页面后让页面在顶部开始显示，主要是因为app.vue中的keep-alive的缓存机制
    activated(){
        document.documentElement.scrollTop = 0;
    }
}
</script>
<style lang="">
    
</style>