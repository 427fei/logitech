<template>
	<main>
		<div class="shopcar-head">
			<a> </a>
			<p>购物车</p>
			<span>编辑</span>
		</div>
		<div class="shopcar-body">
			<ul class="shopcar-list">
				<li v-for="(item,index) in shoplist" :key="index">
					<div :index="index" @click="checkbtn(index)" :class="{'checked':item.flag,'shopcar-checkbox':1}">
						<i></i>
					</div>
					<div class="shopcar-product">
						<div class="shopcar-product-body">
							<div class="shopcar-product-img">
								<img :src="item.src" alt="">
							</div>
							<div class="shopcar-product-txt">
								<div class="shopcar-product-title">
									<a>{{item.title}}</a>
								</div>
								<div class="shopcar-product-price">
									<span class="price">￥{{item.price}}</span>
									<div class="produvt-num">
										<van-stepper @change="onChange()" v-model="item.value" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="shopcar-foot">
			<div class="shopcar-allcheck">
				<div :class="num1==true?checkbox:''" class="shopcar-checkbox" @click="sumbtn()">
					<i></i>
				</div>
				<p>全选</p>
			</div>
			<div class="shopcar-right">
				<div class="shopcar-money">
					<p>
						合计：<span class="price">￥{{sum}}</span>
					</p>
					<p>
						积分：<span class="price">0.00</span>
					</p>
				</div>
				<div class="shopcar-sum logback">
					<button>结算</button>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				shoplist: [{
						src: 'img/gpw.png',
						title: '罗技PRO X SUPERLIGHT超轻无线游戏鼠标（粉）',
						price: '999.00',
						flag: false,
						value: 4,
					},
					{
						src: 'img/G650b.png',
						title: ' 【新品】罗技SignatureM650无线鼠标黑色 ',
						price: '269.00',
						flag: false,
						value: 1,
					},
					{
						src: 'img/G650.jpg',
						title: '【新品】罗技SignatureM650无线鼠标粉色 ',
						price: '999.00',
						flag: false,
						value: 1,
					},
					{
						src: 'img/G650b.png',
						title: ' 【新品】罗技SignatureM650无线鼠标黑色 ',
						price: '269.00',
						flag: false,
						value: 1,
					}
				],
				num: -1,
				num1: false,
				checkedall: false,
				logback: 'logback',
				checkbox: 'checked',
				sum: 0
			};
		},
		created() {
			this.onChange()
		},
		methods: {	
			checkbtn(index) {
				this.shoplist[index].flag = !this.shoplist[index].flag,
					this.index =! this.shoplist[index].flag
				if (this.shoplist[index].flag) {
					this.sum += this.shoplist[index].value * this.shoplist[index].price
				} else {
					this.sum -= this.shoplist[index].value * this.shoplist[index].price
				}
			},
			onChange() {
				var resum = 0
				for (let i = 0; i < this.shoplist.length; i++) {
					if (this.shoplist[i].flag ) {
						resum = resum+ (this.shoplist[i].price * this.shoplist[i].value)
					}
				}
				 this.sum = resum
			},
			sumbtn() {
				this.num1 =! this.num1
				for (var i = 0; i < this.shoplist.length; i++) {
					if (this.num1==true) {
						this.shoplist[i].flag = true
						this.onChange()
					} else{
						this.shoplist[i].flag = false
						this.onChange()
					}
				}
			},
		},
		
	};
</script>

<style src="../assets/css/shopcar.css" scoped></style>
