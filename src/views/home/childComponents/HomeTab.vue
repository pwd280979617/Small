<template>
    <van-tabs 
        v-model="active" 
        @click="onClick"
        color='#1296db' 
        title-active-color='#1296db' 
        animated>
        <van-tab 
            v-for="(item,index) in tabList"
            :key="index"
            :title="item.name">
            <van-grid :border="false" :column-num="2">
                <van-grid-item 
                    v-for="(n,index) in item.list"
                    :key="index"
                    @click="toDetail(n.iid)">
                    <van-image :src="n.show.img" radius='3%'/>
                    <div class="goodsTitle">
                        <p>{{n.title}}</p>
                        <span class="tabPrice">{{n.orgPrice}}</span>
                        <span class="tabFav">{{n.cfav}}</span>
                    </div>
                </van-grid-item>
            </van-grid>
        </van-tab>
    </van-tabs>
</template>

<script>

import { Tab, Tabs } from 'vant';
import { Grid, GridItem } from 'vant'
import { Image } from 'vant';

export default {
    name: 'HomeTab',
    components: {
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [Grid.name]: Grid,
        [GridItem.name]: GridItem,
        [Image.name]: Image,
    },
    props:{
        tabList: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            active: 0
        };
    },
    methods: {
        onClick(name){
            this.$emit('tabIndex',name);
        },
        toDetail(iid){
            this.$router.push('/detail/'+iid);
        }
    },
}
</script>

<style>
    .goodsTitle {
        position: relative;
        top: 0.2rem;
        bottom: 0.2rem;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

     .goodsTitle p{
        font-size: 0.9rem;
        width: 11rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
     }

     .van-grid-item__content {
         padding: 0.4rem 0.3rem;
     }

     .tabPrice {
        color: #1296db;
        margin-right: 1rem;
     }

     .tabFav {
        position: relative;
     }

     .tabFav::before {
        content: '';
        position: absolute;
        left: -1rem;
        width: 1rem;
        height: 1rem;
        background: url("../../../assets/img/common/collect.svg") 0 0/1rem 1rem;
    }
</style>