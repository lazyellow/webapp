<template>
  <div class='header-swiper'>
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide 
        v-for='item in swiperList' :key='item.id'>
          <img :src="item.imgUrl" />
      </swiper-slide>
      <!-- 分页器小圆点↓ -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/javascript">
export default {
    data(){
        return{
            swiperList:[
                {
                    id:"01",
                    imgUrl:require("@/assets/img/swiper1.jpg")
                },
                {
                    id:"02",
                    imgUrl:require("@/assets/img/swiper2.jpg")
                },
                {
                    id:"03",
                    imgUrl:require("@/assets/img/swiper3.jpg")
                }
            ],
            swiperOption:{
                // 分页器-swiper地下的小圆点
                pagination: {
                    el: '.swiper-pagination'
                },
                // 轮播
                loop:true
            }
        }
    }
};
</script>
<style type="text/css">

    .header-swiper{
        width: 100%;
        height: 2rem;
        backgrond:#ccc;

        /* 解决当图片还没加载出来之前，有个背景色填充占位，防掉块现象 */
        /* background:#ccc;
        height:0; */
        /* 因为高为0，padding根据宽375来计算百分比，26.67%=100px */
        /* padding-bottom:60%; */
    }

    .header-swiper .swiper-wrapper{
        width:100%;
        height:2rem;
    }

    .header-swiper img{
        width: 100%;
        height: 100%;
    }

    .header-swiper >>> .swiper-pagination-bullet-active{
        background:#fff;
    }
</style>