<template>
	<view class="content">
		<view class="account">
			<view class="first">
				<view>佣金账户</view>
				<view @click="withdraw()">明细</view>
			</view>
			<view class="second">
				￥<text>0.0000</text>
			</view>
			<view class="frozen">冻结：<text>￥0.0000</text></view>
			<view class="available">可用：<text>￥0.0000</text></view>
			<button @click="withdraw()">提现</button>
		</view>
		<view class="account">
			<view class="first">
				<view>保证金账户</view>
				<view @click="detailed()">明细</view>
			</view>
			<view class="second">
				￥<text>{{user.bond}}</text>
			</view>
			<view class="frozen">冻结：<text>￥0.0000</text></view>
			<!-- <view class="available">可用：<text>￥0.0000</text></view> -->
			<button  @click="withdraw()">提现</button>
		</view>
		<view class="account">
			<view class="first">
				<view>日返账户</view>
				<!-- <view>明细</view> -->
			</view>
			<view class="second">
				￥<text>0.0000</text>
			</view>
			<view class="frozen">预计今日返还：<text>￥0.0000</text></view>
			<!-- <view class="available">可用：<text>￥0.0000</text></view> -->
			<!-- <button>提现</button> -->
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				user:uni.getStorageSync('user')
			}
		},
		methods:{
			withdraw(){
				uni.showToast({
					icon:'none',
					title:'正在努力开发中...'
				})
				return
				uni.navigateTo({
					url:'../walletpage/withdraw'
				})
			},
			detailed(){
				uni.navigateTo({
					url:'../walletpage/detailed'
				})
			}
		}
	}
</script>

<style scoped>
	.content{
		color: #B8C6E0;
		background: #2E3264;
		/* height: 100%; */
		overflow: hidden;
		padding: 0 20rpx;
		padding-top: 30rpx;
		padding-bottom: 100rpx;
	}
	
	.account{
		font-size: 32rpx;
		background: #3B4374;
		padding: 40rpx 20rpx;
		position: relative;
		margin-bottom: 30rpx;

	}
	.first{
		overflow: hidden;
	}
	.first view:nth-of-type(1){
		float: left;
	}
	.first view:nth-of-type(2){
		float: right;
		color: #35C1FD;
		font-size: 32rpx;
	}
	.second{
		margin: 20rpx 0;
		color: #fff;
	}
	.second text{
		font-size: 80rpx;
		
	}
	.frozen{
		margin-bottom: 20rpx;
	}
	.frozen text{
		color: #35C1FD;
	}
	.available text{
		color: #35C1FD;
	}
	.account button{
		position: absolute;
		right: 20rpx;
		bottom: 20rpx;
		height: 70rpx;
		line-height: 70rpx;
		width: 130rpx;
		color: #fff;
		background: #35C1FD;
		font-size: 32rpx;
	}
</style>
