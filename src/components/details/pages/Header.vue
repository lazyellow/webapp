<template>
    <div class="header">
        <div class="header-return"
            v-show='showHeader'>
            <span class="border-return"></span>
            <span class="iconfont return" @click='toHome'>
                &#xe607;
            </span>
        </div>

        <div class="header-top"
            v-show='!showHeader'
            :style='styleOpacity'>
            <div class="header-left">
                <span class="iconfont" @click='toHome'>
                    &#xe607;
                </span>
            </div>
            广州长隆野生动物园
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showHeader:true,
            styleOpacity:{
                opacity:0
            }
        }
    },
    methods:{
        toHome(){
            this.$router.push("/");
        }
    },
    mounted(){
        let That = this;
        // 添加滚动事件监听
        window.addEventListener('scroll',function(){
            let top = document.documentElement.scrollTop;
            if(top>45){
                That.showHeader = false;
                // 计算透明度的值，根据滚动时的top值进行动态变化透明度
                let opacity = top/130;
                That.styleOpacity={opacity}
            }else{ 
                That.showHeader = true;
            }
        })
    }
}
</script>
<style lang="stylus">
@import '~css/var.styl'
    .header-return{
        position: absolute;
        left: .1rem;
        top: .1rem;
        width: .72rem;
        height: .72rem
    }
    .border-return{
        display: block;
        background: #000;
        width: .72rem;
        height: .72rem;
        opacity: .5;
        border-radius: .36rem;
    }
    .return{
        position: absolute;
        left: .18rem;
        top: .2rem;
        width: .72rem;
        /* line-height: .72rem;
        text-align: left;
        text-indent: .20rem; */
        color: #fff;
        font-size: .32rem;
    }
    .header-top{
        position: fixed;
        top: 0;
        width:100%;
        /* 行高 */
        line-height: .88rem;
        background: $bgColor;
        color: $textColor;
        font-size: .36rem;
        text-align: center;
    }
    .header-left{
        position:absolute;
        width:.4rem;
        padding:0 .2rem;
        text-align:center;
        font-weight:bold;
    }
</style>