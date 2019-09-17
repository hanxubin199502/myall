<template>
 <div class="findlist">
   <div class="callback">
        <div class="tablenative" :class="dynamictablenative">
          <div
          class="tablenativeselect"
          :class="{tablenativetrue:commoditytablenativetrue==0}"
          @click="Alltablenativetruetwo"
        >销量</div>
         <div
          class="tablenativeselect"
          :class="{tablenativetrue:commoditytablenativetrue==1}"
          @click="Alltablenativetrueone"
        >发现</div> 
        <div
          class="tablenativeselect"
          :class="{tablenativetrue:commoditytablenativetrue==2}"
          @click="Alltablenativetruethree"
        >新品</div>
        <div
          class="tablenativeselect"
          id="pticetable"
          :class="{tablenativetrue:commoditytablenativetrue==3}"
          @click="Alltablenativetruefour"
        >
          <div>价格</div>
          <div class="transparent">
            <div class="transparent_top" :class="{transparenttrue_top:commoditytransparent==1}"></div>
            <div
              class="transparent_bottom"
              :class="{transparenttrue_bottom:commoditytransparent==2}"
            ></div>
          </div>
        </div>
      </div>
   </div>
   <div class="Allscrollerstyle">
      <scroller
        :on-infinite="Allinfinite"
        :noDataText="Allmsg"
        :on-refresh="Allrefresh"
        @touchmove.native="touchmove"
        ref="myscroller"
      >
        <div class="ShopoftheDay" id="AllShopoftheDayss">
          <div class="ShopoftheDayauto">
            <div class="ShopoftheDayauto_concent">
              <ul>
                <div
                  class="ShopoftheDayauto_concent_li"
                  v-for="(itemss,index) in tablenativeconcent"
                  :key="index"
                  @click="particularsclick()"
                >
                  <div class="ShopoftheDayauto_concent_liimg_warp">
                    <img :src="itemss.picture" alt class="ShopoftheDayauto_concent_liimg">
                  </div>
                  <div class="ShopoftheDayauto_text">
                  {{itemss.goodsName}}
                  </div>
                  <div class="jianqiangri">
                    <div style="float:left;font-size:0.4rem;">￥{{itemss.presentPrice}}</div>
                     <div class="member_price">
                    <div class="member_priceleft">￥{{itemss.discountPrice}}</div>
                    <div class="member_priceright"></div>
                  </div>             
                  </div>
                </div>

              </ul>
            </div>
          </div>
        </div>
      </scroller>
    </div>
 </div>
</template>

