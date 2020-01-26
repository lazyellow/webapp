<template>
    <div class="hot">
        <div class="hot-title">热门城市</div>
        <ul class="hot-list">
            <li class="hot-item">
                北京
            </li>
            <li class="hot-item">
                北京
            </li><li class="hot-item">
                北京
            </li><li class="hot-item">
                北京
            </li><li class="hot-item">
                北京
            </li><li class="hot-item">
                北京
            </li>
        </ul>
    </div>
</template> 
<script>
export default {
    
}
</script>
<style>
    .hot-title{
        padding: .2rem .3rem; 
        font-size: .24rem;
        color: #212121;
    }
    .hot-list{
        position:relative;
        overflow: hidden;
        background: #fff;
        font-size: .28rem;
        color: #212121;
    }
    .hot-list:before{
        content: " ";
        position: absolute;
        height: 100%;
        width: 33.33333%;
        left: 33.33333%;
        border-left: .02rem solid #ddd;
        border-right: .02rem solid #ddd;
    }   
    .hot-item{
        width: 33.33333%;
        height: .9rem;
        line-height: .9rem; 
        float: left;
        border-bottom: .02rem solid #ddd;
        text-align: center;
    }
</style>