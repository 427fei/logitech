<template>
	<main>
		<div class="warp">
			<div class="header">
				<div class="detail-head">
					<div class="find-back" @click="back">
						<van-icon name="arrow-left" />
					</div>
					<a>
						登录
					</a>
				</div>
				<div class="my-body">
					<div class="my-logo">
						<img src="../assets/img/login.png" alt="">
					</div>
					<div class="my-input-main">
						<div class="my-input-phone">
							<div class="my-input-img">
								<img src="../assets/img/phone.png" alt="">
							</div>
							<div class="my-input">
								<input id="phone" @input="phoneoninput()" type="text" placeholder="手机号" >
							</div>
						</div>
						<div class="my-input-phone">
							<div class="my-input-img">
								<img src="../assets/img/pic.png" alt="">
							</div>
							<div class="my-input">
								<input id="yzm" @input="yzmoninput()" type="text" placeholder="图形验证码">
								<div class="my-yzm">
									<img src="../assets/img/YZM.jpg" alt="">
								</div>
							</div>

						</div>
						<div class="my-input-phone">
							<div class="my-input-img img-transform">
								<img src="../assets/img/ys.png" alt="">
							</div>
							<div class="my-input">
								<input id="pass" @input="passoninput()"  type="password" placeholder="密码">
							</div>
						</div>
					</div>
				</div>
				<div class="login-btn" :class="num1 == true&&num2 == true&&num3 == true?logback:''">
					<router-link to="/my">
						<button>登录</button>
					</router-link>
				</div>
				<div class="reg-btn">
					<router-link to="/reg">
						<p>注册账号</p>
					</router-link>
					<span>|</span>
					<p>找回密码</p>
				</div>
				<div class="other-login">
					<div class="other-head">
						<p>用以下方式登陆</p>
					</div>
					<div class="other-login-main">
						<div class="other-login-item">
							<img src="../assets/img/QQ (3).png" alt="">
							<p>QQ登录</p>
						</div>
						<div class="other-login-item">
							<img src="../assets/img/phone (1).png" alt="">
							<p>验证码登录</p>
						</div>
					</div>
				</div>
			</div>
		</div>

	</main>
</template>
<script>
	
	export default {
		data() {
			return {
				num1:false,
				num2:false,
				num3:false,
				logback:'logback',
				loginbtn:'login-btn',
				
			}
		},
		methods: {
			back() {
				this.$router.back()
			},
			phoneoninput() {
				this.num1 =! this.num1
			},
			yzmoninput() {
				this.num2 =! this.num2
			},
			passoninput() {
				this.num3 =! this.num3
			}
		}
	}
</script>

<style>
</style>
