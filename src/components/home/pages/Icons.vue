<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <!-- for循环page这个计算属性，是只有两个数组pages[0]和pages[1]，所以只生成了两个swiper-slide -->
            <swiper-slide v-for='(item,key) in page' :key='key'>
                <!-- 再将上面的item即pages[0],pages[1]里的值一个个遍历出来生成单独的div -->
                <div class="icons-item" v-for="i in item" :key="i.id">
                    <img :src="i.imgUrl" />
                    <p>{{i.title}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    props:['iconsList'],
    data() {
        return {
        swiperOption:{},
        // iconsList: [
        //     {
        //     id: "01",
        //     imgUrl:
        //         "https://youimg1.c-ctrip.com/target/100o0s000000hmcopBF88.png",
        //     title: "景点门票"
        //     },
        //     {
        //     id: "02",
        //     imgUrl:
        //         "https://youimg1.c-ctrip.com/target/100o0s000000hmcopBF88.png",
        //     title: "必游榜单"
        //     },
        //     {
        //     id: "03",
        //     imgUrl:
        //         "https://youimg1.c-ctrip.com/target/100o0s000000hmcopBF88.png",
        //     title: "夏日玩水"
        //     },
        //     {
        //     id: "04",
        //     imgUrl:
        //         "https://youimg1.c-ctrip.com/target/100o0s000000hmcopBF88.png",
        //     title: "主题乐园"
        //     },
        //     {
        //     id: "05",
        //     imgUrl:
        //         "https://youimg1.c-ctrip.com/target/100o0s000000hmcopBF88.png",
        //     title: "动植物园"
        //     },
        //     {
        //     id: "06",
        //     imgUrl:
        //         "https://youimg1.c-ctrip.com/target/100o0s000000hmcopBF88.png",
        //     title: "故宫"
        //     },
        //     {
        //     id: "07",
        //     imgUrl:
        //         "https://youimg1.c-ctrip.com/target/100o0s000000hmcopBF88.png",
        //     title: "一日游"
        //     },
        //     {
        //     id: "08",
        //     imgUrl:
        //         "https://youimg1.c-ctrip.com/target/100o0s000000hmcopBF88.png",
        //     title: "公园"
        //     },
        //     {
        //     id: "09",
        //     imgUrl:
        //         "https://youimg1.c-ctrip.com/target/100o0s000000hmcopBF88.png",
        //     title: "游乐园"
        //     },
        //     {
        //     id: "10",
        //     imgUrl:
        //         "https://youimg1.c-ctrip.com/target/100o0s000000hmcopBF88.png",
        //     title: "全部玩乐"
        //     }
        // ]
        };
    },
    // 定义计算属性
    computed: {
        // 栏目分页器
        page() {
            // 定义一个二维数组pages来存放返回值
            let pages = [];
            // 循环遍历iconslist数组，item是每一个的值，index是数组的索引
            this.iconsList.forEach((item, index)=>{
                // 用索引/8然后取整数，0-7取整是0，8-15取整是1。取正的数用作定义数组下标：pages[0],pages[1]
                let idx = Math.floor(index/8);
                if (!pages[idx])   //如果这个数组还为存在就创建该数组
                    pages[idx] = [];
                pages[idx].push(item);     //将遍历的值放进二维数组pages里
            });
            return pages;
        }
    }
};
</script>
<style scoped lang='stylus'>
@import '~css/common.styl'
.icons {
  width: 100%;
  overflow: hidden;
  background: #fff;
}
.icons-item {
  width: 25%;
  padding-bottom: 25%;
  height: 0;
  float: left;
  /* background: #ccc; */
}
.icons-item img {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.2rem;
}
.icons-item p {
  margin-top: 0.1rem;
  font-size: 0.28rem;
  text-align: center;
  color: #212121;
  textOverflow();
}
</style>