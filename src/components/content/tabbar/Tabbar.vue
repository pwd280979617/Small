<template>
  <van-tabbar 
    v-model="active" 
    route
    safe-area-inset-bottom>
    <van-tabbar-item 
        v-for="(item,index) in itemInfo" 
        replace 
        :to="item.path"
        :name="item.name"
        :key="index">
        <span>{{item.text}}</span>
        <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? item.icon.active : item.icon.inactive"
        >
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>

//导入vant库Tabbar组件
import {Tabbar, TabbarItem} from 'vant'

//导入TabbarItem中用到的图标
import home1 from '@assets/img/tabbar/home/home1.svg'
import home from '@assets/img/tabbar/home/home.svg'
import category1 from '@assets/img/tabbar/category/category1.svg'
import category from '@assets/img/tabbar/category/category.svg'
import cart1 from '@assets/img/tabbar/cart/cart1.svg'
import cart from '@assets/img/tabbar/cart/cart.svg'
import profile1 from '@assets/img/tabbar/profile/profile1.svg'
import profile from '@assets/img/tabbar/profile/profile.svg'


export default {
    name: 'Tabbar',
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    },
    data() {
        return {
            itemInfo: [
                {   
                    name: 'home',
                    path: '/home',
                    text: '首页',
                    icon: {
                        active: home1,
                        inactive: home
                    }
                },
                {
                    name: 'category',
                    path: '/category',
                    text: '分类',
                    icon: {
                        active: category1,
                        inactive: category
                    }
                },
                {
                    name: 'cart',
                    path: '/cart',
                    text: '购物车',
                    icon: {
                        active: cart1,
                        inactive: cart
                    }
                },
                {
                    name: 'profile',
                    path: '/profile',
                    text: '我的',
                    icon: {
                        active: profile1,
                        inactive: profile
                    }
                },
            ],
            active: 'home'
        }
    }
}
</script>

<style>

</style>