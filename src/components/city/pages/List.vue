<template>
    <div class="list">
        <div v-for='(val,key) in cities'>
            <div class="list-title">{{key}}</div>
            <ul class="list-msg">
                <li class="list-item"
                    v-for='item in val' :key='item.id'>
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:["cities"]
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