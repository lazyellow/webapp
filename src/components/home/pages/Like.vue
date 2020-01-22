<template>
    <div class="like">
        <div class="like-top">
            <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
            猜你喜欢
        </div>
        <ul>
            <li class='like-item border-bottom'
                v-for='item in likeList'>
                <div class="like-img">
                    <img :src="item.imgUrl">
                </div>

                <div class="like-text">
                    <div class="like-title">{{item.title}}</div>
                    <div class="like-message">{{item.msg}}条评论</div>
                    <div class="like-map">
                        <span class="like-mark">
                            ￥<b>{{item.pre}}</b>
                        </span>起
                        <span class="like-item-map">
                            {{item.map}}
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['likeList'],
    data(){
        return {
            // likeList:[
            //     {
            //         id:'01',
            //         imgUrl:'https://imgs.qunarzz.com/sight/p0/2001/fb/fb56f57c855e8a51a3.water.jpg_200x200_c8172d75.jpg',
            //         title:'长隆野生动物世界',
            //         msg:'136245',
            //         pre:'123',
            //         map:'广州市番禺区长隆'
            //     },
            //     {
            //         id:'02',
            //         imgUrl:'https://imgs.qunarzz.com/sight/p0/2001/8b/8b7ddfe2e27d929fa3.water.jpg_200x200_8bcf3e50.jpg',
            //         title:'广州长隆旅游度假区',
            //         msg:'136245',
            //         pre:'123',
            //         map:'番禺区'
            //     },
            //     {
            //         id:'03',
            //         imgUrl:'https://imgs.qunarzz.com/sight/p0/1411/31/74eabd4dc95afd494d92a5006c9ad4f5.water.jpg_200x200_b27fe752.jpg',
            //         title:'美林湖温泉',
            //         msg:'136245',
            //         pre:'123',
            //         map:'花都区'
            //     },
            //     {
            //         id:'04',
            //         imgUrl:'https://imgs.qunarzz.com/sight/p0/2001/af/af82bd87c80fc4aea3.water.jpg_200x200_34bbc905.jpg',
            //         title:'长隆欢乐世界',
            //         msg:'136245',
            //         pre:'123',
            //         map:'广州市番禺区长隆'
            //     }
            // ]
        }
    }
}
</script>
<style scoped>
    .like{
        margin-top: .2rem;
        font-size: .28rem;
        background: #fff;
        padding: 0 .2rem;
    }
    .like-top{
        padding: .2rem 0;
        font-size: .32rem;
    }
    .like-top img{
        width: .3rem;
        height: .3rem;
    }
    .like-item{
        position: relative;
        padding: .2rem 0;
        /* overflow: hidden; */
    }
    .like-img{
        float:left;
    }
    .like-img img{
        width: 2rem;
    }
    .like-text{
        overflow: hidden;
        padding-left: .22rem;
    }
    .like-title{
        font-size: .36rem;
        color: #212121;
        margin-top: .4rem;
    }
    .like-message{
        margin-top: .3rem;
        color: #616161;
        font-size: .24rem;
    }
    .like-map{
        margin-top: .3rem;
        color: #616161;
        position: relative;
    }
    .like-mark{
        color: #ff8300;
    }
    .like-mark b{
        font-size: .4rem;
    }
    .like-item-map{
        position: absolute;
        right: 0;
        top: .1rem;
        font-size: .28rem;
    }
</style>