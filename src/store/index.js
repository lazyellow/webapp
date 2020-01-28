import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '广州';   //2.定义一个中间变量，给一个默认值
defaultCity = localStorage.city;    //3.将存储在localstorage中的值取出来

const state = {
    city:defaultCity    //4.将其复制给state中，通过state再传回给首页header.vue中
}
const mutations = {
    changeCity(state,cityName){
        state.city = cityName;
        //将数据存储在浏览器里本地存储localstorage中
        localStorage.city = cityName;   //1.将点击后获取的城市名称值存储到localstorage中
    }
}

export default new Vuex.Store({
    state,
    mutations
})