<template>
 <div>
   <div class="bigbanner">
     <div class="bignav">一级导航</div>
     <div class="title"></div>
     <div class="simnav"  :class="{'hasFixed': needFixed == true}">二级导航</div>
     <div class="simtitle"></div>
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      needFixed:false
    }
  },
  //定义滚动监听事件
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
    //滚动监听事件
    handleScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    console.log(scrollTop)
      if(scrollTop > 300){
        this.needFixed = true;  
      }else{
        this.needFixed = false;
      }
    },

  },
  //移除监听事件
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
<style scoped>
.bignav{
  width: 100%;
  height: 1rem;
  background: green;
  text-align: center;
  line-height: 1rem;
  color: #fff;
  font-size: 0.4rem;
  position: fixed;
  top: 0;
  left: 0;
}
.title{
  height: 8rem;
  border: 1px solid red;
  margin-top: 1rem;
}
.simnav{
  width: 100%;
  height: 1rem;
  background: yellow;
  text-align: center;
  line-height: 1rem;
  color: #000;
  font-size: 0.4rem;
}
.simtitle{
  height: 30rem;
  border: 1px solid red;
}
.hasFixed {
  position: fixed;
  top: 1rem;
  right: 0;
  left: 0;
}
</style>
