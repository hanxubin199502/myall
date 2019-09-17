import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/mytext/index/index'  //  首页 
import find from '@/components/mytext/find/find'  //  发现
import shopcart from '@/components/mytext/shopcart/shopcart' //购物车
import mycenter from '@/components/mytext/mycenter/mycenter' // 我的
import search from '@/components/mytext/search/search'  //搜索
import finddetail from '@/components/mytext/find/finddetail' //商品详情
import classification from '@/components/mytext/classification/classification' //分类
Vue.use(Router) 


export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: '/index',
      meta:{index:0,haslist:true},
      component: index
    },
    {
      path: '/find',
      name: '/find',
      meta:{index:1,haslist:true},
      component: find
    },
    {
      path: '/classification',
      name: '/classification',
      meta:{index:2,haslist:true},
      component: classification
    },
    {
      path: '/shopcart',
      name: '/shopcart',
      meta:{index:3,haslist:true},
      component: shopcart
    },
    {
      path: '/mycenter',
      name: '/mycenter',
      meta:{index:4,haslist:true},
      component: mycenter
    },
    {
      path: '/search',
      name: '/search',
      component: search
    },
    {
      path: '/finddetail',
      name: '/finddetail',
      component: finddetail
    },
  ]
})
