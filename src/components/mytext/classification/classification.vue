<template>
 <div>
     <div class="bigbanner">
         <div class="nav">分类</div>
         <div id="fl" class="f1">
			<div class="l_bar">
				<div v-for="(item,idx) in lbars" class="litem" :key="idx">
					<div :data-idx='idx' class="pritem " v-bind:class="curIdx==idx?'active':''" @click="lbarClick">{{item.name}}</div>
					<div v-for="(clItem,cidx) in item.children" class="cleftitem" :data-cidx="cidx" v-bind:class="cCurIdx==cidx?'active':''" v-show="curIdx==idx" :key="cidx" @click="lcbarClick">
						{{clItem.name}}
					</div>
				</div>
			</div>
			<div class="r_bar">
				<div v-for="(item,idx) in rbars" class="ritem" :key="">
					<div class='ritem_l' @click='detailClick'>
						<img :src="item.img" />
					</div>
					<div class='ritem_r'>
						<div class='title twoline'>{{item.title}}{{item.spec}}</div>
						<!-- <div class='status'>
							<span v-for='sts in item.status' :key=''>{{sts}}</span>
						</div> -->
						<div class='desc'>
							<div class='price'>
								<span class='pri'>￥{{item.price}}</span>
								<span class='orig'>￥{{item.orig}}</span>
							</div>
							<!--v-show="item.count>0"-->
							<div class='count'>
								<span class='bor jian' :data-idx='idx' v-show="item.count>0" @click='jianClick'>-</span>
								<span class='num' v-show="item.count>0">{{item.count}}</span>
								<span class='bor jia' :data-idx='idx' @click='jiaClick'>+</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
     </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
        lbars: [{
            id: 1,
            name: '推荐商品',
            children: [{
                    id: 10,
                    name: '幸福晚饭',
                },
                {
                    id: 11,
                    name: '品尝食光',
                },
                {
                    id: 12,
                    name: '一分钟沙拉',
                }]
            },
            {
                id: 2,
                name: '秋季',
                children: [{
                        id: 10,
                        name: '干果',
                    },
                    {
                        id: 11,
                        name: '水果',
                    },
                    {
                        id: 12,
                        name: '蔬菜',
                    }
                ]
            },
            {
                id: 4,
                name: '冬季',
                children: [{
                        id: 10,
                        name: '干果',
                    },
                    {
                        id: 11,
                        name: '水果',
                    },
                    {
                        id: 12,
                        name: '蔬菜',
                    }
                ]
            },
            {
                id: 1,
                name: '春季',
                children: [{
                        id: 10,
                        name: '干果',
                    },
                    {
                        id: 11,
                        name: '水果',
                    },
                    {
                        id: 12,
                        name: '蔬菜',
                    }
                ]
            },
            {
                id: 2,
                name: '夏季',
                children: [{
                        id: 10,
                        name: '干果',
                    },
                    {
                        id: 11,
                        name: '水果',
                    },
                    {
                        id: 12,
                        name: '蔬菜',
                    }
                ]
            },
            {
                id: 2,
                name: '电脑办公',
                children: [{
                        id: 10,
                        name: '华硕笔记本',
                    },
                    {
                        id: 11,
                        name: '联想台式机',
                    },
                    {
                        id: 12,
                        name: '小米笔记本',
                    }
                ]
            },
            {
                id: 4,
                name: '家具',
                children: [{
                        id: 10,
                        name: '沙发',
                    },
                    {
                        id: 11,
                        name: '茶几',
                    },
                    {
                        id: 12,
                        name: '椅子',
                    }
                ]
            },
            {
                id: 1,
                name: '二手商品',
                children: [{
                        id: 10,
                        name: 'iponex',
                    },
                    {
                        id: 11,
                        name: '华为',
                    },
                    {
                        id: 12,
                        name: '小米',
                    }
                ]
            },
            {
                id: 2,
                name: '玩具',
                children: [{
                        id: 10,
                        name: '卡丁车',
                    },
                    {
                        id: 11,
                        name: '陀螺',
                    },
                    {
                        id: 12,
                        name: '悠悠球',
                    }
                ]
            },
            {
                id: 2,
                name: '男装',
                children: [{
                        id: 10,
                        name: '男裤',
                    },
                    {
                        id: 11,
                        name: '卫衣',
                    },
                    {
                        id: 12,
                        name: '衬衫',
                    }
                ]
            },
            {
                id: 2,
                name: '女装',
                children: [{
                        id: 10,
                        name: '喇叭裤',
                    },
                    {
                        id: 11,
                        name: '卫衣',
                    },
                    {
                        id: 12,
                        name: '长衫',
                    }
                ]
            },
            {
                id: 4,
                name: '渔具',
                children: [{
                        id: 10,
                        name: '鱼钩',
                    },
                    {
                        id: 11,
                        name: '鱼漂',
                    },
                    {
                        id: 12,
                        name: '鱼竿',
                    }
                ]
            },
            {
                id: 1,
                name: '厨具',
                children: [{
                        id: 10,
                        name: '铲子',
                    },
                    {
                        id: 11,
                        name: '勺子',
                    },
                    {
                        id: 12,
                        name: '筷子',
                    }
                ]
            },
            {
                id: 2,
                name: '模型',
                children: [{
                        id: 10,
                        name: '汽车模型',
                    },
                    {
                        id: 11,
                        name: '轮船模型',
                    },
                    {
                        id: 12,
                        name: '玩具模型',
                    }
                ]
            },
            {
                id: 2,
                name: '美妆护肤',
                children: [{
                        id: 10,
                        name: '眼影',
                    },
                    {
                        id: 11,
                        name: 'BB霜',
                    },
                    {
                        id: 12,
                        name: '洁面乳',
                    }
                ]
            },
            {
                id: 4,
                name: '清洁用品',
                children: [{
                        id: 10,
                        name: '牙刷',
                    },
                    {
                        id: 11,
                        name: '牙膏',
                    },
                    {
                        id: 12,
                        name: '手帕纸',
                    }
                ]
            }
            ],
            curIdx: 0,
            cCurIdx: 0,
            rbars: [{
                    img: require('../../../assets/fr_pingguo.png'),
                    title: '湾仔码头手工水饺 荠菜猪肉灌汤水饺',
                    spec: '1000g*1000000 房价会根据发货的健康黄寺大街话费交电话费',
                    status: ['满减', '折扣'],
                    price: '6000.00',
                    orig: '7000.00',
                    stock: 30000,
                    count: 0
                },
                {
                    img: require('../../../assets/fr_pingguo1.png'),
                    title: '牛奶花生核桃奶',
                    spec: '1kg',
                    status: ['折扣'],
                    price: '6.00',
                    orig: '7.00',
                    stock: 30000,
                    count: 0
                },
                {
                    img: require('../../../assets/fr_pingguo3.png'),
                    title: '娃哈哈旺仔牛奶',
                    spec: '1袋*2.5kg',
                    status: ['满减'],
                    price: '6.00',
                    orig: '7.00',
                    stock: 30000,
                    count: 0
                },
                {
                    img: require('../../../assets/fr_pingguo4.png'),
                    title: '旺仔牛奶糖',
                    spec: '1kg',
                    price: '6.00',
                    orig: '7.00',
                    stock: 30000,
                    count: 0
                },
                {
                    img: require('../../../assets/fr_pingguo1.png'),
                    title: '桃花村桃花酒',
                    spec: '2.5kg 酒精度：43度',
                    status: ['满减'],
                    price: '6.00',
                    orig: '7.00',
                    stock: 30000,
                    count: 0
                },
                {
                    img: require('../../../assets/fr_pingguo.png'),
                    title: '花生 瓜子 核桃',
                    spec: '1kg*1kg*1kg',
                    status: ['满减'],
                    price: '6.00',
                    orig: '7.00',
                    stock: 30000,
                    count: 0
                },
                {
                    img: require('../../../assets/fr_pingguo3.png'),
                    title: '雪亮抽纸',
                    spec: '116mm*173mm*240张',
                    status: ['满减'],
                    price: '6.00',
                    orig: '7.00',
                    stock: 30000,
                    count: 0
                },
                {
                    img: require('../../../assets/fr_pingguo4.png'),
                    title: '老村长酒',
                    spec: '酒精度：52度',
                    status: ['满减'],
                    price: '6.00',
                    orig: '7.00',
                    stock: 30000,
                    count: 0
                }
            ]
        }
    },
  methods:{
      //减
        jianClick(e) {
            let idx = parseInt(e.target.dataset.idx);
            let list = this.rbars;
            let count = parseInt(list[idx].count);
            if(count <= 0) {
                count = 0;
            } else {
                list[idx].count = count - 1;
            }
            this.rbars = list;
        },
        // 加
        jiaClick(e) {
			// console.log(e.target.dataset.idx);
            let idx = parseInt(e.target.dataset.idx);
            let list = this.rbars;
            let count = parseInt(list[idx].count);
            if(count < 0) {
                count = 1;
            } else {
                list[idx].count = count + 1;
            }
            this.rbars = list;
        },
        //左边滚动栏
        lbarClick(e) {
            this.curIdx = e.currentTarget.dataset.idx;
            this.cCurIdx = 0;
            console.log('左侧分类')
        },
        //左边滚动栏内部分类
        lcbarClick(e) {
            this.cCurIdx = e.currentTarget.dataset.cidx;
            console.log('左侧二级分类')
        },
        //详情
        detailClick(e) {
			console.log(JSON.stringify(e));
            let id = e.currentTarget.dataset.id;
            this.$router.push({path:'./detail/detail?id='+id})
            console.log('右侧分类')
        },
    }
}

