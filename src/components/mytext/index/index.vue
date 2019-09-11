<template>
 <div class="index">
     <!-- 头部 -->
     <div class="banner">
         <div class="search" @click="searchclick">
             <div class="searchlist"><img src="../../../assets/search.png" alt=""><span class="hoder">搜索更多商品</span></div>
         </div>
     </div>
     <div class="indexmore">
         <!-- 轮播图 -->
        <wc-swiper>
            <wc-slide v-for="(v, k) in list" :key="k">
               <div class="swiper"><img :src="v.src" alt=""></div>
            </wc-slide>
        </wc-swiper>
        <!-- 菜单导航上 -->
        <div class="menu">
            <div class="menulist flex">
                <div>
                    <img src="../../../assets/housekeeper.png" alt="">信用管家
                </div>
                <div>
                    <img src="../../../assets/topups.png" alt="">手机充值
                </div>
                <div>
                    <img src="../../../assets/carnival.png" alt="">购物狂欢
                </div>
                <div>
                    <img src="../../../assets/feedback.png" alt="">意见反馈
                </div>
                <div @click="morefind">
                    <img src="../../../assets/more.png" alt="">更多发现
                </div>
            </div>
        </div>
        <!-- 广告位 -->
        <div class="advertising">
            <img src="../../../assets/banner.jpg" alt="">
        </div>
        <!-- 菜单导航下 -->
        <div class="menu">
            <div class="menulist flex">
                <div>
                    信用管家<img src="../../../assets/housekeeper.png" alt="">
                </div>
                <div>
                    手机充值<img src="../../../assets/topups.png" alt="">
                </div>
                <div>
                    购物狂欢<img src="../../../assets/carnival.png" alt="">
                </div>
                <div>
                    意见反馈<img src="../../../assets/feedback.png" alt="">
                </div>
                <div @click="morefind">
                    更多发现<img src="../../../assets/more.png" alt="">
                </div>
            </div>
        </div>
        <!-- 精选会场 -->
        <div class="choiceness"><img src="../../../assets/bt@2x.png" alt=""></div>
        <!-- 菜单列表 -->
        <div class="orderlist">
             <ul class="ordermaster">
                 <li  v-for="item in orderlist">
                     <img src="../../../assets/p4@2x.png" alt="">
                     <div class="ordertext">{{item.title}}</div>
                     <div class="shopist">￥{{item.pay}}<span class="original_price">￥{{item.price}}</span><span class="similar">看相似</span></div>
                 </li>
             </ul>
        </div>
     </div>
 </div>
</template>

<script>
export default {
    name:'index',
  data () {
    return {
        orderlist:[
            {
                pay:500,
                price:899,
                title:'茅台 王子酒 53度 白酒 500ml口感酱香型'
            },
            {
                pay:282,
                price:399,
                title:'茅台 迎宾酒 43度 白酒 500ml口感酱香型'
            },
            {
                pay:646,
                price:799,
                title:'贵州茅台酒飞天茅台53度酱香型白酒 2017年出厂500ml'
            },
            {
                pay:456,
                price:588,
                title:'贵州茅台酒（酱香型白酒）475ml'
            }
        ],
        list:[
            {
                src:require('../../../assets/banner3.png')
            },
            {
                src:require('../../../assets/banner4.png')
            },
        ]
    }
  },
  methods:{
      morefind(){
          this.$router.push({path:'./find'})
      },
      searchclick(){
          this.$router.push({path:'./search'})
      }
  }
}

</script>
<style scoped>
.index{
    width: 100%;
    height: 100%;
}
.indexmore{
    margin-top: 1.26rem;
    height: 25rem;
    background: #fff;
    text-align: center;
}
.banner{
    width: 100%;
    height: 1.25rem;
    background: #f57707;
    color: #fff;
    line-height: 1.5rem;
    font-size: 0.4rem;
    text-align: center;
    position: fixed;
    top: 0;
    z-index: 100;
}
.swiper{
    height: 3rem;
}
.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.menu{
    width: 100%;
    height: 2.5rem;
}
.menulist{
    height: 2.5rem;
    margin: 0rem 0.2rem;
    text-align: center;
}
.menulist div{
    width: 20%;
}
.advertising img{
    width: 100%;
}
.choiceness{
    margin: 0.4rem 0;
}
.choiceness img{
    width: 4rem;
}
.orderlist{
    background: #f0eae8;
    overflow: hidden;
    padding-bottom: 1.4rem;
    text-align: center;
}
.ordermaster{
    width: 98%;
    margin: 0rem 0.3rem;
    padding-top: 0.2rem;
}
.ordermaster img{
    border-radius:0.2rem; 
}
.ordermaster li{
    width: 47%;
    height: 6rem;
    float: left;
    margin: 0.1rem 0;
    margin-right: 0.2rem;
    background: #fff;
    border-radius: 0.2rem;
}
.ordertext{
    height: .9rem;
    width: 100%;
    margin: 0 0.15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-top: .2rem;
    text-align: left;
}
.shopist{
    text-align: left;
    font-size: 0.45rem;
    margin: 0 0.4rem;
}
.original_price{
    text-decoration: line-through;
    font-size: 0.3rem;
    color: rgb(204, 204, 204);
    margin: 0 0.2rem;
}
.similar{
    font-size: 0.3rem;
    padding: 0 0.08rem;
    border: 1px solid #e2dedd;
    color: #bdbab9;
    border-radius: 0.3rem;
    float:right;
    margin-top: 0.1rem;
}
.search{
   height: 0.9rem;
   line-height: 1rem;
   margin: 0.18rem 0.4rem;
   border-radius: 0.6rem;
   background: #fff;
   text-align: left;
}
.search img{
    width: 0.6rem;
    height: 0.6rem;
    margin: 0.18rem 0.4rem;

}
.hoder{
    color: #aca6a5;
    position: relative;
    bottom: 0.35rem;
    font-size: 0.4rem;
}
.searchlist{
    width: 100%;
    height: 0.85rem;
}
</style>
