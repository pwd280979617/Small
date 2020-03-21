<template>
    <div id="detail">
        <van-nav-bar left-text="返回" left-arrow @click-left="goBack">
            <div slot="title" class="nav-middle">
                <span class="nav-title" :class="{colorTitle: currTitle[0]}">商品</span>
                <span class="nav-title" :class="{colorTitle: currTitle[1]}">参数</span>
                <span class="nav-title" :class="{colorTitle: currTitle[2]}">评论</span>
                <span class="nav-title" :class="{colorTitle: currTitle[3]}">推荐</span>
            </div>
        </van-nav-bar>
        <BScroll
            class="wrapper"
            ref="BScroll"
            :probeType='probeType'
            :listenScroll='listenScroll'
            @scroll="scrollPos">
            <div>
                <van-swipe :autoplay="3000" class="swiper">
                    <van-swipe-item v-for="(image, index) in goods.topImage" :key="index">
                        <img :src="image"  class="swiperImg"/>
                    </van-swipe-item>
                </van-swipe>
                <detail-info :goods="goods" ref="detailInfo"></detail-info>
                <detail-shop-info :shopInfos="shopInfos" ref="shopInfo"></detail-shop-info>
                <detail-recommend :recommendList='recommendList' ref="detailRecommend"></detail-recommend>
            </div>
        </BScroll>
            <back-top @click.native="toTop" v-show="backShow"></back-top>
            <detail-goods-action :goods="goods"></detail-goods-action>
    </div>
</template>

<script>

import { NavBar, CheckboxGroup } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import DetailInfo from './childComponents/DetailInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import DetailRecommend from './childComponents/DetailRecommend'
import BScroll from '@components/common/better-scroll/BetterScroll'
import BackTop from '@components/content/backTop/BackTop'
import DetailGoodsAction from './childComponents/DetailGoodsAction'

import {getDetail,getRecommend,Goods,ShopInfo} from '@network/detail.js'

export default {
    name: 'Detail',
    components: {
        [NavBar.name]: NavBar,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        DetailInfo,
        DetailShopInfo,
        DetailRecommend,
        BScroll,
        BackTop,
        DetailGoodsAction,
    },
    data() {
        return {
            iid: null,
            goods: {},
            shopInfos: {},
            recommendList: [],
            probeType: 3,
            listenScroll: true,
            backShow: false,
            detailInfoY: 0,
            shopInfoY: 0,
            detailRecommendY: 0,
            currTitle: [true,false,false,false]
        }
    },
    created() {
        this.iid = this.$route.params.iid
        getDetail(this.iid).then(res => {
            console.log(res);
            this.goods = new Goods(
                res.result.itemInfo,
                res.result.columns,
                res.result.shopInfo.services);
            this.shopInfos = new ShopInfo(
                res.result.shopInfo
            )
        })
        getRecommend().then(res => {
            this.recommendList = res.data.list
            console.log(res);
        })
    },
    mounted() {
        this.$nextTick(() =>{
            this.detailInfoY = this.$refs.detailInfo.$el.offsetTop
            this.shopInfoY = this.$refs.shopInfo.$el.offsetTop
            this.detailRecommendY = this.$refs.detailRecommend.$el.offsetTop
        })
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        toTop(){
            this.$refs.BScroll.scroll.scrollTo(0,0,300)
        },
        scrollPos(pos){
            const posy = -pos.y
            this.backShow = posy > 1000
            if(posy >= this.detailRecommendY){
                this.currTitle = [false,false,false,true]
            }else if(posy >= this.shopInfoY && posy < this.detailRecommendY){
                this.currTitle = [false,false,true,false]
            }else if(posy >= this.detailInfoY && posy < this.shopInfoY){
                this.currTitle = [false,true,false,false]
            }else if(posy < this.detailInfoY){
                this.currTitle = [true,false,false,false]
            }
        }
    },
}
</script>

<style>
    #detail {
        position: relative;
        height: 100vh;
    }

    .nav-middle{
        display: flex;
        margin: 0 auto;
        width: 90%;
    }

    .colorTitle {
        color: var(--color-tint);
    }

    .nav-title {
        flex: 1;
        font-size: 0.9rem;
    }

    .wrapper {
		position: absolute;
        overflow: hidden;
		top: 2.875rem;
		left: 0;
        right: 0;
        bottom: 3rem;
    }

    .swiper {
        height: 18rem;
        width: 100%;
    }

    .swiperImg {
        width: 100%;
    }
</style>