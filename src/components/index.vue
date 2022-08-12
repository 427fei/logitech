<template>

	<div class="mian warp">
		<div class="search">
			<a href="">
				<div class="searchbody">
					<van-icon name="search" />
				</div>
				搜索商品
			</a>
		</div>
		<div class="rotationimg">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item v-for="(item,index) in rotationimg" :key='index'>
					<img :src="item.src" alt="">
				</van-swipe-item>
			</van-swipe>
		</div>

		<div class="home-nav">
			<ul id="nav-list">
				<li>
					<a href="">
						<div class="navimg">
							<img src="../assets/img/vip.png" alt="">
							<p>会员优惠</p>
						</div>
					</a>
				</li>
				<li>
					<a href="">
						<div class="navimg">
							<img src="../assets/img/taocan.png" alt="">
							<p>套餐专区</p>
						</div>
					</a>
				</li>
				<li>
					<a href="">
						<div class="navimg">
							<img src="../assets/img/new.png" alt="">
							<p>新品上市</p>
						</div>
					</a>
				</li>
				<li>
					<a href="">
						<div class="navimg">
							<img src="../assets/img/business.png" alt="">
							<p>企业采购</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<div class="home-zone">
			<div class="home-zonebody">
				<div class="responimg">
					<img src="../assets/img/buy1.png" alt="">
				</div>
				<div class="responimg">
					<img src="../assets/img/hotbuy.gif" alt="">
				</div>
			</div>
		</div>
		<div class="home-new">
			<div class="home-new-title">
				<span>最新资讯</span>
				<a href="">更多 ></a>
			</div>
			<div class="home-new-img">
				<van-swipe :loop="false" :width="350" :show-indicators="false">
					<van-swipe-item v-for="(item,index) in homenewimg" :key="index">
						<div class="home-new-content">
							<div class="home-new-conbody">
								<div class="contentimg">
									<img :src="item.src" alt="">
								</div>
								<div class="contenttxt">
									<h3>{{item.h3}}</h3>
									<p class="ppp">{{item.p}}</p>
								</div>
							</div>
						</div>
					</van-swipe-item>
				</van-swipe>
			</div>
		</div>
		<div class="home-integral">
			<div class="integral-img">
				<img src="../assets/img/jifen.jpg" alt="">
			</div>
			<div class="integral-body">
				<ul>
					<li v-for="(item,index) in integral" :key="index">
						<a href="">
							<div class="integral-img-body">
								<img :src="item.src" alt="">
							</div>
							<div class="integral-img-txt">
								<p class="ppp">{{item.name}}</p>
								<p class="ppp"><span class="price">{{item.price}}</span>{{item.point}}</p>
							</div>
						</a>
					</li>
					<li>
						<a href="">
							查看更多 》
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="home-integral">
			<div class="integral-img">
				<img src="../assets/img/hotbuy2.gif" alt="">
			</div>
			<div class="integral-body">
				<ul>
					<li v-for="(item,index) in integraltwo" :key="index">
						<a href="">
							<div class="integral-img-body">
								<img :src="item.src" alt="">
							</div>
							<div class="integral-img-txt">
								<p class="ppp">{{item.name}}</p>
								<p class="ppp"><span class="price">{{item.price}}</span>{{item.point}}</p>
							</div>
						</a>
					</li>
					<li>
						<a href="">
							查看更多 》
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="home-category">
			<div class="category-head">
				<a href="">游戏鼠标&nbsp;&nbsp;> </a>
			</div>
			<div class="category-body">
				<van-swipe :loop="false" :width="183" :show-indicators="false">
					<van-swipe-item v-for="(item,index) in category" :key="index">
						<a class="category-content" href="">
							<div class="category-img">
								<img :src="item.src" alt="">
							</div>
							<div class="category-imgbody">
								<p class="ppp">{{item.name}}</p>
								<p class="ppp">{{item.desc}}</p>
								<span class="price">{{item.price}}</span>
							</div>
						</a>
						<a class="category-content" href="">
							<div class="category-img">
								<img :src="item.srcc" alt="">
							</div>
							<div class="category-imgbody">
								<p class="ppp">{{item.namee}}</p>
								<p class="ppp">{{item.descc}}</p>
								<span class="price">{{item.pricee}}</span>
							</div>
						</a>
					</van-swipe-item>		
				</van-swipe>
			</div>
		</div>
		<div class="home-category">
			<div class="category-head">
				<a href="">游戏键盘&nbsp;&nbsp;> </a>
			</div>
			<div class="category-body">
				<van-swipe :loop="false" :width="183" :show-indicators="false">
					<van-swipe-item v-for="(item,index) in categorytwo" :key="index">
						<a class="category-content" href="">
							<div class="category-img">
								<img :src="item.src" alt="">
							</div>
							<div class="category-imgbody">
								<p class="ppp">{{item.name}}</p>
								<p class="ppp">{{item.desc}}</p>
								<span class="price">{{item.price}}</span>
							</div>
						</a>
						<a class="category-content" href="">
							<div class="category-img">
								<img :src="item.srcc" alt="">
							</div>
							<div class="category-imgbody">
								<p class="ppp">{{item.namee}}</p>
								<p class="ppp">{{item.descc}}</p>
								<span class="price">{{item.pricee}}</span>
							</div>
						</a>
					</van-swipe-item>		
				</van-swipe>
			</div>
		</div>
		<ul id="recom" class="home-recom">
			<li v-for="(item,index) in recom" :key="index" >
				<div class="recom-body">
					<div class="recom-cont">
						<div class="recomimg">
							<img :src="item.src" alt="">
						</div>
						<div class="recomtxt">
							<p>{{item.name}}</p>
							<span class="price">{{item.price}}</span>
						</div>
					</div>
					<div class="recom-type">
						<a >{{item.type}}</a>
					</div>
				</div>
			</li>
		</ul>
		<div class="bot" style="margin-bottom: 20vw;"></div>
		<div class="gift">
			<img src="../assets/img/newperson.png" alt="">
		</div>
		<div class="top" :class="scro>=1000?toptop:''">
			<img src="../assets/img/top.png" alt="" @click="totop()">
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				recom:[
				{
					src:'img/pros-01.png',
					name:' 罗技 G PRO无线有线双模游戏机械鼠标',
					desc:'轻量化设计 ',
					price:'￥999',
					type:'无线鼠标'
				},
				{
					src:'img/G813.png',
					name:'罗技 G813 RGB 机械游戏键盘 (GL-Linear) ',
					desc:'USB 2.0拓展端口',
					price:'￥1299',
					type:'无线键盘'
				},
				{
					src:'img/G102b.png',
					name:'罗技 G102二代 LIGHTSYNC游戏鼠标 黑色 ',
					desc:'CGS传感器 自定义RGB灯光',
					price:'￥149',
					type:'有线鼠标'
				},
				
				{
					src:'img/g304p.png',
					name:'罗技 G304 LIGHTSPEED无线游戏鼠标 淡紫色 ',
					desc:'提升十倍性能，高达12000DPI',
					price:'￥349',
					type:'无线鼠标'
				},
				{
					src:'img/G604.png',
					name:'罗技 G604 LIGHTSPEED无线游戏鼠标【限量送蜘蛛侠摇头公仔】 ',
					desc:'15个可编程控制按键 ',
					price:'￥699',
					type:'无线鼠标'
				},
				{
					src:'img/G5021.png',
					name:'罗技 G502 LIGHTSPEED 创世者无线游戏鼠标',
					desc:'高性能HERO 16K 传感器 ',
					price:'￥699',
					type:'无线鼠标'
				},
				{
					src:'img/G502.png',
					name:'罗技 G502 HERO主宰者有线游戏鼠标【限量送蜘蛛侠摇头公仔】 ',
					desc:'全新升级 高性能传感器 ',
					price:'￥499',
					type:'游戏鼠标'
				},
				{
					src:'img/g913TKL.png',
					name:'罗技 G913 TKL无线RGB机械游戏键盘(GL-Clicky)【限量送美国队长摇头公仔】',
					desc:'便携式游戏键盘',
					price:'￥1699',
					type:'游戏鼠标'
				}
				],
				categorytwo:[
					{
						src:'img/g913TKL.png',
						name:'罗技 G913 TKL无线RGB机械游戏键盘(GL-Clicky)【限量送美国队长摇头公仔】',
						desc:'便携式游戏键盘',
						price:'￥1699',
						srcc:'img/G910.png',
						namee:'罗技 G910炫光机械游戏键盘【限量送罗技双肩包+掌托】',
						descc:'疾速炫酷 一触即发',
						pricee:'￥1299'
					},
					{
						src:'img/G813.png',
						name:'罗技 G813 RGB 机械游戏键盘 (GL-Linear) ',
						desc:'USB 2.0拓展端口',
						price:'￥1299',
						srcc:'img/G610.png',
						namee:'罗技 G610 背光机械游戏键盘 青轴【限量送罗技双肩包+掌托】',
						descc:'强段落式键入感 ',
						pricee:'￥899'
					}
					],
				category:[
					{
					src:'img/pros-01.png',
					name:' 罗技 G PRO无线有线双模游戏机械鼠标',
					desc:'轻量化设计 ',
					price:'￥999',
					srcc:'img/G102b.png',
					namee:'罗技 G102二代 LIGHTSYNC游戏鼠标 黑色 ',
					descc:'CGS传感器 自定义RGB灯光',
					pricee:'￥149'
				},
				{
					src:'img/g304p.png',
					name:'罗技 G304 LIGHTSPEED无线游戏鼠标 淡紫色 ',
					desc:'提升十倍性能，高达12000DPI',
					price:'￥349',
					srcc:'img/G604.png',
					namee:'罗技 G604 LIGHTSPEED无线游戏鼠标【限量送蜘蛛侠摇头公仔】 ',
					descc:'15个可编程控制按键 ',
					pricee:'￥699'
				},
				{
					src:'img/G5021.png',
					name:'罗技 G502 LIGHTSPEED 创世者无线游戏鼠标',
					desc:'高性能HERO 16K 传感器 ',
					price:'￥699',
					srcc:'img/G502.png',
					namee:'罗技 G502 HERO主宰者有线游戏鼠标【限量送蜘蛛侠摇头公仔】 ',
					descc:'全新升级 高性能传感器 ',
					pricee:'￥499'
				},
				],
				
				integral: [{
						src: 'img/G502.png',
						name: 'G502主宰者',
						price: '￥379',
						point: ' + 50积分'
					},
					{
						src: 'img/master.png',
						name: 'Master 3无线鼠标',
						price: '￥379',
						point: ' + 50积分'
					},
					{
						src: 'img/MX.png',
						name: 'MX Anywhere 3无线便携鼠标',
						price: '￥379',
						point: ' + 50积分'
					},
					{
						src: 'img/G402-01.png',
						name: 'G402游戏鼠标',
						price: '￥379',
						point: ' + 50积分'
					},
					{
						src: 'img/K580.png',
						name: 'K580办公键盘',
						price: '￥379',
						point: ' + 50积分'
					}
				],


				integraltwo: [{
						src: 'img/gpw1.png',
						name: 'PRO X无线游戏鼠标',
						price: '￥1499'
					},
					{
						src: 'img/01-min.png',
						name: 'M574 轨迹球',
						price: '￥269'
					},
					{
						src: 'img/G333-KDA.jpg',
						name: 'G333游戏耳机',
						price: '￥349'
					},
					{
						src: 'img/box.png',
						name: 'MX Vertical牛年茶宠礼盒',
						price: '￥999'
					},
					{
						src: 'img/pink.png',
						name: 'MX Anywhere 3无线便携鼠标',
						price: '￥799'
					},
					{
						src: 'img/pros-01.png',
						name: 'G PRO无线游戏鼠标',
						price: '￥999'
					}
				],


				rotationimg: [{
						src: 'img/h5.jpg'
					},
					{
						src: 'img/h5.png'
					},
					{
						src: 'img/h4.jpg'
					},
					{
						src: 'img/h51.jpg'
					}
				],
				homenewimg: [{
						src: 'img/lo1.png',
						h3: '罗技G502 LIGHTSPEED创世者无线游戏鼠标入选《时代》杂志2019年度100大最佳创新产品',
						p: '未来，罗技G将更加关注用户体验，将创新与前沿科技不断引入产品。'
					},
					{
						src: 'img/lo2.png',
						h3: '25项国际设计大奖，罗技全囊获！',
						p: '退后，小罗要亮大招了。'
					},
					{
						src: 'img/lo3.png',
						h3: '罗技19财年收官，全球业绩连续第三年双位数增长！',
						p: '强势增长，再创新高！'
					}
				],
				scro:0,
				toptop:'toptop'
			}
		},
		methods: {
			totop() {
				document.documentElement.scrollTop = 0;
			}
		},
		created() {
			$(window).scroll(()=>{
			    // 每滚动一次，执行一次
			    // console.log($(window).scrollTop())
			    // $(window).scrollTop()滚动距离
				this.scro = $(window).scrollTop()
			})
		}
	}
</script>
