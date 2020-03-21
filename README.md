# shopMall
a vue.js mall  base vant UI

## 0 前言  
本项目是学习codewhy老师Vue前端实战电商项目后的一次实战模拟。  

本次实战将区别于课程直接使用Vant UI库，提高开发效率，并且学习UI库的使用。  

所有实战过程将在README中呈现。  

## 1 准备  

### 1.1 使用 Vue 官方提供的脚手架 Vue Cli 创建项目

#### 安装 Vue Cli
````
npm install -g @vue/cli
````

#### 创建一个项目
````
vue create shopmall
````  

### 1.2 引入Vant组件库

#### 通过NPM安装Vant
````
npm i vant -S
````  

#### 通过自动按需引入的方式引入组件  
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式  

````
npm i babel-plugin-import -D
````  

### 1.3 安装各类提高用户体验的插件

#### RAM适配
Vant 中的样式默认使用px作为单位，如果需要使用rem单位，推荐使用这个工具：

+ postcss-plugin-px2rem 是一款 postcss 插件，用于将单位转化为 rem  

#### PostCSS 配置
下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改  
[vue.config.js](D:\github\shopMall\shopmall\vue.config.js)  

#### 底部安全区适配
````html
<!-- 在 head 标签中添加 meta 标签，并设置 viewport-fit=cover 值 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover">

<!-- 开启 safe-area-inset-bottom 属性 -->
<van-number-keyboard safe-area-inset-bottom />
````

#### ~~使用fastCLick解决移动端点击300ms停顿问题~~（与Vant使用会报错）
安装  
````
npm install fastclick -S
````

引入  
````
import FastClick from 'fastclick'
````

使用  
````
FastClick.attach(document.body)
````  

### 1.4 项目目录结构  

#### 根据项目需要创建项目目录结构  

+ assets: 存放项目静态文件  
    - css: 存放样式文件  
    - img: 存放图片文件  
+ components: 存放项目组件  
    - common: 存放公用组件
    - content：存放项目特定组件
+ network: 存放项目网络接口配置文件  
+ router: 存放路由配置文件  
+ store: 存放vuex状态配置文件  
+ views: 存放页面文件  
    - home：存放主页相关组件  
    - category：存放分类相关组件  
    - cart：存放购物车相关组件  
    - profile：存放个人资料相关组件
+ App.vue: 程序主文件  

#### 创建常用目录路径的别名  
在vue.config.js中设置常用目录的路径别名。便于项目后期使用

## 2 基础样式

### 2.1 引入normalize.css  
引入normalize.css解决不同浏览器之间的默认样式的差异  

### 2.2 制定基础样式base.css  
在base.css中引入，并制定基础样式使整个项目有一个统一的风格  

### 2.3 在App.vue中引入base.css
在App.vue中引入base.css在全局中应用  

## 3 构建界面结构

### 3.1 封装Tabbar组件  
    - 使用Vant组件封装一个独立的Tabbar组件
    - 创建Home，Category，Cart，Profile四个界面


### 3.2 安装vue-router插件
````
npm install vue-router --save
````

### 3.3 创建项目路由  

- 在router目录中创建index.js  
- 在index.js中将Tabbar组件的四个item对应四个界面的路由
- 在App.vue中添加router-view  

## 4 构建项目网络配置  

### 4.1 安装axios组件
````
npm install axios --save
````

### 4.2 配置网络接口  
在network目录下创建request.js，使用axios配置网络接口

### 4.3 配置Home页面的数据请求接口
在network目录中创建home.js,专门用于配置Home页面数据请求的接口

## 5 构建Home页面

### 5.1 在Home界面头部添加Navbar

### 5.2 在Home界面Navbar下添加Swiper
    - 封装Home页面使用的Swiper组件
    - 将Home页面请求的Swiper数据传入Swiper组件
    - 接受数据在Swiper组件中展示
    - 将封装好的Swiper组件引入Home界面  

### 5.3 在Home界面Swiper下添加HomeRecommend
    - 使用Grid组件封装一个HomeRecommend组件
    - 将Home页面请求的recommend数据传入HomeRecommend组件
    - 接受数据在HomeRecommend组件中展示
    - 将封装好的HomeRecommend组件引入Home界面

### 5.4 在Home界面HomeRecommend下添加recommend_bg图片

