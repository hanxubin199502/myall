<template>
  <div>
    <div class="footer">
      <div v-for='(item,index) of items' :class='[item.cls,{on:index === idx}]' @click="$router.push(item.push)">
        <img :src="index===idx?item.iconSelect:item.icon">
        <p :class="['colorChange',{on:index===idx}]" >{{item.name}}</p>
      </div>
	</div>
  </div>
</template>

<script>
export default {
  props: ['idx'],
  name: 'bootnavigation',
  data () {
    return {
      items:[{
            cls:"index",
            name:"首页",
            push:"/",
            icon:require("../../assets/index.png"),
            iconSelect:require("../../assets/index_t.png")
				},
				{
            cls:"find",
            name:"发现",
            push:"/find",
            icon:require("../../assets/find.png"),
            iconSelect:require("../../assets/find_t.png")
        },
        {
            cls:"classification",
            name:"分类",
            push:"/classification",
            icon:require("../../assets/fication_t.png"),
            iconSelect:require("../../assets/fication.png")
        },
        {
            cls:"shopcart",
            name:"购物车",
            push:"/shopcart",
            icon:require("../../assets/shopcart.png"),
            iconSelect:require("../../assets/shopcart_t.png")
        },
        {
            cls:"mycenter",
            name:"我的",
            push:"/mycenter",
            icon:require("../../assets/mycenter.png"),
            iconSelect:require("../../assets/mycenter_t.png")
			  }]
        }
    },
}
</script>
<style scoped>
.footer {
  width: 100%;
  color: #000;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e7e3e2;
}
.footer div {
  float: left;
  width: 20%;
  text-align: center;
  height: 1.26rem;
  font-size: 0.293rem;
}
.footer div img {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.2rem;
}

.on {
  color: #2093f7;
}
</style>
