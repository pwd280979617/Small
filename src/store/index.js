import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        toggleChecked(state,payLoad){
            const list = state.cartList
            for(let i = 0; i < list.length; i++){
                if(list[i].iid == payLoad){
                    list[i].checked = !list[i].checked
                }
            }
        },
        toggleAllChecked(state){
            const list = state.cartList
            let checked = []
            checked = list.filter(item => item.checked == false)
            if(checked.length == 0){
                for(let i = 0; i < list.length; i++){
                    list[i].checked = false
                    }
                }else{
                for(let i = 0; i < list.length; i++){
                    list[i].checked = true
                    }
                }
            }
        
    },
    actions: {
        addCart(context,payLoad){
            return new Promise((res,reject) => {
                const list = context.state.cartList
                payLoad.count = 1
                payLoad.checked = true
                let oldGood = null
                for(let i = 0; i < list.length; i++){
                    if(list[i].iid == payLoad.iid){
                        oldGood = list[i]
                    }
                }
                if(oldGood){
                    payLoad.count += 1
                    res('增加一件本商品')
                }else {
                    list.push(payLoad)
                    res('添加购物车成功')
                }
                console.log(payLoad);
            })
        }
    }
})

export default store