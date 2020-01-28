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
import {mapState} from 'vuex'
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
    computed:{
        ...mapState(['city'])
    },
    methods:{
        getHttp(){
            this.$http.get("/api/dataHome.json")
            .then((res)=>{
                // console.log(res);
                // console.log(res.data.data);
                const data = res.data.data;
                data.forEach((item,index)=>{
                    if(item.city==this.city){
                        this.swiperList = item.swiperList;
                        this.iconsList = item.iconsList;
                        this.hotList = item.hotList;
                        this.likeList = item.likeList;
                        this.vacationList = item.vacationList;
                    };
                })
            })
        }
    },
    mounted(){
        this.getHttp()
    }
}
</script>
<style scoped>
.home{
    background:#f5f5f5;
}
</style>