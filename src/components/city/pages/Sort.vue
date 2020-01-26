<template>
    <div class="sort">
        <div class="sort-title">
            字母排序
        </div>
        <ul class="sort-list">
            <li class="sort-item">A</li>
            <li class="sort-item">A</li>
            <li class="sort-item">A</li>
            <li class="sort-item">A</li>
            <li class="sort-item">A</li>
            <li class="sort-item">A</li>
            <li class="sort-item">A</li>
            <li class="sort-item">A</li>
            <li class="sort-item">A</li>
            <li class="sort-item">A</li>
            <li class="sort-item">A</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .sort-title{
        padding: .2rem .3rem; 
        font-size: .24rem;
        color: #212121;
    }
    .sort-list{
        /* position: relative;
        overflow: hidden; */
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
</style>