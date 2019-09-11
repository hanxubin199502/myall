<template>
 <div>
    <div class="bigbanner">
      <!-- 登录注册 -->
       <div class="centerbanner">
         <div class="portrait flex">
           <div class="portaitleft">
             <img src="../../../assets/t1@2x.png" alt="">
             <div>登录/注册</div>
           </div>
           <div class="portaitright">
             <img src="../../../assets/sz@2x.png" alt="">
           </div>
         </div>
       </div>
       <!-- 我的订单 -->
       <div class="myorder">
          <div class="borderlist flex">
              <div class="myorderlist">我的订单</div>
              <div class="viewall">
                <span>查看全部订单</span>
                <img src="../../../assets/my_icon_f@2x.png" alt="">
              </div>
          </div>
       </div>
       <div class="ordestauts">
         <ul>
           <li>
             <img src="../../../assets/my_icon_dfk@2x.png" alt="">
             <div>待付款</div>
           </li>
           <li>
             <img src="../../../assets/dfh@2x.png" alt="">
             <div>待发货</div>
           </li>
           <li>
             <img src="../../../assets/my_icon_dch@2x.png" alt="">
             <div>待收货</div>
           </li>
           <li>
             <img src="../../../assets/my_icon_wc@2x.png" alt="">
             <div>已完成</div>
           </li>
           <li>
             <img src="../../../assets/my_icon_tk@2x.png" alt="">
             <div>退款/售后</div>
           </li>
         </ul>
       </div>
       <!-- 收货地址 -->
       <div class="mylocation">
         <div class="mylocationauto">
           <div class="mylocationleft">
             <img src="../../../assets/my_icon_add@2x.png" alt="">
             <div>收货地址</div>
           </div>
           <div class="mylocationright">
             <img src="../../../assets/my_icon_f@2x.png" alt="">
           </div>
         </div>
       </div>
       <!-- 账户与安全 -->
       <div class="mylocation">
         <div class="mylocationauto">
           <div class="mylocationleft">
             <img src="../../../assets/security.png" alt="">
             <div>账户与安全</div>
           </div>
           <div class="mylocationright">
             <img src="../../../assets/my_icon_f@2x.png" alt="">
           </div>
         </div>
       </div>
       <!-- 意见反馈 -->
       <div class="mylocation">
         <div class="mylocationauto">
           <div class="mylocationleft">
             <img src="../../../assets/my_y@2x.png" alt="">
             <div>意见反馈</div>
           </div>
           <div class="mylocationright">
             <img src="../../../assets/my_icon_f@2x.png" alt="">
           </div>
         </div>
       </div>
       <!-- 关于我们 -->
       <div class="mylocation">
         <div class="mylocationauto">
           <div class="mylocationleft">
             <img src="../../../assets/gy@2x.png" alt="">
             <div>关于我们</div>
           </div>
           <div class="mylocationright">
             <img src="../../../assets/my_icon_f@2x.png" alt="">
           </div>
         </div>
       </div>
       <!-- 退出登录 -->
       <div class="retreat">
         退出登录
       </div>
    </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}

</script>
<style scoped>
.bigbanner{
  padding-bottom: 2.5rem;
}
.centerbanner{
  width: 100%;
  height: 2.4rem;
  background: url(../../../assets/my_image@2x.png) center, no-repeat;
}
.portrait{
  margin: 0.2rem 0.2rem;
  height: 1.5rem;
  color: #fff;
  position: relative;
  top: 0.4rem;
}
.flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.portaitleft{
  float: left;
  font-size: 0.5rem;
}
.portaitleft img{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  float: left;
}
.portaitleft div{
  float: left;
  margin: 0.2rem 0.2rem;
}
.portaitright img{
  width: 0.5rem;
  margin-right: 0.3rem;
}
.myorder{
  width: 100%;
  height: 1.173rem;
  margin-top: 0.2rem;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
}
.borderlist{
  margin: 0rem 0.4rem;
  height: 1.173rem;
}
.myorderlist{
  font-size: 0.4rem;
}
.viewall span{
  font-size: 0.4rem;
  color: #888;
}
.viewall img{
   width: 0.32rem;
   height: 0.32rem;
}
.ordestauts{
  width: 100%;
  height: 1.886rem;
  background: #fff;
}
.ordestauts ul li{
  width: 20%;
  float: left;
  text-align: center;
  margin-top: 0.346rem;
  font-size: 0.37rem;
  color: #222222;
  position: relative;
}
.ordestauts ul li img{
  width: 0.586rem;
}
.mylocation {
  width: 100%;
  height: 1.25rem;
  box-sizing: border-box;
  border-bottom: 1px solid #f2f2f2;
  background: #fff;
  margin: 0.2rem 0;
}
.mylocationleft {
  float: left;
  font-size: 0.4rem;
  color: #222222;
  overflow: hidden;
}
.mylocationleft img {
  float: left;
  margin-top: 0.35rem;
  margin-right: 0.3rem;
  margin-left: 0.2rem;
}
.mylocationleft div {
  float: left;
  line-height: 1.25rem;
}
.mylocationleft img {
  width: 0.5rem;
  height: 0.526rem;
}
.mylocationright {
  float: right;
  line-height: 1.25rem;
  margin-right: 0.1rem;
}
.mylocationright img {
  width: 0.4rem;
  margin-top:.4rem;
}
.retreat{
  height: 1.25rem;
  margin: 0.4rem 0;
  background: #fff;
  text-align: center;
  line-height: 1.25rem;
  font-size: 0.5rem;

}
</style>
