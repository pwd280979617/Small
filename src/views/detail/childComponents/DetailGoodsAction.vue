<template>
    <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon to="/cart" icon="cart-o" text="购物车" :info="$store.state.cartList.length" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button type="warning" text="加入购物车" @click.native="addCart"/>
        <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
</template>

<script>

import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Toast } from 'vant';

export default {
    name: 'DetailGoodsAction',
    components: {
        [GoodsAction.name]: GoodsAction,
        [GoodsActionIcon.name]: GoodsActionIcon,
        [GoodsActionButton.name]: GoodsActionButton,
        [Toast.name]: Toast,
    },
    props: {
        goods: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        addCart(){
            this.$store.dispatch('addCart',this.goods).then(res =>{
                Toast.success(res)
            })
        }
    },
}
</script>

<style>

</style>