<script>  
export default {
  data () {
    return {
      dynamictablenative: "",
      tablenativetrue: 0,
      commoditytablenativetrue: 0,
      commoditytransparent: null,
      commodityconcent: null,
      sortord: "desc",
      status: "2",
      page:1,
      tablenativeconcent: [
        {
          goodsName:'树叶手链开口叶子手镯',
          presentPrice:169,
          discountPrice:1.69,
          picture:'https://myfile.kkswine.com/aff8b737c2df42bbb4c5bcb82bc446ab.jpg'
        },
        {
          goodsName:'测心率、血压、血氧，多种运动模式，USB直接充电，可换表带',
          presentPrice:279,
          discountPrice:2.79,
          picture:'https://myfile.kkswine.com/af2f450049e448a8adaf4620ea3543c6.jpg'
        },
        {
          goodsName:'男士项链',
          presentPrice:274,
          discountPrice:2.74,
          picture:'https://myfile.kkswine.com/2bf5f1d266a042738c9f88073602dbef.jpg'
        },
        {
          goodsName:'蓝牙音乐，蓝牙电话',
          presentPrice:185,
          discountPrice:1.85,
          picture:'https://myfile.kkswine.com/9f4e03c8d292486da0b043dfbdce03bf.jpg'  
        },
        {
          goodsName:'蓝牙音乐，蓝牙电话',
          presentPrice:185,
          discountPrice:1.85,
          picture:'https://myfile.kkswine.com/9f4e03c8d292486da0b043dfbdce03bf.jpg'  
        },
        {
          goodsName:'蓝牙音乐，蓝牙电话',
          presentPrice:185,
          discountPrice:1.85,
          picture:'https://myfile.kkswine.com/9f4e03c8d292486da0b043dfbdce03bf.jpg'  
        },
        {
          goodsName:'蓝牙音乐，蓝牙电话',
          presentPrice:185,
          discountPrice:1.85,
          picture:'https://myfile.kkswine.com/9f4e03c8d292486da0b043dfbdce03bf.jpg'  
        }
      ],
      Allmsg: "",
    }
  },
  methods:{
     //销量
    Alltablenativetruetwo () {    
      // this.$store.commit("loding", true)
      this.commodityconcent = null
      this.commoditytransparent = null
      this.commoditytablenativetrue = 0
      this.status = "2"
      this.sortord = "desc"
      this.page = 1
      console.log(".....status....", this.status)
      // this.init()
      if (this.tablenativeconcent.length != 0) {
        let $scroller = this.$refs.myscroller
        $scroller.scrollTo(0, true)
      }
    },
  //新品
    Alltablenativetruethree () {
      // this.$store.commit("loding", true)
      this.commodityconcent = null
      this.commoditytransparent = null
      this.commoditytablenativetrue = 2
      this.status = "3"
      this.sortord = "desc"
      this.page = 1
      console.log(".....status....", this.status)
      if (this.tablenativeconcent.length != 0) {
        let $scroller = this.$refs.myscroller
        $scroller.scrollTo(0, true)
      }
    },
    //推荐
    Alltablenativetrueone () {     
      // this.$store.commit("loding", true)
      this.commodityconcent = null
      this.commoditytransparent = null
      this.commoditytablenativetrue = 1
      this.status = "1"
      this.sortord = "desc"
      this.page = 1
      console.log(".....status....", this.status)
      // this.init()
      if (this.tablenativeconcent.length != 0) {
        let $scroller = this.$refs.myscroller
        $scroller.scrollTo(0, true)
      }
    },
   //价格
    Alltablenativetruefour () {
      // this.$store.commit("loding", true)
      this.commoditytablenativetrue = 3
      this.commodityconcent++
      if (this.commodityconcent % 2 != 0) {
        this.commoditytransparent = 1
        this.sortord = "asc"
        this.status = "4"
        this.page = 1
        console.log(".....status....", this.status)
        if (this.tablenativeconcent.length != 0) {
          let $scroller = this.$refs.myscroller
          $scroller.scrollTo(0, true)
        }
      } else {
        this.commoditytransparent = 2
        this.sortord = "desc"
        this.status = "4"
        this.page = 1
        if (this.tablenativeconcent.length != 0) {
          let $scroller = this.$refs.myscroller
          $scroller.scrollTo(0, true)
        }

      }
    },
    particularsclick(){
      this.$router.push({path:'./finddetail'})
    },
    //滚动条大于500 返回顶部按钮出现
    touchmove () {
      //  console.log(this.$refs.myscroller.getPosition().top)
      if (this.$refs.myscroller.getPosition().top >= 500) {
        this.toTopShow = true
      } else {
        this.toTopShow = false
      }
    },
    //上拉加载 下拉刷新
    Allrefresh (done) {

      this.page = 1
      // this.$layer.msg(this.page)
      // this.init(done)
      console.log(this.page)
      console.log("刷新成功")
    },
    Allinfinite (done) {
      if (this.page >= this.hasNext) {
        done(true)
        return
      }
      this.page++
      console.log(this.page)
      // this.init(done)
    },

    beforeRouteLeave (to, from, next) {
    sessionStorage.reclassifyaskPositon = this.$refs.myscroller.getPosition().top
    next()
    },
    // 记录位置
    beforeRouteEnter (to, from, next) {
      next(vm => {
        sessionStorage.setItem('skiprouter', vm.$route.path)
        if (!sessionStorage.reclassifyaskPositon) {
          sessionStorage.reclassifyaskPositon = "";
        } else {
          setTimeout(function () {
            console.log('...scroll...', sessionStorage.reclassifyaskPositon)
            console.log(vm.$refs.myscroller)
            vm.$refs.myscroller.scrollTo(0, sessionStorage.reclassifyaskPositon);
          }, 10)

        }

      })
    },
    // init (done) {
    //   var sendDate = (new Date()).getTime();
    //   let thirdCategoryIdObj = {
    //     status: this.status,
    //     offset: this.page,
    //     limit: 10,
    //     sortord: this.sortord,
    //     // thirdCategoryId:"1017"
    //     thirdCategoryId: sessionStorage.getItem("thirdCategoryId")
    //   }
    //   this.$server.thirdCategoryId(thirdCategoryIdObj).then(data => {
    //     this.$store.commit("load", false)
    //     var receiveDate = (new Date()).getTime();
    //     var responseTimeMs = receiveDate - sendDate;
    //     this.thirdCategoryName = data.data.thirdCategoryName
    //     var that = this
    //     if (responseTimeMs < 300) {
    //       setTimeout(function () {
    //         that.$store.commit("loding", false)
    //       }, 300)
    //     } else {
    //       this.$store.commit("loding", false)
    //     }
    //     console.log(data.data)
    //     if (this.page == 1) {
    //       this.tablenativeconcent = []
    //     }
    //     this.tablenativeconcent = this.tablenativeconcent.concat(data.data.productData)
    //     //  console.log('....合并的数组.....',this.tablenativeconcent)
    //     this.hasNext = Math.ceil(data.data.total / 10)
    //     if (done) done()
    //   })
    // },

  }
}

