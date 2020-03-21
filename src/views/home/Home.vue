<template>
    <div id="home">
        <van-nav-bar title="ShopMall" class="navbar"/>
        <BScroll 
          class="wrapper"
          ref="BScroll"
          :probeType='3'
          pullup
          listenScroll
          @scrollToEnd="loadData"
          @scroll="scroll">
            <div>
				<home-swiper :banner='banner'></home-swiper>
				<home-recommend :recommend='recommend'></home-recommend> 
				<van-image width='100%' height='17rem' :src="recom_bg" class="recom_bg"/> 
				<home-tab 
                    ref="tab1"
                    :tabList='tabList'
                    @tabIndex='tabIndex'></home-tab> 
            </div>
        </BScroll>
        <BackTop @click.native="toTop" v-show="backShow"></BackTop>
    </div>
</template>

<script>

import { NavBar, Form } from 'vant';
import BScroll from '@components/common/better-scroll/BetterScroll'
import HomeSwiper from './childComponents/HomeSwiper'
import HomeRecommend from './childComponents/HomeRecommend'
import { Image } from 'vant';
import HomeTab from './childComponents/HomeTab'
import BackTop from '@components/content/backTop/BackTop'

import {getHomeMultidata,getHomeGoods} from '@network/home.js'

import recommend_bg from '@assets/img/home/recommend_bg.jpg'

export default {
    name: 'Home',
    components: {
        [NavBar.name]: NavBar,
        BScroll,
        HomeSwiper,
        HomeRecommend,
        [Image.name]: Image,
        HomeTab,
        BackTop,
    },
    data() {
        return {
            banner: [],
            recommend: [],
            recom_bg: recommend_bg,
            tabList: [
                {name: '流行',type: 'pop',page: '1',list: []},
                {name: '新款',type: 'new',page: '1',list: []},
                {name: '热卖',type: 'sell',page: '1',list: []}
						],
            tabListIndex: 0,
            backShow: false,
        }
    },
    created() {
        getHomeMultidata().then(res => {
            console.log(res);
            this.banner = res.data.banner.list
            this.recommend = res.data.recommend.list
        })

        this.getTabList(this.tabList[0])
        this.getTabList(this.tabList[1])
        this.getTabList(this.tabList[2])
    },
    updated() {
        this.tab1Y = this.$refs.tab1.$el.offsetTop
    },
    methods: {
        getTabList(tabName){
            getHomeGoods(tabName.type,tabName.page).then(res => {
                tabName.list.push.apply(tabName.list,res.data.list)
                this.$refs.BScroll.scroll.refresh();
            })
        },
        tabIndex(name){
            this.tabListIndex = name
        },
        loadData(){
            const tList = this.tabList[this.tabListIndex]
            tList.page = tList.page * 1 + 1
            this.getTabList(tList)
            this.$refs.BScroll.scroll.finishPullUp()
        },
        scroll(pos){
            this.backShow = -pos.y > 1000
            console.log(pos);
        },
        toTop(){
            this.$refs.BScroll.scroll.scrollTo(0,0,300)
        }
    },
}
</script>

<style scoped>
    #home{
        position: relative;
        height: 100vh;
    }

    .navbar {
        /* position: fixed;
        top: 0;
        left: 0;
        right: 0; */
        background-color: var(--color-tint);
    }

	.wrapper {
		position: absolute;
        overflow: hidden;
		top: 2.875rem;
		left: 0;
        right: 0;
        bottom: 3.125rem;
	}


    .van-nav-bar__title {
        color: white;
    }

    .recom_bg {
        border-bottom: 0.05rem solid #999;
    }

    .tab-2 {
        position: relative;
        z-index: 9;
    }
</style>