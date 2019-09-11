import Vue from 'vue';
import axios from 'axios';
import router from '../router'
import store from '../vuex/index'
// console.log(router)

axios.defaults.timeout = 30000; //网络超时 
// axios.defaults.baseURL ='http://39.104.62.220:1119'                     //测试
// axios.defaults.baseURL = 'https://test-api.kkswine.com' // 测试接口
// axios.defaults.url="https://test.kkswine.com/"            //测试网址
// axios.defaults.baseURL = 'http://192.168.1.76:1119' //本地   // 张建ip
// axios.defaults.baseURL ='http://192.168.1.75:1119' //本地   // 张倩鹏
// axios.defaults.baseURL ='http://192.168.1.233:1119' //本地   // 任国庆
// axios.defaults.baseURL ='http://192.168.1.157:1119' //本地   // 倩倩
// axios.defaults.baseURL ='http://192.168.1.234:1119' //本地   // 白杨
axios.defaults.baseURL ='https://api.kkswine.com'    // 生产
// axios.defaults.url="https://kkswine.com/"            //生产网址

//http request 拦截器  
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json',
      sessionCode: localStorage.getItem('sessionCode') || '',
      sessionId: localStorage.getItem('sessionId') || '',
      equipment: equipment,
      uniqueId: localStorage.getItem("uniqueId"),
      channelid: sessionStorage.getItem("channelid") || "MALL",
      // sessionCode:store.state.sessionCode || localStorage.getItem('sessionCode') ||'',
      // sessionId:store.state.sessionId || localStorage.getItem('sessionId') ||''
    }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);
//响应拦截器即异常处理  
axios.interceptors.response.use(response => {
  return response
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log('错误请求')
        break;
      case 401:
        console.log('未授权，请重新登录')
        break;
      case 403:
        console.log('拒绝访问')
        break;
      case 404:
        console.log('请求错误,未找到该资源')
        break;
      case 405:
        console.log('请求方法未允许')
        break;
      case 408:
        console.log('请求超时')
        break;
      case 500:
        console.log('服务器端出错')
        break;
      case 501:
        console.log('网络未实现')
        break;
      case 502:
        console.log('网络错误')
        break;
      case 503:
        console.log('服务不可用')
        break;
      case 504:
        console.log('网络超时')
        break;
      case 505:
        console.log('http版本不支持该请求')
        break;
      default:
        console.log(`连接错误${err.response.status}`)
    }
  } else {
    console.log('连接到服务器失败')
  }
  return Promise.reject(err)
})
// console.log(router.push)
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
        if (response.data.respCode == "0003") {
          console.log(router.history.current.name)
          sessionStorage.setItem("router", router.history.current.name)
          // store.commit("alert",true)
          // store.commit("msg",response.data.respMsg)
          localStorage.removeItem('sessionCode'),
            localStorage.removeItem('sessionId')
          setTimeout(function () {
            router.push("/logo")
            // store.commit("alert",false)
            // store.commit("msg",response.data.respMsg)
          }, 1000)
        } else if (response.data.respCode == "0001") {
          store.commit("alert", true)
          store.commit("msg", response.data.respMsg)
          setTimeout(function () {
            store.commit("alert", false)
            store.commit("msg", response.data.respMsg)
          }, 1000)
        } else if (response.data.respCode == "0002") {
          store.commit("alert", true)
          store.commit("msg", response.data.respMsg)
          setTimeout(function () {
            store.commit("alert", false)
            store.commit("msg", response.data.respMsg)
          }, 1000)
        } else if (response.data.respCode == "0004") {
          store.commit("alert", true)
          store.commit("msg", response.data.respMsg)
          setTimeout(function () {
            store.commit("alert", false)
            store.commit("msg", response.data.respMsg)
          }, 1000)
        } else if (response.data.respCode == "0005") {
          store.commit("alert", true)
          store.commit("msg", response.data.respMsg)
          setTimeout(function () {
            store.commit("alert", false)
            store.commit("msg", response.data.respMsg)
          }, 1000)
        }

      }, err => {
        reject(err)
      })
  })
}