</script>
<style scoped>
.findlist{
  background: #fff;
}
.callback{
   height: 1.2rem;
   text-align: center;
   line-height: 1.2rem;
   border-bottom:1px solid #eceaea;
}
.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.tablenative {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  line-height: 1.2rem;
  overflow: hidden;
}
.tablenative .tablenativeselect {
  float: left;
  width: 25%;
  text-align: center;
  font-size: 0.4rem;
}
.tablenative .tablenativetrue {
  color: #f7a01f;
}
.dynamictablenative {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.Allscrollerstyle {
  position: fixed;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
.ShopoftheDay {
  width: 100%;
  overflow: hidden;
  margin-top: 0.2rem;
}
.ShopoftheDayauto {
  width: 95%;
  margin: 0 auto;
}
.ShopoftheDayauto_title {
  overflow: hidden;
  font-size: 0.373rem;
  margin-top: 0.4rem;
  padding-bottom: 0.4rem;
}
.ShopoftheDayauto_titleleft {
  float: left;
}
.ShopoftheDayauto_titleright {
  float: right;
  color: #f7a01f;
}
.ShopoftheDayauto_titleright div {
  float: left;
}
.ShopoftheDayauto_titleright img {
  float: left;
  width: 0.3rem;
  margin-top: 0.12rem;
  margin-left: 0.1rem;
}
.ShopoftheDayauto_concent {
  overflow: hidden;
  padding-bottom: 0.4rem;
}
.ShopoftheDayauto_concent_li {
  width: 48.5%;
  float: left;
  margin: 0;
  margin-top: 0.266rem;
  background: #fff;
  border-radius: 6px;
}
.ShopoftheDayauto_concent_li:nth-child(1) {
  margin-top: 0;
}
.ShopoftheDayauto_concent_li:nth-child(2) {
  margin-top: 0;
}
.ShopoftheDayauto_concent_li:nth-child(even) {
 float: right;
}
.ShopoftheDayauto_concent_liimg_warp{
  width: 80%;
  height: 3.5rem;
  margin: 0 auto;
  margin-top: 7%;
}
.ShopoftheDayauto_concent_liimg {
  width: 100%;
  height: 100%;
}
.ShopoftheDayauto_text {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 0.32rem;
  margin-top:.2rem;
  height: .9rem;
  color: #333;
}
#AllShopoftheDayss {
  padding-bottom: 1.2rem;
}
.jianqiangri {
  width: 90%;
  margin: 0 auto;
  font-size: 0.32rem;
  margin-top: 0.2rem;
  color: red;
  padding-bottom: 0.3rem;
  overflow: hidden;
}
.jianqiangri span {
  font-size: 0.4rem;
  margin-left: 0.1rem;
}
 .member_price{
   float: left;
   margin-left: .2rem;
   margin-top: .08rem;
 }
 .member_priceleft{
   float: left;
   color: #CE9E60;
   height: .4rem;
   line-height: .4rem;
   padding: 0 .05rem 0 .05rem;
   font-size: .3rem;
   /* border-radius:5px 0 0 5px; */
 }
 .member_priceright{
   width: .4rem;
   height: .4rem;
   float: left;
 }
</style>
