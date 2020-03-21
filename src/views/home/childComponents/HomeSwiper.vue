<template>
        <van-swipe :autoplay="3000" class="swiper" >
            <van-swipe-item v-for="(item, index) in banner" :key="index">
                <a :href="item.link"><img :src="item.image" /></a>
            </van-swipe-item>
        </van-swipe>
</template>

<script>

import { Swipe, SwipeItem } from 'vant';

export default {
    name: 'HomeSwiper',
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem
    },
    props: {
        banner: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .swiper {
        width: 100%;
        height: 100%;
    }

    .van-swipe{
      width: 100%;
      height: 13rem;
    }

    img {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
</style>