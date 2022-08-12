<template>
	<main id="find-warp">
		<div class="header">
			<div class="find-search">
				<div class="find-back" @click="back">
					<van-icon name="arrow-left" />
				</div>
				<a href="">
					<div class="searchbody">
						<van-icon name="search" />
					</div>
					搜索商品
				</a>
			</div>
			<div class="tab-nav">
				<div class="tab-nav-item thisfoot">
					<a>综合</a>
				</div>
				<div class="tab-nav-item">
					<a>价格</a>
					<span>
						<van-icon name="sort" />
					</span>
				</div>
				<div class="tab-nav-item">
					<a>手机专享</a>
					<span>
						<van-icon name="graphic" />
					</span>
				</div>
			</div>
		</div>
		<div style="margin-top: 22vw;"></div>
		<div class="find-body">
			<ul class="find-list">
				<li v-for="(item,index) in findlist" :key="index">
					<router-link to='/detail'>
						<div class="find-list-img">
							<img :src="item.src" alt="">
						</div>
						<div class="find-list-txt">
							<h3>{{item.name}}</h3>
							<p><span class="price">{{item.price}}</span></p>
						</div>
					</router-link>
					
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				findlist: [{
					src:'img/gpw.png',
					name:'罗技PRO X SUPERLIGHT超轻无线游戏鼠标（粉） ',
					price:'￥999.00'
				},
				{
					src:'img/G650.jpg',
					name:'【新品】罗技SignatureM650无线鼠标粉色 ',
					price:'￥999.00'
				},
				{
					src:'img/G650ww.jpg',
					name:'【新品】罗技SignatureM650无线鼠标白色 ',
					price:'￥269.00'
				},
				{
					src:'img/G650b.png',
					name:' 【新品】罗技SignatureM650无线鼠标黑色 ',
					price:'￥269.00'
				},
				{
					src:'img/G650.jpg',
					name:'【新品】罗技SignatureM650无线鼠标粉色 ',
					price:'￥999.00'
				},
				{
					src:'img/G650b.png',
					name:' 【新品】罗技SignatureM650无线鼠标黑色 ',
					price:'￥269.00'
				},
				{
					src:'img/gpw.png',
					name:'罗技PRO X SUPERLIGHT超轻无线游戏鼠标（粉） ',
					price:'￥999.00'
				},
				{
					src:'img/G650ww.jpg',
					name:'【新品】罗技SignatureM650无线鼠标白色 ',
					price:'￥269.00'
				},
				{
					src:'img/G650.jpg',
					name:'【新品】罗技SignatureM650无线鼠标粉色 ',
					price:'￥999.00'
				},
				{
					src:'img/G650b.png',
					name:' 【新品】罗技SignatureM650无线鼠标黑色 ',
					price:'￥269.00'
				}
				]
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
