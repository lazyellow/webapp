<template>
  <div ref="container" class="container">
      <div>
        <!--hot-->
        <div class="hot">
            <div class="hot-title">热门城市</div>
            <ul class="hot-list">
                <li class="hot-item" 
                    v-for="item in hotCities" :key="item.id"
                    @click='changeCityName(item.name)'>
                    {{item.name}}
                </li>
            </ul>
        </div>
        <!--sort-->
        <div class="sort">
            <div class="sort-title">
                字母排序
            </div>
            <ul class="sort-list">
                <li class="sort-item"
                    v-for='(val,key) in cities'
                    @click='changeSort(key)'>
                    {{key}}
                </li>
            </ul>
        </div>
        <!--list-->
        <div class="list">
            <div v-for="(val,key) in cities"
                :ref='key'>
                <div class="list-title">{{key}}</div>
                <ul class="list-msg">
                <li class="list-item" 
                    v-for="item in val" :key="item.id"
                    @click='changeCityName(item.name)'>
                    {{item.name}}
                </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    props: ["hotCities","cities"],
    data(){
        return{
            scroll:''
        }
    },
    mounted(){
        let container = this.$refs['container'];
        this.scroll = new BScroll(container)
    },
    methods:{
        changeSort(sortName){
            // console.log(sortName);
            // console.log(this.$refs[sortName][0]);
            this.scroll.scrollToElement(this.$refs[sortName][0]);
        },
        changeCityName(cityName){
            this.changeCity(cityName);
            this.$router.push('/')  //跳转回到首页
        },
        ...mapMutations(['changeCity'])
    }
};
</script>
<style lang="stylus">
@import '~css/common.styl';
.container{
    position:absolute;
    overflow:hidden;
    left:0;
    right:0;
    bottom:0;
    top:.88rem;
    background:#f5f5f5;
}
.hot-title {
  padding: 0.2rem 0.3rem;
  font-size: 0.24rem;
  color: #212121;
}
.hot-list {
  position: relative;
  overflow: hidden;
  background: #fff;
  font-size: 0.28rem;
  color: #212121;
}
.hot-list:before {
  content: " ";
  position: absolute;
  height: 100%;
  width: 33.33333%;
  left: 33.33333%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}
.hot-item {
  position: relative;
  width: 33.33333%;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
  text-align: center;
}
.sort-title{
        padding: .2rem .3rem; 
        font-size: .24rem;
        color: #212121;
    }
    .sort-list{
        position: relative;
        overflow: hidden;
        background:#fff;
        font-size: .28rem;
        color: #212121;
    }
    .sort-item{
        width: 16.66666%;
        height: .9rem;
        line-height: .9rem;
        float: left;
        text-align: center;
    }
.list-title {
  padding: 0.2rem 0.3rem;
  font-size: 0.24rem;
  color: #212121;
}

.list-msg {
  position: relative;
  overflow: hidden;
  background: #fff;
}

.list-msg:before {
  position: absolute;
  content: ' ';
  left: 25%;
  width: 25%;
  height: 100%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}

.list-msg:after {
  position: absolute;
  content: ' ';
  left: 75%;
  width: 0%;
  height: 100%;
  border-left: 0.02rem solid #ddd;
}

.list-item {
  position:relative;
  width: 25%;
  line-height: 0.9rem;
  font-size: 0.28rem;
  text-align: center;
  float: left;
  border-bottom: 0.02rem solid #ddd;
  textOverflow();
}
</style>