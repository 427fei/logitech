<template>
	<main>
		<div class="warp">
			<div class="header">
				<div class="detail-head">
					<div class="find-back" @click="back">
						<van-icon name="arrow-left" />
					</div>
					<a>
						注册
					</a>
				</div>
				<div class="my-body">
					<div class="my-logo">
						<img src="../assets/img/login.png" alt="">
					</div>
					<div style="margin-bottom: 16vw;"></div>
					<div class="my-input-main">
						<div class="my-input-phone">
							<div class="my-input-img">
								<img src="../assets/img/phone.png" alt="">
							</div>
							<div class="my-input">
								<input type="text" placeholder="手机号">
							</div>
						</div>
						<div class="my-input-phone">
							<div class="my-input-img">
								<img src="../assets/img/pic.png" alt="">
							</div>
							<div class="my-input">
								<input type="text" placeholder="图形验证码">
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
								<input type="text" placeholder="短信验证码" >
								<div class="my-phone-yzm">
									<button>获取验证码</button>
								</div>
							</div>
							
						</div>
						<div class="my-input-phone">
							<div class="my-input-img">
								<img src="../assets/img/pass.png" alt="">
							</div>
							<div class="my-input">
								<input type="password" placeholder="设置密码">
							</div>
						</div>
					</div>
				</div>
				<div style="margin-bottom: 7.5vw;"></div>
				<div class="login-btn">
					<button>注册</button>
				</div>
				<div class="reg-btn">
					<router-link to="/log">
						<p>去登录</p>
					</router-link>
					<span>|</span>
					<p>找回密码</p>
				</div>
			</div>
		</div>
	
	</main>
</template>

<script>
	export default {
		data() {
			return {
	
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