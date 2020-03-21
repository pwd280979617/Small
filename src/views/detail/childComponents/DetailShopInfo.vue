<template>
    <div>
        <div class="logoname">
            <div><img :src="shopInfos.logo" alt="" class="shoplogo"></div>
            <div class="shopname">{{shopInfos.name}}</div>
        </div>
        <div class="shopinfo">
            <div class="sellNum">
                <div class="shopsell">{{numberFormat(shopInfos.sell)}}万</div>
                <div class="shopsell">总销量</div>
            </div>
            <div class="sellGood">
                <div class="shopsell">{{shopInfos.good}}</div>
                <div class="shopsell">全部宝贝</div>
            </div>
             <div class="score">
                <tr v-for="(item,index) in shopInfos.score" :key="index">
                    <td class="scoreName">{{item.name}}</td>
                    <td class="scoreNum" :class="{highNum:item.isBetter}">{{item.score}}</td>
                    <td><span class="scoreWord" :class="{highWord:item.isBetter}">{{item.isBetter?'高':'低'}}</span></td>
                </tr>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailShopInfo',
    props: {
        shopInfos: {
            type: Object,
            default(){
                return  {}
            }
        }
    },
    methods: {
        numberFormat(value) {
            var param = {};
            var k = 10000,
                sizes = ['', '万', '亿', '万亿'],
                i;
                if(value < k){
                    param.value =value
                    param.unit=''
                }else{
                    i = Math.floor(Math.log(value) / Math.log(k)); 
              
                    param.value = ((value / Math.pow(k, i))).toFixed(2);
                    param.unit = sizes[i];
                    }
            return param.value;
        }
    },
}
</script>

<style>

    .logoname {
        display: flex;
        margin: 2rem 0.4rem 0 0.8rem;
    }

    .shoplogo {
        width: 3rem;
        height: 3rem;
    }

    .shopname {
        line-height: 3rem;
        margin-left: 0.8rem;
    }

    .shopinfo {
        display: flex;
        margin: 1.5rem 0.4rem 0 0.4rem;
    }

    .sellNum {
        width: 30%;
        text-align: center;
    }

    .sellGood {
        width: 28%;
        text-align: center;
    }

    .shopsell {
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
    }

    .score {
        font-size: 0.9rem;
        text-align: center;
        margin-left: 1rem;
    }

    .scoreName {
        padding: 5px 5px;
    }

    .scoreNum {
        padding: 5px 5px;
        color: green;
    }

    .scoreWord {
        background-color: green;
        color: white;
    }

    .highNum {
        color: red
    }

    .highWord {
        background-color: red;
    }
</style>