<template>
	<main>
		<div class="long-search">
			<a href="">
				<div class="long-searchbody">
					<van-icon name="search" />
				</div>
				搜索你想要的商品
			</a>
		</div>
		<div class="type-main">
			<div class="type-nav">
				<van-tree-select height="90vh" :items="items" :main-active-index.sync="active">
					<template #content>
					    <div class="mouse-body" v-if="active==0">
							<div class="mouse-type" v-for="(item,index) in mousetype" :key="index">
								<div class="mouse-head">
									<h4>{{item.name}}</h4>
									<van-icon name="arrow" />
								</div>
								<div class="mouse-content ">
									<ul>
										
										<li  v-for="(item,index) in mouselist" :key="index">
											<router-link to="/detail">
												<a href="">
													<div class="integral-img-body">
														<img :src="item.src" alt="">
													</div>
													<div class="integral-img-txt">
														<p class="ppp">{{item.name}}</p>
														<p class="ppp"><span class="price">￥{{item.price}}</span>{{item.point}}</p>
													</div>
												</a>
											</router-link>
										</li>
										<li>
											<router-link to="/find">
												<a href="">
													查看更多 》
												</a>
											</router-link>
										</li>
									</ul>
								</div>
								<div style="margin-bottom: 2vw;"></div>
							</div>
						</div>
						 <div style="margin-bottom: 15vw;"></div>
					  </template>
					 
				</van-tree-select>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						text: '鼠标',
					},
					{
						text: '键盘'
					},
					{
						text: '键鼠套装'
					},
					{
						text: '耳机耳麦'
					},
					{
						text: '音箱'
					},
					{
						text: '视频会议'
					},
					{
						text: '模拟器/方向盘'
					},
					{
						text: '电脑周边'
					},
					{
						text: 'KDA系列'
					},
					{
						text: 'POP系列'
					},
				],
				mouselist:[{
					src:'img/g3.jpg',
					name:'G605',
					price:'123'
				},
				{
					src:'img/g3.jpg',
					name:'G605',
					price:'123'
				},
				{
					src:'img/g3.jpg',
					name:'G605',
					price:'123'
				}
				],
				mousetype:[{
					name:'游戏鼠标'
				},
				{
					name:'激光鼠标'
				},
				{
					name:'蓝牙鼠标'
				},
				{
					name:'无线鼠标'
				},
				],
				active: 0,
			};
		},
	};
</script>

<style>

</style>
