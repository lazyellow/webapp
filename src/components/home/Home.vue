<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :swiperList='swiperList'></home-swiper>
        <home-icons :iconsList='iconsList'></home-icons>
        <home-location></home-location>
        <home-activity></home-activity>
        <home-hot :hotList='hotList'></home-hot>
        <home-like :likeList='likeList'></home-like>
        <home-vacation :vacationList='vacationList'></home-vacation>
    </div>
</template>
<script>
// 将header引入进来
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/Icons'
import HomeLocation from './pages/Location'
import HomeActivity from './pages/Activity'
import HomeHot from './pages/Hot'
import HomeLike from './pages/Like'
import HomeVacation from './pages/Vacation'
export default{
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeLocation,
        HomeActivity,
        HomeHot,
        HomeLike,
        HomeVacation
    },
    data(){
        return{
            swiperList:[],
            iconsList:[],
            hotList:[],
            likeList:[],
            vacationList:[]
        }
    },
    mounted(){
        this.$http.get("/api/dataHome.json")
            .then((res)=>{
                // console.log(res);
                // console.log(res.data.data);
                const data = res.data.data[0];
                this.swiperList = data.swiperList;
                this.iconsList = data.iconsList;
                this.hotList = data.hotList;
                this.likeList = data.likeList;
                this.vacationList = data.vacationList;
            })
    }
}
</script>
<style scoped>
.home{
    background:#f5f5f5;
}
</style>