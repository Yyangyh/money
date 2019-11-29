<template>
	<view class="content">
		<view>
			<view class="friend_list" v-for="item in data" :key='item.uid'>
				<image :src="logo" mode=""></image>
				<text class="name">{{item.nickname}}</text>
				<!-- <text>{{item.phone}}</text> -->
				<text>{{item.account}}</text>
			</view>
			<!-- <view class="friend_list">
				<image src="../../static/image/user.png" mode=""></image>
				<text class="name">1854</text>
				<text>177****9315</text>
				<text>2019-07-25</text>
			</view>
			<view class="friend_list">
				<image src="../../static/image/user.png" mode=""></image>
				<text class="name">185****2894</text>
				<text>177****9315</text>
				<text>2019-07-25</text>
			</view>
			<view class="friend_list">
				<image src="../../static/image/user.png" mode=""></image>
				<text class="name">185****2894</text>
				<text>177****9315</text>
				<text>2019-07-25</text>
			</view> -->
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data(){
			return{
				data:'',
				logo:uni.getStorageSync('logo')
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/user/myteam'
			});
		},
		onShow() {
			service.entire(this,'get',service.api_root.user.mygroup,{
				token:uni.getStorageSync('token')
			},function(self,res){
				
				self.data = res.data
			})
		}
	}
</script>

<style scoped>
	.content{
		color: #B8C6E0;
		font-size: 32rpx;
		overflow: hidden;
	}
	.friend_list{
		display: flex;
		justify-content: space-between;
		margin: 20rpx 20rpx;
		height: 90rpx;
		font-size: 28rpx;
		border-bottom: 1px solid #3B4372;
	}
	.friend_list image{
		height: 70rpx;
		border-radius: 50%;
		width: 70rpx;
	}
	.name{
		width: 240rpx;
		word-wrap: break-word;
		color: #fff;
	}
</style>
