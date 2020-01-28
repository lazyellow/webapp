<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">
                &#xe607;
            </span>
        </div>
        <div class="header-search">
            <span class="iconfont">
                &#xe643;
            </span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            <router-link to="/city">
                {{city}}
                <span class="iconfont">&#xe64d;</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default{
        computed:{
            ...mapState(['city'])
        }
    }
</script>

<style scoped lang='stylus'>
@import '~css/var.styl'

.header{
    width:100%;
    /* 行高 */
    line-height: .88rem;
    background: $bgColor;
    color: $textColor;
    font-size: .36rem;
    /* 让div变成弹性盒子↓,让header内容一行显示 */
    display: flex;
}
.header-left{
    width:.4rem;
    padding:0 .2rem;
    text-align:center;
    font-weight:bold;
}
.header-search{
    /* 让中间search部分占满剩下部分↓ */
    flex: 1;
    background:#fff;
    height:.6rem;
    margin:.14rem 0;
    /* 圆角↓ */
    border-radius: .1rem;
    color:#e4e7ea;
    /* 行高↓ */
    line-height:.6rem;
    font-size:.28rem;
    padding-left:.2rem;
}
.header-right{
    font-size:.28rem;
    padding:0 .2rem;
}
.header-right a{
    color:#fff;
}
</style>