export const server = {
  weixinlogo: function (weixinlogoObj) {
    return post('/login/wechatLogin', weixinlogoObj); //微信登录
  },
  regsms: function (regsmsObj) {
    return post('/sms/regsms', regsmsObj); //验证码
  },
  logo: function (logoObj) {
    return post('/login/login', logoObj); //登录
  },
  phoneregsms: function (phoneregsmsObj) {
    return post('/sms/bindsms', phoneregsmsObj); //绑定手机号验证码
  },
  bindPhone: function (bindPhoneObj) {
    return post('/login/bindPhone', bindPhoneObj); //绑定手机号
  },
  bindWechat: function (bindWechatObj) {
    return post('/user/bindWechat', bindWechatObj); //绑定微信
  },
  ceshi: function (ceshiObj) {
    return post('/test/test1', ceshiObj); //测试
  },
  home: function (homeObj) {
    return post('/product/getCategoryTwo', homeObj); //分类头部列表
  },
  secret: function (secretObj) { //用户免密登录
    return post('/login/secretlogin', secretObj);
  },
  homeconcent: function (homeconcentObj) {
    return post('/product/getProduct', homeconcentObj); //分类头部列表
  },

  getProductDetails: function (getProductDetailsObj) {
    return post('/product/getProductDetails', getProductDetailsObj); //详情页
  },
  getProductAttrDetails: function (getProductAttrDetailsObj) {
    return post('/product/getProductAttrDetails', getProductAttrDetailsObj); //规格列表
  },

  queryProductPrice: function (queryProductPriceObj) {
    return post('/product/queryProductPrice', queryProductPriceObj); //选规格变动价格
  },
  userInfo: function (userInfoObj) {
    return post('/user/userInfo', userInfoObj); //我的模块
  },
  addressList: function (addressListObj) {
    return post('/address/addressList', addressListObj); //我的地址列表
  },
  addAddress: function (addAddressObj) {
    return post('/address/addAddress', addAddressObj); //新增地址
  },
  setDefaultAddress: function (setDefaultAddressObj) {
    return post('/address/setDefaultAddress', setDefaultAddressObj); //设为默认地址
  },
  remover: function (removerObj) {
    return post('/address/delAdderss', removerObj); //删除地址
  },
  getAddress: function (getAddressObj) {
    return post('/address/getAddress', getAddressObj); //编辑地址
  },
  updateAddress: function (updateAddressObj) {
    return post('/address/updateAddress', updateAddressObj); //确认编辑地址
  },
  userMsg: function (userMsgObj) {
    return post('/user/userMsg', userMsgObj); //我的资料
  },
  setUsername: function (setUsernameObj) {
    return post('/user/setUsername', setUsernameObj); //修改昵称
  },
  basket: function (basketObj) {
    return post('basket/addbasket', basketObj); //提交订单
  },
  anonymousAddress: function (anonymousAddressObj) {
    return post('/address/anonymousAddress', anonymousAddressObj); //增加修改匿名地址
  },
  getBasketInfo: function (getBasketInfoObj) {
    return post('basket/getBasketInfo', getBasketInfoObj); //获取购物信息
  },
  createOrder: function (createOrderObj) {
    return post('order/createOrder', createOrderObj); //虚拟订单确认订单
  },
  getDefaultAddress: function (getDefaultAddressObj) {
    return post('/address/getDefaultAddress', getDefaultAddressObj); //确认订单地址
  },
  getUserAllOrder: function (getUserAllOrderObj) {
    return post('order/getUserAllOrder', getUserAllOrderObj); //我的全部订单
  },
  cancelOrder: function (cancelOrderObj) {
    return post('refundOrder/cancelOrder', cancelOrderObj); //取消订单
  },
  receiveOrder: function (receiveOrderObj) {
    return post('order/receiveOrder', receiveOrderObj); //确认收货
  },
  affirmPay: function (affirmPayObj) {
    return post('order/affirmPay', affirmPayObj); //确认付款
  },
  createRefundOrder: function (createRefundOrderObj) {
    return post('refundOrder/createRefundOrder', createRefundOrderObj); //申请退换货
  },
  getAllRefundOrder: function (getAllRefundOrderObj) {
    return post('refundOrder/getAllRefundOrder', getAllRefundOrderObj); //退款售后列表
  },
  queryLogistics: function (queryLogisticsObj) {
    return post('/logistics/queryLogistics', queryLogisticsObj); //查看物流
  },
  logout: function (logoutObj) {
    return post('/login/logout', logoutObj); //退出登录
  },
  queryRechargeProduct: function (queryRechargeProductObj) {
    return post('/recharge/queryRechargeProduct', queryRechargeProductObj); //手机充值订单
  },
  gainphone: function (gainphoneObj) {
    return post('/user/getPhone', gainphoneObj); //获取手机号
  },
  payment: function (paymentOBj) {
    return post('/payment/getAllPayment', paymentOBj); //支付方式List
  },

  // threePay:function(threePayObj){ 
  //   return post('/payment/threePay',threePayObj);  //第三方支付宝支付
  // },
  aliPay: function (aliPayObj) {
    return post('/payment/aliPay', aliPayObj); //支付宝支付
  },

  wechatPay: function (wechatPayObj) {
    return post('/payment/wechatPay', wechatPayObj); //微信支付
  },
  wechatJsPay: function (wechatJsPayObj) {
    return post('/payment/wechatJsPay', wechatJsPayObj); //微信公众号支付
  },
  isBindWechat: function (isBindWechatObj) {
    return post('/user/isBindWechat', isBindWechatObj); //是否绑定微信
  },
  getOpenid: function (getOpenidObj) {
    return post('/login/getOpenid', getOpenidObj); //获取openid
  },
  addOpinion: function (addOpinionObj) {
    return post('opinion/addOpinion', addOpinionObj); //意见反馈
  },
  homepage: function (homepageObj) {
    return post('/homepage/synthesize', homepageObj); //首页
  },
  bottomNav: function (bottomNavObj) {
    return post('/homepage/bottomNav', bottomNavObj); //底部导航栏
  },
  getRecoverableRecommendProduct: function (getRecoverableRecommendProductObj) {
    return post('/product/getRecoverableRecommendProduct', getRecoverableRecommendProductObj); //闲置换钱推荐商品
  },
  getRecoverableProduct: function (getRecoverableProductObj) {
    return post('/order/getRecoverableProduct ', getRecoverableProductObj); //闲置换钱
  },
  getJumpUrl: function (getJumpUrlObj) {
    return post('/recycle/getJumpUrl ', getJumpUrlObj); //一键换取
  },
  getOrderUrl: function (getOrderUrlObj) {
    return post('/recycle/getOrderUrl ', getOrderUrlObj); //个人信息回收订单
  },
  bankAndCredit: function (bankAndCreditObj) {
    return post('/creditcard/bankAndCredit', bankAndCreditObj); //信用卡列表
  },
  creditcard: function (creditcardObj) {
    return post('/creditcard/creditcard', creditcardObj); //信用卡详情页
  },
  extension: function (extensionObj) {
    return post('/extension/add', extensionObj);
  },
  clickCredit: function (clickCreditObj) {
    return post('/extension/clickCredit', clickCreditObj);
  },
  auth: function (data) { //基础信息认证
    return post('/authentication/auth', data);
  },
  idCardPic: function (data) { //身份证认证
    return post('/authentication/idCardPic', data);
  },
  facePic: function (data) { //本人认证
    return post('/authentication/facePic', data);
  },
  getHuiShengUrl: function (data) { //个人信息
    return post('/authentication/getHuiShengUrl', data);
  },
}


document.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
})
var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
  var now = (new Date()).getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false)

var u = navigator.userAgent,
  app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if (isAndroid) {
  var equipment = "Android"

} else if (isIOS) {
  var equipment = "IOS"

} else {
  var equipment = "PC"


}

// 禁止打开控制台
// document.onkeydown=function(){
//     var e=window.event||arguments[0];
//     if(e.keyCode==123){
//         return false;
//     }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
//         return false;
//     }
// };
// document.oncontextmenu=function(){
//     return false;
// }


export let parameter = "v1" //版本号
// export let url = "https://test.kkswine.com/v1/zhifuintermediation" //           测试
export let url="https://kkswine.com/v1/zhifuintermediation" //支付成功回跳页  生产
export default ({

})
