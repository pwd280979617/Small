import {request} from './request'

export function getDetail(iid){
    return request({
        url: '/detail',
        params: {iid}
    })
}

export function getRecommend(){
    return request({
    url: '/recommend'
})
}


export class Goods{
    constructor(itemInfo,columns,service){
        this.iid = itemInfo.iid
        this.image = itemInfo.topImages[0]
        this.title = itemInfo.title
        this.topImage = itemInfo.topImages
        this.price = itemInfo.lowNowPrice
        this.highPrice = itemInfo.highPrice
        this.desc = itemInfo.discountDesc
        this.columns = columns
        this.service = service

    }
}

export class ShopInfo{
    constructor(info){
        this.logo = info.shopLogo
        this.name = info.name
        this.sell = info.cSells
        this.good = info.cGoods
        this.score = info.score
    }
}