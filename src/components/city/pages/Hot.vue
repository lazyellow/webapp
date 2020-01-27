<template>
  <div class="hot">
    <div class="hot-title">热门城市</div>
    <ul class="hot-list">
        <li class="hot-item"
            v-for='item in hotCities' :key='item.id'>
            {{item.name}}
        </li>
    </ul>
  </div>
</template> 
<script>
export default {
  props: ["hotCities"]
};
</script>
<style>
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
  width: 33.33333%;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
  text-align: center;
}
</style>