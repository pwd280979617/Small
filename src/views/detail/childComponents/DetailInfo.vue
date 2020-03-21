<template>
    <div>
        <div class="detailTitle">{{goods.title}}</div>
        <div class="detailPrice">
            <span class="nowPrice">￥{{goods.price}}</span>
            <span class="highPrice">{{goods.highPrice}}</span>
            <span class="dec">{{goods.desc}}</span>
        </div>
        <div class="columns">
            <div 
                class="columnItem"  
                v-for="(item,index) in goods.columns"
                :key="index">
                {{item}}
            </div>
        </div>
        <div class="services">
            <div class="serviceItem"  v-if="goods.service">
                <van-icon name="bookmark-o" size="1rem" />
                {{goods.service[0].name}}
            </div>
            <div class="serviceItem"  v-if="goods.service">
                <van-icon name="bookmark-o" size="1rem" />
                {{goods.service[1].name}}
            </div>
            <div class="serviceItem"  v-if="goods.service">
                <van-icon name="bookmark-o" size="1rem" />
                {{goods.service[2].name}}
            </div>
        </div>
    </div>
</template>

<script>

import { Icon } from 'vant';

export default {
    name: 'DetailInfo',
    components: {
        [Icon.name]: Icon,
    },
    props: {
        goods: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>

    .detailTitle {
        margin: 0.6rem 0.4rem 0 0.4rem;
        
    }

    .detailPrice {
        margin: 1rem 0.4rem 0 0.4rem;
        line-height: 1.5rem;
    }

    .nowPrice {
        font-size: 1.5rem;
        color: brown
    }

    .highPrice {
        padding-left: 0.5rem;
        text-decoration: line-through;
    }

    .dec {
        background-color: brown;
        color: white;
        border-radius: 10%;
        margin-left: 0.7rem;
    }

    .columns {
        margin: 1rem 0.4rem 0 0.4rem;
        display: flex;
        width: 100%;
    }

    .columnItem {
        padding: 0 auto;
        flex: 1;
        font-size: 1rem;
    }

    .services {
        margin: 1rem 0.4rem 0 0.4rem;
        display: flex;
        width: 100%;
    }

    .serviceItem {
        padding: 0 auto;
        flex: 1;
        font-size: 0.93rem;
    }
</style>