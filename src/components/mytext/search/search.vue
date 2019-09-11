<template>
 <div class="searchbg">
     <div class="searchbar flex">
         <div class="callback" @click="callback"><img src="../../../assets/my_dd_b@2x.png" alt=""></div>
         <div class="searchbox">
             <img src="../../../assets/search.png" alt="">
             <input type="text" placeholder="请输入商品名">
         </div>
         <div class="clicksearch">搜索</div>
     </div>
     <!-- 搜索历史 -->
     <div class="search_history">
         <div class="removelist flex">
             <div>搜索历史</div>
             <div class="remove"><img src="../../../assets/remove.png" alt=""></div>
         </div>
         <div class="label">
             <ul class="ul">
                 <li v-for="item in items">{{item.title}}</li>
             </ul>
         </div>
     </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
        items:[
            {
                title:'茅台'
            },
            {
                title:'爱丽丝猫砂'
            },
            {
                title:'酒'
            },
            {
                title:'绿萝'
            },
            {
                title:'水'
            },
            {
                title:'电脑桌'
            },
        ]
    }
  },
  methods: {
    callback(){
       this.$router.go(-1)
    }
  }
}

</script>
<style scoped>
.searchbg{
    background: #fff;
}
.searchbar{
    height: 1.4rem;
    border-bottom: 1px solid #cdc9c8;
}
.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.searchbox{
    width: 70%;
    height: 0.8rem;
    /* border: 1px solid #000; */
    border-radius: 0.5rem;
    background: #e5e3e3;
}
.searchbox img{
    width: 0.5rem;
    height: 0.5rem;
    margin: 0.15rem 0.2rem;
}
.searchbox input{
    position: relative;
    bottom: 0.26rem;
    background: #e5e3e3;
    border: none;
}
.callback{
 margin-left: 0.4rem;
}
.callback img{
    width: 0.5rem;
    height: 0.5rem;
}
.clicksearch{
    margin-right: 0.4rem;
}
.search_history{
    width: 100%;
    height: 8rem;
}
.removelist{
    margin: 0rem 0.4rem;
    height: 1rem;
}
.remove img{
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.2rem;
}
.label{
    margin: 0 0.4rem;
    height: 100%;
}
.ul{
    width: 100%;
    height: 100%;
}
.ul li{
    height: 0.6rem;
    float: left;
    line-height: 0.6rem;
    margin: 0.2rem 0.2rem;
    border-radius: 0.5rem;
    padding: 0.05rem 0.4rem;
    background: #e2e2e2;
}
</style>