</script>
<style scoped>
.nav{
    width: 100%;
    height: 1rem;
    background: #fff;
    text-align: center;
    line-height: 1rem;
    font-size: 0.4rem;
    position: fixed;
    top: 0;
    z-index: 100;
}
body {
	padding: 0;
	margin: 0;
	font-size: .28rem;
}
.f1{
    margin-top: 1rem;
}
/* 二级菜单 */

.bar {
   /* margin-top: 1rem; */
}
.l_bar {
	position: fixed;
	float: left;
	width: 25%;
	height: 100%;
	overflow: auto;
}
.litem {
	width: 100%;
	height: auto;
}
.litem:last-child {
	margin-bottom: 1.50rem;
}
.pritem {
	width: 100%;
	height: 0.88rem;
	line-height: 0.88rem;
	text-align: center;
	font-size: 0.30rem;
	color: #333;
	background: #eee;
	border-bottom: 1px #ddd solid;
}
.pritem.active {
	background: #d81e06;
	color: #FFF;
}
.cleftitem {
	position: relative;
	width: 100%;
	height: 0.88rem;
	line-height: 0.88rem;
	text-align: center;
	font-size: 0.28rem;
	color: #666;
	border-bottom: 1px #efefef dashed;
	border-right: 1px #efefef solid;
}
.cleftitem.active {
	color: #d81e06;
	border-right: none;
}
.cleftitem:last-child {
	border: none;
}
.cleftitem.active::before {
	content: "";
	position: absolute;
	left: 0.05rem;
	width: 0.10rem;
	height: 0.30rem;
	top: 50%;
	margin-top: -0.15rem;
	color: transparent;
	background: #d81e06;
}
.r_bar {
	float: right;
	width: 75%;
	height: 100%;
	overflow-y: auto;
	padding-bottom: 1rem;
}
.ritem {
	width: 100%;
	height: 1.84rem;
	border-bottom: 1px #eee solid;
}
.ritem:last-child {
	margin-bottom: 2rem;
}
.ritem_l {
	float: left;
	width: 1.84rem;
	height: 1.84rem;
}
.ritem_l img {
	width: 1.64rem;
	height: 1.64rem;
	margin: 0.10rem;
	border-radius: 0.08rem;
}
.ritem_r {
	position: relative;
	float: left;
	width: 5.5rem;
	height: 1.84rem;
}
.ritem_r .title {
	width: 100%;
	margin-top: 0.10rem;
	font-size: 0.32rem;
    margin-left: 0.15rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.ritem_r .status {
	display: flex;
	height: 0.40rem;
}
.ritem_r .status span {
	margin-right: 0.10rem;
	line-height: 0.40rem;
	padding: 0 0.10rem;
	font-size: 0.22rem;
	color: #fff;
	border-radius: 0.08rem;
	background: #d81e06;
}
.ritem_r .desc {
	display: flex;
	position: absolute;
	bottom: 0.10rem;
	width: 100%;
	height: 0.50rem;
	line-height: 0.50rem;
}
.ritem_r .desc .price {
	width: 3.8rem;
	overflow: hidden;
}
.ritem_r .desc .price .pri {
	color: #d81e06;
	font-size: 0.30rem;
}
.ritem_r .desc .price .orig {
	margin-left: 0.20rem;
	color: #999;
	font-size: 0.22rem;
	text-decoration-line: line-through;
}
.ritem_r .desc .count {
	position: absolute;
	right: 0.10rem;
	display: flex;
	justify-content: flex-end;
	height: 0.40rem;
	margin-top: 0.05rem;
	padding-left: 0.10rem;
	font-size: 0.30rem;
	background: #fff;
}
.ritem_r .desc .count .bor {
	width: 0.40rem;
	height: 0.40rem;
	line-height: 0.40rem;
	text-align: center;
	font-size: 0.38rem;
	border-radius: 0.08rem;
}
.ritem_r .desc .count .jia {
	border: 1px #d81e06 solid;
	color: #d81e06;
}
.ritem_r .desc .count .jian {
	border: 1px #999 solid;
	color: #999;
}
.ritem_r .desc .count .num {
	width: 0.50rem;
	line-height: 0.55rem;
	text-align: center;
	font-size: 0.26rem;
}
</style>
