<template>
	<view class="content">
		<view class="add_list">
			<view class="list_son" v-for="(item,index) in data" :key='index'>
				<view class="list_left">
					<view class="list_top">
						<text class="name">{{item.real_name}}</text>
						<text class="phone">{{item.phone}}</text>
					</view>
					<text class="list_bottom">
						<text class="default" v-if="item.is_default">默认</text>
						{{item.province}}{{item.city}}{{item.district}}{{item.detail}}
					</text>
				</view>
				<view class="list_right" @click="edit(item.id,index)">
					编辑
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data(){
			return{
				data:''
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/user/addAddress'
			});
		},
		methods:{
			edit(id,index){
				uni.navigateTo({
					url:'/pages/user/addAddress?id='+id+'&index='+index
				})
			}
		},
		onShow() {
			service.entire(this,'get',service.api_root.user.addressList,{token:uni.getStorageSync('token')},function(self,res){
				
				self.data = res.data
				uni.setStorageSync('address',res.data)
			})
		}
	}
</script>

<style scoped>
	.content{
		color: #B8C6E0;
		font-size: 32rpx;
		padding: 0 30rpx;
		overflow: hidden;
	}
	.add_list{
		margin-top: 20rpx;
		
	}
	.list_son{
		overflow: hidden;
		height: 180rpx;
		font-size: 28rpx;
		border-bottom: 2rpx solid #B8C6E0;
	}
	.list_son .list_left{
		float: left;
		width: 80%;
	}
	.list_son .list_left .list_top{
		height: 60rpx;
		line-height: 60rpx;
	}
	.list_son .list_left .list_top .phone{
		font-size: 20rpx;
		margin-left: 20rpx;
		color: #999;
	}
	.list_son .list_left .list_bottom{
		height: 120rpx;
	}
	.list_son .list_right{
		float: right;
		text-align: center;
		width: 15%;
		height: 60rpx;
		line-height: 60rpx;
		margin: 60rpx 0;
		box-sizing: border-box;
		border-left: 2rpx solid #B8C6E0;
	}
	.default{
		color: #E95F5D;
		margin-right: 20rpx;
	}
</style>
