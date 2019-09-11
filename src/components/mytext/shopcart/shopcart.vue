<template>
 <div>
     <div class="zhegai" v-if="zhegai"></div>
     <div  v-if="shoppingList.length" class="body">
         <div id="app">
            <div class="topnav flex">
              <div></div>
              <div class="car">购物车({{shoppingList.length}})</div>
              <div class="management" @click="Managementlist" v-show="mentshow">管理</div>
              <div class="management" @click="Completelist" v-show="Completeshow">完成</div>
            </div>
            <div class="shoppingMain">
                <div class="shoppingItem" v-for="(item,index) in shoppingList">
                    <div class="selectCircle" :class="{checked:item.isSelect}" @click="selectGoods(item)"></div>
                    <div class="shoppingImg">
                        <img :src="item.imgurl" alt="">
                    </div>
                    <div class="itemRight">
                        <p class="title">{{item.title}}</p>
                        <p class="color">{{item.color}}</p>
                        <div class="numAndMoney">
                            <p class="monernum">￥{{item.money}}</p>
                            <div class="numberControl">
                                <a class="btn" @click="numDel(item,index)" v-if="item.num > 1">-</a>
                                <a class="btn" v-else>-</a>
                                <input type="text" v-model="item.num" readonly="readonly">
                                <a class="btn" @click="numAdd(item,index)">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottomMain">
                <div class="selectCircle" :class="{checked:allSelect}" @click="allGoodsSelect"></div>
                <span style="padding: 10px">全选</span>
                <button class="bottombtn2" @click="delGoods" v-show="removesbtn">删除</button>
                <div class="total" v-show="totalshow">合计:￥{{sum}}</div>
                <button class="bottombtn1" @click="buyGoods" v-show="buyshow">结算</button>                
            </div>
            <div class="exittext" v-show="exitcancle">
              <div class="exittest">确定删除宝贝？</div>
              <div class="cancle flex">
                <div class="camcles" @click="cancel">取消</div>
                <div class="determine" @click="determine">确定</div>
              </div>
            </div>
        </div>
     </div>     
     <div v-else>购物车为空</div>
 </div>
</template>

<script>
export default {
  data () {
    return {
       removesbtn:false,
       totalshow:true,
       buyshow:true,
       mentshow:true,
       Completeshow:false,
       zhegai:false,
       exitcancle:false,
       shoppingList:[
              {
                  imgurl:require("../../../assets/banner1.jpg"),
                  title:"衣架家用收纳衣服撑子晾衣服架衣挂成人晒挂衣架子挂钩宿舍用学生",
                  color:"粉色",
                  money:14119,
                  num:"1",
                  isSelect:false,
              },
              {
                  imgurl:require("../../../assets/banner2.jpg"),
                  title:"衣架家用收纳衣服撑子晾衣服架衣挂成人晒挂衣架子挂钩宿舍用学生",
                  color:"粉色",
                  money:149,
                  num:"1",
                  isSelect:false,
              },
              {
                  imgurl:require("../../../assets/banner1.jpg"),
                  title:"衣架家用收纳衣服撑子晾衣服架衣挂成人晒挂衣架子挂钩宿舍用学生",
                  color:"粉色",
                  money:149,
                  num:"1",
                  isSelect:false,
              },
              {
                  imgurl:require("../../../assets/banner2.jpg"),
                  title:"衣架家用收纳衣服撑子晾衣服架衣挂成人晒挂衣架子挂钩宿舍用学生",
                  color:"粉色",
                  money:149,
                  num:"1",
                  isSelect:false,
              },
              {
                  imgurl:require("../../../assets/banner1.jpg"),
                  title:"衣架家用收纳衣服撑子晾衣服架衣挂成人晒挂衣架子挂钩宿舍用学生",
                  color:"粉色",
                  money:149,
                  num:"1",
                  isSelect:false,
              },
          ],
          allSelect:false,
          sum:0
    }
  },
  methods:{
    Managementlist(){
        this.removesbtn = true
        this.totalshow = false
        this.buyshow = false
        this.mentshow = false
        this.Completeshow = true
    },
    Completelist(){
        this.Completeshow = false
        this.mentshow = true
        this.totalshow = true
        this.buyshow = true
        this.removesbtn = false

    },
    //单选
    selectGoods(item){ 
        item.isSelect = !item.isSelect    //改变选择状态
        this.allSelect = false
        if(item.isSelect == true){
            this.sum = this.sum+(item.money*item.num)
        }else{
            this.sum = this.sum-(item.money*item.num)
        }                                //结算处商品总额计算
    },
    //全选
    allGoodsSelect(){                   
        this.allSelect = !this.allSelect   
        if(this.allSelect == true){
            this.sum=0
            for(var i=0;i<this.shoppingList.length;i++){
                this.shoppingList[i].isSelect = true;
                this.sum = this.sum+(this.shoppingList[i].money*this.shoppingList[i].num)
            }
        }else{
            for(var i=0;i<this.shoppingList.length;i++){
                this.sum = this.sum-(this.shoppingList[i].money*this.shoppingList[i].num)
                this.shoppingList[i].isSelect = false;
            }
        }                                    
    },
    //增加商品
    numAdd(item,index){                     
        item.num++
        if(item.isSelect == true){
            this.sum = this.sum+item.money
        }                                   
    },
    //删减商品
    numDel(item,index){                        
        item.num--
        if(item.isSelect == true){
            this.sum = this.sum-item.money
        }                                     
        if(item.num == 0){
            this.shoppingList.splice(index,1)
        }                                   
    },
    //结算
    buyGoods(){                              
        // alert("购买成功,共花费"+this.sum+"元")
        this.$layer.msg('购买成功，共花费'+ this.sum +'元')
    },
    //删除
    delGoods(){                             
        this.sum = 0;                        
        for(var i=0;i<this.shoppingList.length;i++){
            if(this.shoppingList[i].isSelect){
                this.shoppingList.splice(i,1)
                i--
                this.zhegai = true
                this.exitcancle = true
            }
        }                                   
        if(this.allSelect){
            this.shoppingList.splice(0,this.shoppingList.length);
            this.allSelect = false
        }                                   
    },
    //取消删除
    cancel(){
      this.zhegai = false
      this.exitcancle = false
    },
    //确定删除
    determine(){
      this.zhegai = false
      this.exitcancle = false
      this.$layer.msg('删除成功')
    }
  }
}

