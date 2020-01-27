<template>
    <div class="list">
        <div class="list-title">A</div>
        <ul class="list-msg">
            <li class="list-item">阿克苏地区</li>
            <li class="list-item">阿克苏地区</li>
            <li class="list-item">阿克苏地区</li>
            <li class="list-item">阿克苏地区</li>
            <li class="list-item">阿克苏地区</li>
            <li class="list-item">阿坝藏族羌族自治州</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus">
@import '~css/common.styl';
    .list-title{
        padding: .2rem .3rem; 
        font-size: .24rem;
        color: #212121;
    }
    .list-msg{
        position: relative;
        overflow: hidden;
        background: #fff;
    }
    .list-msg:before{
        position: absolute;
        content:" ";
        left: 25%;
        width: 25%;
        height: 100%;
        border-left: .02rem solid #ddd;
        border-right: .02rem solid #ddd;
    }
    .list-msg:after{
        position: absolute;
        content:" ";
        left: 75%;
        width: 25%;
        height: 100%;
        border-left: .02rem solid #ddd;
    }
    .list-item{
        width: 25%;
        line-height: .9rem;
        font-size: .28rem;
        text-align: center;
        float: left;
        border-bottom: .02rem solid #ddd;
        textOverflow();
    }
</style>