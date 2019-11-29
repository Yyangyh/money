<template>
	<view class="content">
		<view class="plan_box" v-for="(item,index) in data" :key="index">
			<view class="plan_test">
				还款者昵称：{{item.nickname}}
			</view>
			<view class="plan_test">
				还款者电话：{{item.account}}
			</view>
			<view class="plan_test">
				还款者等级：{{item.levelname}}
			</view>
			<!-- <view class="plan_test">
				还款者微信：{{item.weixin}}
			</view>
 -->
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default {
		data() {
			return {
				show: '',
				data: ''
			}
		},
		methods: {

		},
		onShow() {
			service.entire(this, 'get', service.api_root.planpage.history, {
				token: uni.getStorageSync('token'),
				status: '2'
			}, function(self, res) {
				
				self.data = res.data
			})
		}
	}
</script>

<style scoped>
	.plan_box {
		color: #B8C6E0;
		width: 100%;
		padding: 10rpx 20rpx;
		font-size: 32rpx;
		height: 180rpx;
		background: #3B4374;
		position: relative;
		box-sizing: border-box;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
	}

	.plan_box .plan_test {
		margin-bottom: 10rpx;
	}

	.plan_box .bottom {
		width: 95%;
		overflow: hidden;
		position: absolute;
		bottom: 20rpx;

	}

	.plan_box .bottom view {
		background: #35bffd;
		color: #fff;
		text-align: center;
		width: 150rpx;
		border-radius: 10rpx;
		padding: 10rpx 0;
	}

	.plan_box .bottom .left {
		float: left;

	}

	.plan_box .bottom .right {
		float: right;
	}
</style>
