<template>
	<view class="content">
		<view class="tab_top">
			<text>推荐层级</text>
			<text>团队(已激活)</text>
			<text>已收订单</text>
			<text>漏单</text>
		</view>
		<view class="">
			<view class="tab_bottom" v-for="(item,index) in data" :key='index'>
				<text>第{{item.level}}层</text>
				<text>{{item.teams}}</text>
				<text>{{item.orders}}</text>
				<text>{{item.slips}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data() {
			return {
				data:''
			}
		},
		onShow() {
			service.entire(this,'get',service.api_root.user.myteams,{
				token:uni.getStorageSync('token')
			},function(self,res){
				// console.log(res)
				self.data = res.data
				
			})
		}
	}
</script>

<style scoped>
	.content{
		color: #fff;
		font-size: 28rpx;
		overflow: hidden;
	}
	.tab_top{
		display: flex;
		justify-content: space-between;
		background: #3A4175;
		margin-top: 20rpx;
		height: 90rpx;
		padding: 0 5%;
		line-height: 90rpx;
	}
	.tab_top text{
		/* width: 25%; */
	}
	.tab_bottom {
		display: flex;
		justify-content: space-between;
		padding: 0 5%;
		background: #343C6D;
		height: 80rpx;
		line-height: 80rpx;
		margin-top: 1px;
	}
</style>
