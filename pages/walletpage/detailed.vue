<template>
	<view class="content">
		<!-- <view class="top">
			<view :class="{show:show == 0}" @click="show = 0">充值记录</view>
			<view :class="{show:show == 1}" @click="show = 1">提现记录</view>
			<view :class="{show:show == 2}" @click="show = 2">付款记录</view>
		</view> -->
		<view class="recod">
			<view class="recod_list" v-for="(item,index) in data" :key='index'>
				<view class="">{{item.msg}}</view>
				<view class="data_time">
					<view class="time">{{item.time}}</view>
				</view>
			</view>
		</view>
		<view class="load">
			{{load}}
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data(){
			return{
				show:0,
				data:'',
				load:'上拉加载更多',
				page:1,
				maxPage:true,
			}
		},
		methods:{
			listData(pages){
				service.entire(this,'get',service.api_root.info.msg,{
					page:pages,
					type:2,
					token:uni.getStorageSync('token')
				},function(self,res){
					if(self.page > 1){
						let data = self.data
							data.push(...res.data)
						if(res.data.length < 20){
							self.maxPage = false
							self.load = '没有更多数据了'
						}
					}else{
						if(res.data.length < 20){
							self.maxPage = false
							self.load = '没有更多数据了'
						}
						self.data = res.data
					}
				})
			}
		},
		onReachBottom(){
			if(this.maxPage == false) return
			let num = this.page + 1
			this.page = num
			this.listData(num)
		},
		onShow() {
			this.listData(this.page)
			// this.loadingType = 1
		}
	}
</script>

<style scoped>
	.content{
		overflow: hidden;
		font-size: 32rpx;
		color: #B8C6E0;
	}
	.top{
		overflow: hidden;
		background: #525B8B;
		box-sizing: border-box;
	}
	.top view{
		float: left;
		text-align: center;
		width: 33%;
		height: 90rpx;
		line-height: 90rpx;
	}
	.show{
		border-bottom: 2rpx solid #E95F5D;
		color: #E95F5D;
	}
	.recod{
		margin-top: 40rpx;
	}
	.recod_list{
		height: 120upx;
		background: #525B8B;
		font-size: 24upx;
		border-bottom: 1px solid #2D3363;
		padding: 8upx 20upx;
		box-sizing: border-box;
	}
	.recod_list .data_time{
		overflow: hidden;
		margin-bottom: 20upx;
	}
	.recod_list .data_time .data{
		float: left;
	}
	.recod_list .data_time .data span{
		color: #5abf31;
		margin-right: 8upx;
	}
	.recod_list .data_time .time{
		float: right;
	}
	.load{
		text-align: center;
	}
</style>
