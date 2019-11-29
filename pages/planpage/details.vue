<template>
	<view class="plan_box">
		<!-- <view class="plan_test">
			还款者昵称：{{data.nickname}}
		</view>
		<view class="plan_test">
			还款者电话：{{data.phone}}
		</view>
		<view class="plan_test">
			还款者等级：{{data.level}}
		</view> -->
		<!-- <view class="plan_test">
			还款者微信：{{item.weixin}}
		</view> -->
		<view class="image">
			<image :src="data.voucher" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data() {
			return {
				data:'',
				index:''
			}
		},
		onShow() {
			service.entire(this, 'get', service.api_root.index.get_list + '?token=' + uni.getStorageSync('token'), {
				status:'1'
			}, function(self, res) { //还款计划
				// console.log(res)
				let data = res.data[self.index]
				data.voucher = service.api +res.data[self.index].voucher
				
				self.data = data
			})
		},
		onLoad(options) {
			
			this.index = options.index
		}
	}
</script>

<style scoped>
    .plan_box {
		width: 100%;
		padding: 10rpx 20rpx;
		font-size: 32rpx;
		height: 290rpx;
		background: #3B4374;
		position: relative;
		box-sizing: border-box;
		border-radius: 10rpx;
		color: #B8C6E0;
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
		margin-right: 20rpx;
	}
	
	.plan_box .bottom .right {
		float: right;
	}
	image{
		width: 100%;
		height: 100%;
	}
</style>
