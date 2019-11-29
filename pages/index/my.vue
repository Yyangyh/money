<template>
	<view class="content">
		<view class="top">
			<image :src="logo" mode="aspectFit"></image>
			<view class="text">
				<view>{{user.nickname}}</view>
				<view>级别 {{info.level_name}}</view>
			</view>
		</view>
		<view class="list">
			<view class="list_son" @click="jump('../user/real')">
				<image src="../../static/image/real.png" mode="aspectFit"></image>
				<text>实名认证</text>
				<view class="go">
					<view  v-if="data.is_real == 0">未认证</view>
					<view  v-else-if="data.is_real == 1">已认证</view>
					<view  v-else-if="data.is_real == 2">认证失败</view>
					<view  v-else></view>
					<image src="../../static/image/go.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="list_son" @click="jump()">
				<image src="../../static/image/credit.png" mode="aspectFit"></image>
				<text>我的信用卡</text>
				<view class="go">
					<image src="../../static/image/go.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="list_son" @click="jump()">
				<image src="../../static/image/savings.png" mode="aspectFit"></image>
				<text>我的储蓄卡</text>
				<view class="go">
					<image src="../../static/image/go.png" mode="aspectFit"></image>
				</view>
			</view>
			<!-- <view class="list_son" @click="jump('../user/address')">
				<image src="../../static/image/address.png" mode="aspectFit"></image>
				<text>收货地址</text>
				<view class="go">
					<image src="../../static/image/go.png" mode="aspectFit"></image>
				</view>
			</view> -->
			<view class="list_son"  @click="jump('../user/receivables')">
				<image src="../../static/image/receivables.png" mode="aspectFit"></image>
				<text>收款方式</text>
				<view class="go">
					<view  v-if="data.is_receivables == 0">未设置</view>
					<view  v-else-if="data.is_receivables == 1">已设置</view>
					<view  v-else></view>
					<image src="../../static/image/go.png" mode="aspectFit"></image>
				</view>
			</view>
			<!-- <view class="list_son">
				<image src="../../static/image/receivables.png" mode="aspectFit"></image>
				<text>我要闯关</text>
				<view class="go"> -->
					<!-- <view>未设置</view> -->
					<!-- <image src="../../static/image/go.png" mode="aspectFit"></image>
				</view>
			</view> -->
			<view class="list_son" @click="jump('../user/myfriend',user.level)">
				<image src="../../static/image/friend.png" mode="aspectFit"></image>
				<text>我的好友</text>
				<view class="go">
					
					<image src="../../static/image/go.png" mode="aspectFit"></image>
				</view>
			</view>
			<!-- <view class="list_son">
				<image src="../../static/image/clear.png" mode="aspectFit"></image>
				<text>清除缓存</text>
				<view class="go">
					<view>1.1M</view>
					<image src="../../static/image/go.png" mode="aspectFit"></image>
				</view>
			</view> -->
			<view class="list_son" @click="jump('../user/appealRecord')">
				<image src="../../static/image/record.png" mode="aspectFit"></image>
				<text>申诉记录</text>
				<view class="go">
					
					<image src="../../static/image/go.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="list_son"  @click="jump('../user/contact')">
				<image src="../../static/image/contact.png" mode="aspectFit"></image>
				<text>联系我们</text>
				<view class="go">
					<image src="../../static/image/go.png" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<button @click="quit">退出登录</button>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data(){
			return{
				show:'',
				user:'',
				info:'',
				logo:uni.getStorageSync('logo'),
				data:''
			}
		},
		methods:{
			quit(){
				uni.reLaunch({
					url:'../login/login'
				})
			},
			jump(url,data){
				if(data == 0){
					uni.showToast({
						icon:'none',
						title:'您暂时还不是推广员'
					})
					return
				}
				if(!url){
					uni.showToast({
						icon:'none',
						title:'正在努力开发中...'
					})
					return
				}
				uni.navigateTo({
					url:url
				})
			}
			
		},
		onShow() {
			service.entire(this,'get',service.api_root.index.info,{token:uni.getStorageSync('token')},function(self,res){ //用户个人信息
				self.info = res.data.info
				self.user = res.data.member
				self.data = res.data
				uni.setStorageSync('info',res.data.info)
			})
		}
	}
</script>

<style scoped>
	.content{
		overflow: hidden;
		padding-bottom: 100rpx;
	}
	.top{
		margin: 30rpx 0;
		background: #343C6D;
		color: #B8C6E0;
		padding: 40rpx 20rpx;
		overflow: hidden;
	}
	.top image{
		float: left;
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}
	.top .text{
		float: left;
	}
	.top .text view{
		height: 75rpx;
		margin-left: 10rpx;
		line-height: 75rpx;
	}
	.top .text view:nth-of-type(2){
		color: #35C1FD;
		font-size: 28rpx;
	}
	.list_son{
		color: #B8C6E0;
		font-size: 32rpx;
		display: flex;
		align-content: center;
		align-items: center;
		padding: 0 30rpx;
		height: 120rpx;
		/* line-height: 150rpx; */
		background: #343C6D;
		margin-bottom: 2rpx;
	}
	
	.list_son image{
		width: 50rpx;
		height: 50rpx;
	}
	.list_son text{
		margin-left: 20rpx;
	}
	.list_son .go{
		flex-grow: 2;
		display: flex;
		justify-content: flex-end;
	}
	.list_son .go image{
		
	}
	.list_son .go view{
		color: #7E8BB7;
	}
	button{
		height: 100rpx;
		line-height: 100rpx;
		font-size: 32rpx;
		color: #fff;
		margin: 40rpx 7%;
		background: #48D0FF;
	}
</style>
