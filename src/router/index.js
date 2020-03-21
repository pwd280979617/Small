import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

const Home = () => import('@views/home/Home')
const Category = () => import('@views/category/Category')
const Cart = () => import('@views/cart/Cart')
const Profile = () => import('@views/profile/Profile')

const Detail = () => import('@views/detail/Detail')

const router = new VueRouter({
    routes:[
        {path:'/',redirect: '/home',meta: { navShow: true, }},
        {path:'/home',component: Home,meta: { navShow: true, }},
        {path:'/category',component:Category,meta: { navShow: true, }},
        {path:'/cart',component:Cart,meta: { navShow: true, }},
        {path:'/profile',component:Profile,meta: { navShow: true, }},
        {path:'/detail/:iid',component:Detail}
    ],
    mode: 'history',
})

export default router