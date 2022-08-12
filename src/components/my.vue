<template>
	<main>
		<div class="warp">
			<div class="my-head">
				<div class="my-head-img">
					<img src="../assets/img/tx.jpg" alt="">
				</div>
				<div class="my-head-name-point">
					<p>小凡</p>
					<span>积分：999</span>
				</div>
			</div>
			<div class="my-main">
				<div class="my-order">
					<van-cell title="我的订单" is-link value="查看全部" />
					<van-grid>
						<van-grid-item icon="paid" text="待付款" badge="1" />
						<van-grid-item icon="send-gift-o" badge="99"  text="待发货" />
						<van-grid-item icon="logistics" badge="999"  text="待收货" />
						<van-grid-item icon="chat-o" badge="999+"  text="待评价" />
					</van-grid>
				</div>
				<van-cell title="我的优惠券" icon="coupon-o">
					<template #right-icon>
						<van-icon name="arrow" class="search-icon" />
					</template>
				</van-cell>
				<van-cell title="地址管理" icon="location-o">
					<template #right-icon>
						<van-icon name="arrow" class="search-icon" />
					</template>
				</van-cell>
				<van-cell title="账户管理" icon="user-o">
					<template #right-icon>
						<van-icon name="arrow" class="search-icon" />
					</template>
				</van-cell>
				<van-cell title="绑定手机号" icon="phone-circle-o">
					<template #right-icon>
						<van-icon name="arrow" class="search-icon" />
					</template>
				</van-cell>
				
			</div>
			
		</div>
	</main>
</template>

<script>
</script>

<style>
</style>
