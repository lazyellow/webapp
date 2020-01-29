<template>
    <div class="banner">
        <div @click="showSwiper">
            <div class="banner-img">
                <img src="http://img1.qunarzz.com/sight/p0/2001/fb/fb56f57c855e8a51a3.water.jpg_600x330_4802251e.jpg" alt="">
            </div>
            <div class="banner-title">
                金海湖风景区(AAAA景区)
            </div>
        </div>

        <div class="img-swiper"
            v-show='imgSwiper'
            @click="hideSwiper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide 
                    v-for='item in bannerList' :key='item.id'>
                    <img :src="item.imgUrl" />
                </swiper-slide>
            </swiper>
                <!-- 分页器↓ -->
                <div class="swiper-pagination" slot="pagination"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgSwiper:false,
            swiperOption:{
                // 分页器-swiper地下的小圆点
                pagination: {
                    el: '.swiper-pagination',
                    // 设置分页器的计算式分式而不是小圆点
                    type:'fraction'
                },
            },
            bannerList:[
                {
                    id:"01",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/2001/fb/fb56f57c855e8a51a3.water.jpg_r_800x800_7674ef43.jpg"
                },
                {
                    id:"02",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/2001/fb/fb56f57c855e8a51a3.water.jpg_r_800x800_7674ef43.jpg"
                },
                {
                    id:"03",
                    imgUrl:"http://img1.qunarzz.com/sight/p0/2001/fb/fb56f57c855e8a51a3.water.jpg_r_800x800_7674ef43.jpg"
                }
            ]
        }
    },
    methods:{
        showSwiper(){
            this.imgSwiper=true;
        },
        hideSwiper(){
            this.imgSwiper=false;
        }
    }
}
</script>
<style lang="">
    .banner{
        position:relative;
    }
    .banner-img{
        width: 100%;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
    }
    .banner-img img{
        width:100%;
    }
    .banner-title{
        position:absolute;
        left: .3rem;
        bottom: .4rem;
        font-size: .36rem;
        color: #ffffff;
    }
    .img-swiper{
        background:#000;
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        /* 设置弹性盒子，并居中 */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-swiper img{
        width: 100%;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
        bottom:.6rem;
        color:#fff;
        font-size: .32rem;
    }
</style>    