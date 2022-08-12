<template>
	<main>
		<router-view></router-view>
		<footer>
			<ul class="foot">
				<li :index="1" @click="sy()">
					<router-link to='/index'>
						<div class="foot-icon" :class="num==0?thisfoot:''">
							<van-icon name="wap-home-o" />
						</div>
						<p>首页</p>
					</router-link>
				</li>
				<li @click="fl()">
					<router-link to='/type'>
						<div class="foot-icon" :class="num==1?thisfoot:''">
							<van-icon name="apps-o" />
						</div>
						<p>分类</p>
					</router-link>
				</li>
				<li @click="fx()">
					<router-link to='/find'>
						<div class="foot-icon" :class="num==2?thisfoot:''">
							<van-icon name="underway-o" />
						</div>
						<p>发现</p>
					</router-link>
				</li>
				<li @click="gwc()">
					<router-link to='/shopcar'>
						<div class="foot-icon" :class="num==3?thisfoot:''">
							<van-icon name="shopping-cart-o" />
						</div>
						<p>购物车</p>
					</router-link>
				</li>
				<li @click="my()">
					<router-link to='/log'>
						<div class="foot-icon" :class="num==4?thisfoot:''">
							<van-icon name="contact" />
						</div>
						<p>我的</p>
					</router-link>
				</li>
			</ul>
		</footer>
	</main>
</template>

<script>
	export default {
		data(){
			return{
				num:0,
				thisfoot:'thisfoot'
			}
		},
		methods:{
			sy(){
				this.num = 0;
			},
			fl(){
				this.num = 1;
			},
			fx(){
				this.num = 2;
			},
			gwc(){
				this.num = 3;
			},
			my(){
				this.num = 4;
			}
		}
	}
</script>

<style>
</style>
