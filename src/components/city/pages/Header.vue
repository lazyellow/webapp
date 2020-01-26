<template>
    <div class="header">
        <div class="header-left">
            <router-link to="/">
                <span class="iconfont">
                    &#xe607;
                </span>
            </router-link>
        </div>
        <div class="header-title">
            城市选择
        </div>
    </div>
</template>

<script></script>

<style scoped lang='stylus'>
@import '~css/var.styl'

.header{
    width:100%;
    /* 行高 */
    line-height: .88rem;
    background: $bgColor;
    color: $textColor;
    font-size: .32rem;
    position:relative;
}
.header-left{
    width:.4rem;
    padding:0 .2rem;
    text-align:center;
    font-weight:bold;
    position:absolute;
}
.header-left a{
    color:#fff;
}
.header-title{
    text-align:center;
}
</style>