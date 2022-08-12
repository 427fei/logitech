<template>
	<main class="warp">
		<div class="header">
			<div class="detail-head">
				<div class="find-back" @click="back">
					<van-icon name="arrow-left" />
				</div>
				<a>
					商品详情
				</a>
			</div>
		</div>
		<div style="margin-top: 12vw;"></div>
		<div class="detail-body">
			<div class="detail-swiper">
				<van-swipe :show-indicators="true" indicator-color="red">
					<van-swipe-item v-for="(item,index) in detaillist" :key="index">
						<img :src="item.src" alt="">
					</van-swipe-item>
				</van-swipe>
			</div>
			<div class="detail-title">
				<div class="detail-price">
					<span class="yuan">￥</span>
					999.00
				</div>
				<div class="detail-name">
					罗技PRO X SUPERLIGHT超轻无线游戏鼠标（粉）
				</div>
			</div>
			<div class="detail-opera">
				<div class="detail-num">
					<div class="detail-num-model">
						<p>数量</p>
					</div>
					<div class="detail-model">
						<van-stepper v-model="value" />
					</div>
				</div>
				<div class="detail-adv">
					<div class="detail-adv-item">
						<img src="../assets/img/zheng.png" alt="">
						正品保证
					</div>
					<div class="detail-adv-item">
						<img src="../assets/img/speed.png" alt="">
						闪电发货
					</div>
					<div class="detail-adv-item">
						<img src="../assets/img/seven.png" alt="">
						七天无理由退货(拆封后不支持)
					</div>
				</div>
			</div>
			<div class="detail-evaluation detail-opera">
				<div class="detail-line">
					<div class="detail-line-left">商品评价</div>
					<div class="detail-line-right">
						<span class="price">9998</span>
						<van-icon name="arrow" />
					</div>
				</div>
			</div>
			<div class="detail-product-tab detail-opera">
				<div class="detail-product-head">
					<van-tabs v-model="active" title-active-color="red">
						<van-tab title="商品详情">
							<div class="detail-product-content">
								<ul id="productlist">
									<li v-for="(item,index) in productlist" :key="index">
										<img :src="item.src" alt="">
									</li>
								</ul>
							</div>
						</van-tab>
						<van-tab title="规格参数">
							<div data-v-7b1134a6="" class="tab-container2" style="">
								<h4>
									<b><span style="font-family:微软雅黑;font-size:12pt;">技术规格</span></b>
								</h4>
								<p>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">尺寸</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">长约 125 毫米</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">宽约 63.5 毫米</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">高约 40 毫米</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">重量：&lt;63g</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">传感器：HERO 25K
										光学传感器</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">IPS：400
										IPS</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">报告速率：1,000 Hz (约 1
										毫秒)</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">续航时间：约 70
										小时</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">按键数量：5</span>
								</p>
								<h4>
									<b><span style="font-family:微软雅黑;font-size:12pt;">包装内容</span></b>
								</h4>
								<p>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">PRO X SUPERLIGHT
										无线游戏鼠标</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">LIGHTSPEED
										无线接收器</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">充电/数据线缆</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">接收器扩展适配器</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">防滑贴</span><br>
									<span
										style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">清洁布，用于贴防滑贴之前擦拭</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">带 PTFE
										脚垫的可选底盖</span><br>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">用户文档</span>
								</p>
								<h4>
									<b><span style="font-family:微软雅黑;font-size:12pt;">质保年限</span></b>
								</h4>
								<p>
									<span style="font-family:微软雅黑;color:#666666;font-size:10.5pt;">2年有限硬件质保</span>
								</p>
							</div>
						</van-tab>
					</van-tabs>
				</div>
			</div>
			<div style="margin-bottom: 15vw;"></div>
			<div class="detail-foot-shopcar">
				<van-goods-action>
					<van-goods-action-icon to="/index" icon="wap-home-o" text="首页"/>
					<van-goods-action-icon icon="chat-o" text="客服" />
					<van-goods-action-icon to="/shopcar" icon="cart-o" text="购物车" />
					<van-goods-action-button type="danger" text="加入购物车"/>
				</van-goods-action>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				productlist: [{
						src: 'img/g102-2.jpg'
					},
					{
						src: 'img/can.jpg'
					},
					{
						src: 'img/vippp.jpg'
					},
					{
						src: 'img/g01.gif'
					},
					{
						src: 'img/g02.gif'
					},
					{
						src: 'img/g03.gif'
					},
					{
						src: 'img/g04.gif'
					},
					{
						src: 'img/g05.gif'
					},
					{
						src: 'img/bot.jpg'
					}
				],
				detaillist: [{
						src: 'img/1.png'
					},
					{
						src: 'img/2.png'
					},
					{
						src: 'img/3.png'
					},
					{
						src: 'img/4.png'
					},
					{
						src: 'img/5.png'
					},
				],
				value: 1,
				active: 0
			}
		},
		methods: {
			back() {
				this.$router.back()
			}
		}
	}
	
</script>

<style>
</style>