### 5.5 在Home界面recommend_bg图片下添加HomeTab
    - 使用Tab组件封装一个HomeTab组件
    - 使用Grid组件封装一个HomeTab组件下的宫格组件显示商品
    - 将Home页面请求的tabList数据传入HomeTab组件
    - 接受数据在HomeTab组件中展示
    - 将封装好的HomeTab组件引入Home界面

### 5.6 使用better-scroll插件提高页面的滚动效果
    - 使用better-scroll插件封装一个BetterScroll组件
    - 根据页面需求对BetterScroll组件进行配置
    - 在Home页面引入BetterScroll组件
    - 使用BetterScroll组件中的配置完成Home页面Tab组件的上拉加载更多功能

### 5.7 在Home界面新增回到顶部功能
    - 封装一个BackTop组件
    - 在Home页面引入BackTop组件
    - 使用BetterScroll组件的scrollTo方法完成回到顶部功能
    - 同时获取滚动距离，只有当滚动距离大于1000时在显示BackTop组件  

## 6 构建Detail页面  
Detail页面为商品详情页，由Home页面的HomeTabGoods页面点击跳转进入，用于展示商品的各项详细信息，并且用于也由此页面完成加购物车和下单购买等购物流程

### 6.1 完成HomeTabGoods点击跳转Detail页面功能
    - 创建Detail组件
    - 将Detail组件添加到路由配置
    - 根据路由传入的参数，完成Detail页面的数据请求
    - 在HomeTabGoods监听点击事件配置路由跳转

### 6.2 在Detail组件中添加Navbar
    - 引入Navbar组件
    - 添加左侧点击事件返回上一级
    - 中间添加锚点标题

### 6.3 在Navbar组件下添加Swipe组件
    - 引入Swipe组件
    - 将请求的Swiper数据传入Swiper组件
    - 接受数据在Swiper组件中展示

### 6.4 在Swiper组件下完成DetailInfo和DetailShopInfo的封装
DetailInfo组件主要展示详情页的价格和销售服务等信息  
DetailShopInfo组件主要展示详情也的商店名称，Logo，销量和评分等信息

### 6.5 在页面最后添加DetailRecommend组件
    - 使用Grid组件封装一个DetailRecommend组件下的宫格组件显示商品
    - 将Detail页面请求的recommendList数据传入DetailRecommend组件
    - 接受数据在DetailRecommend组件中展示
    - 将封装好的DetailRecommend组件引入Home界面 

### 6.6 使用better-scroll插件提高页面的滚动效果
    - 使用之前封装的BetterScroll组件
    - 根据页面需求对BetterScroll组件进行配置
    - 在Detail页面引入BetterScroll组件
    - 使用BetterScroll组件中的配置完成Detail页面Navbar组件的title同步滚动定位功能

### 6.7 在Detail界面新增回到顶部功能
    - 引用之前封装的BackTop组件
    - 在Detail页面引入BackTop组件
    - 使用BetterScroll组件的scrollTo方法完成回到顶部功能
    - 同时获取滚动距离，只有当滚动距离大于1000时在显示BackTop组件

### 6.8 安装Vuex对购物车信息进行状态管理
````
npm install vuex --save
````

### 6.9 在Detail界面底部插入一个商品导航组件
    - 使用Vant中的GoodsAction, GoodsActionIcon, GoodsActionButton三个组件完成DetailGoodsAction组件的封装
    - 在Detail页面引入DetailGoodsAction组件
    - 监听加入购物车点击，同时将商品iid信息发送一起发送到Vuex
    - 监听购物车图标点击，点击路由到Cart界面

### 6.10 对加购物车的信息在Vuex进行管理
由于需要发送加购成功的异步信息，需要将Detail界面发送的数据在Actions中进行处理，并存入state中  

## 7 构建Cart页面
Cart页面主要展示用户购物车中的信息

### 7.1 在Cart组件中添加Navbar
    - 引入Navbar组件
    - 中间添加标题，动态绑定显示购物车商品个数

### 7.2 在Navbar下添加商品卡片列表
    - 引入Vant库中的Checkbox，Card组件
    - 将Vuex管理的购物车信息导入组件展示
    - 监听Checkbox点击，将切换信息更新到Vuex的State中

### 7.3 在商品卡片列表下面添加提交订单栏
    - 引入Vant库中的SubmitBar组件
    - 对勾选的商品价格进行计算，在合计价格处动态绑定计算结果
    - 添加全选按钮，绑定购物车列表中的勾选结果，并监听全选按钮，用于改变购物车列表的勾选情况

    




