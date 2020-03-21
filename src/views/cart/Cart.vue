<template>
    <div id="cart">
        <van-nav-bar class="cartNav">
            <span slot="title">购物车（{{$store.state.cartList.length}}）</span>
        </van-nav-bar>
        <BScroll
            class="wrapper"
            ref="BScroll"
            :probeType='probeType'>
            <div>
                <van-checkbox 
                    v-for="(item,index) in $store.state.cartList"
                    v-model="item.checked"
                    :key="index"
                    @click='toChecked(item.iid)'>
                    <van-card
                        :num="item.count"
                        :price="item.price"
                        :desc="item.desc"
                        :title="item.title"
                        :thumb="item.image"
                        />
                </van-checkbox>
            </div>
        </BScroll>
        
        <van-submit-bar
            :price="totalPrice"
            button-text="提交订单"
            @submit="onSubmit"
            >
            <van-checkbox
                v-model="allChecked"
                @click='togChecked'>
                全选</van-checkbox>
            <span slot="tip">
                你的收货地址不支持同城送, <span>修改地址</span>
            </span>
        </van-submit-bar>
    </div>
</template>

<script>

import { NavBar, Card, SubmitBar } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';

import BScroll from '@components/common/better-scroll/BetterScroll'

export default {
    name: 'Cart',
    components: {
        [NavBar.name]: NavBar,
        [Checkbox.name]: Checkbox,
        [CheckboxGroup.name]: CheckboxGroup,
        [Card.name]: Card,
        [SubmitBar.name]: SubmitBar,
        BScroll,
    },
    data() {
        return {
            probeType: 3,
            allChecked: true,
        }
    },
    methods: {
        onSubmit(){
            console.log('1111');
        },
        toChecked(iid){
            this.$store.commit('toggleChecked',iid)
            const list = this.$store.state.cartList
            let isAllChecked = list.filter(item => item.checked == false)
            if(isAllChecked == 0){
                this.allChecked = true
            }else{
                this.allChecked = false
            }
        },
        togChecked(){
            this.$store.commit('toggleAllChecked')
        }
    },
    computed: {
        totalPrice(){
            let number = this.$store.state.cartList.filter(item => item.checked == true).map(item => item.price)
            let sum = 0
            let priceNum = 0
            for(let i=0;i<number.length;i++){
                priceNum = parseFloat(number[i])
                sum += priceNum 
            }
            return sum*100
           
        }
    },
}
</script>

<style>
    #cart {
        position: relative;
        height: 100vh;
    }

    .cartNav {
        background-color: var(--color-tint);
    }

    .van-nav-bar__title{
        color: white;
    }

    .wrapper {
        position: absolute;
        overflow: hidden;
		top: 2.875rem;
		left: 0;
        right: 0;
        bottom: 8.5rem;
    }

    .van-checkbox__icon {
        margin-left: 0.8rem;
    }

    .van-checkbox__label {
        margin-left: 0rem;
    }

    .van-card {
        padding: 0.5rem 0.5rem;
    }

    .van-submit-bar {
        bottom: 3rem;
    }


</style>