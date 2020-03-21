<template>
    <van-grid :border="false" :column-num="4">
        <van-grid-item
            v-for="(item,index) in recommend"
            :key="index">
            <a :href="item.link">
                <van-image 
                    round
                    width="4.5rem"
                    height="4.5rem"
                    :src="item.image"/>
                <div>{{item.title}}</div>
            </a>
        </van-grid-item>
    </van-grid>
</template>

<script>

import { Grid, GridItem } from 'vant'
import { Image } from 'vant';

export default {
    name: 'HomeRecommend',
    components: {
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
        [Image.name]: Image,
    },
    props: {
        recommend: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>

</style>