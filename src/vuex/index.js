import Vue from 'vue'
import Vuex from 'vuex'














Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    number:0,
    logowarp:false,
    alert:false,
    msg:"",
    id:null,
    loding:false,
    token:null,
    indexcommodityList:[],
    vuehasNext:0,
    orderList:[],
    current:"1"
 
  },
  mutations: {
    number(state,payload){
      state.logowarp=payload
      console.log(payload)
    },
    alert(state,payload){
      state.alert=payload
    },
    msg(state,payload){
      state.msg=payload
    },
    id(state,payload){
      state.id=payload
    },
    loding(state,payload){
      state.loding=payload
    },
    token(state,payload){
      state.token=payload
    },
    indexcommodityList(state,payload){
      console.log(state)
      state.indexcommodityList=payload
    },
    orderList(state,payload){
      console.log(payload)
      state.orderList.push(payload)
      // state.orderList=payload
    },
    current(state,payload){
      state.current=payload
    }
 

  


  }
})

export default store