</script>
<style scoped>
.body{
    margin: 0;
    padding: 0;
    background: #e0dada;
}
.flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topnav{
  width: 100%;
  height: 1.3rem;
  background: #fff;
  border-bottom: 1px solid #e7e3e2;
  border-top: 1px solid #e7e3e2;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.management{
  margin-right: 0.2rem;
  font-size: 0.4rem;
}
.car{
  font-size: 0.5rem;
}
button{
    outline: none;
    border-color: transparent;
    box-shadow:none;
}
#app{
    margin: 0;
    padding: 0;
    width: 100%;
    
}
.shoppingMain{
    width: 100%;
    height: auto;
    margin-top: 1.35rem;
    margin-bottom: 3rem;
}
.shoppingItem{
    width: 96%;
    margin-left: 2%;
    margin-bottom: 0.25rem;
    background: #fff;
    border-radius:0.3rem;
    display: flex;
}
.selectCircle{
    width: 15px;
    height: 15px;
    border: 1px solid #a7a5a5;
    border-radius: 50%;
    margin: auto 0px auto 10px;
}
.shoppingImg{
    width: 100px;
    height: 100px;
    padding: 10px;
}
.shoppingImg img{
    height: 100%;
    width: 100%;
}
.itemRight{
    font-size: 0.3rem;
    width: 5.8rem;
}
.title{
    width: 5.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 0.25rem;
    font-size: 0.4rem;
}
.color{
  font-size: 0.4rem;
  margin: 0.2rem 0;
}
.monernum{
  font-size: 0.4rem;
  color: #e26411;
  margin-top: 0.4rem;
}
.numAndMoney{
    display: flex;
}
input{
    width: 40px;
    height: 20px;
    margin: 10px;
    text-align: center;
}
.numberControl{
    position: absolute;
    right: 1rem;
}
.bottomMain{
    position: fixed;
    width: 100%;
    height: auto;
    /* border: 1px #a7a5a5 solid; */
    border-top: 1px solid #e7e3e2;
    border-bottom: 1px solid #e7e3e2;
    bottom: 1.25rem;
    left: 0;
    background: #fff;
    display: flex;
    padding: 10px;
}
.total{
  width: 2.5rem;
  height: 1rem;
  line-height: 1rem;
  margin-left: 3.2rem;
  color: #e26411;
}
.bottombtn1{
    width:1.8rem;
    height: 0.8rem;
    border: none;
    color: #fff;
    background-color: #e26411;
    border-radius: .4rem;
    margin-top: 0.1rem;
}
.bottombtn2{
    width:1.8rem;
    height: 0.8rem;
    border: none;
    color: #fff;
    background-color: #cecac7;
    border-radius: .4rem;
    margin-left: 5.7rem;
    margin-top: 0.1rem;
}
.checked{
    background: #e26411;
    border: 1px solid rgba(0, 0, 0, 0)
}
.zhegai {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
}
.exittext{
  height: 3.5rem;
  width: 80%;
  margin: 0.6rem 1rem;
  background: #fff;
  border-radius: 0.5rem;
  position: fixed;
  bottom: 40%;
  z-index: 10000;
  text-align: center;
}
.exittest{
  font-size: 0.5rem;
  font-weight: bold;
  margin: 0.6rem 0;

}
.cancle{
  margin: 0.8rem 1.2rem;
  font-size: 0.5rem;
}
.determine{
  color: #f3be4a;
}
.hst{
  width: 100%;
  height: 100%;
  border: 1px solid #eceaea;
}
.btn{
  font-size: 0.4rem;
}
</style>
