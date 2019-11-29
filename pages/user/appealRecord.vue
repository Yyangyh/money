<template>
	<view class="content">
		<view class="top">
			<view  :class="{show:show == 0}" @click='isappeal()'>
				申诉记录
			</view>
			<view  :class="{show:show == 1}" @click='iscover_appeal()'>
				被申诉记录
			</view>
		</view>
		<view class="appeal" v-show="show == 0">
			<view class="list" v-for="item in appeal" :key='item.id' @click="details(item.id,1)">
				<view class="left">
					姓名：{{item.nickname1}}
				</view>
				<view class="right">
					{{item.addtime}}
				</view>
			</view>
			<view class="load">
				{{load}}
			</view>
		</view>
		<view class="cover_appeal" v-show="show == 1">
			<view class="list" v-for="item in cover_appeal" :key='item.id' @click="details(item.id,0)">
				<view class="left">
					姓名：{{item.nickname}}
				</view>
				<view class="right">
					{{item.addtime}}
				</view>
			</view>
			<view class="load">
				{{load}}
			</view>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data() {
			return {
				show: 0,
				appeal:'',
				cover_appeal:'',
				page:1,
				maxPage:true,
				load:'上拉加载更多',
				
			}
		},
		methods:{
			details(id,leave){
				uni.navigateTo({
					url:'./appealDetails?id='+id+'&leave='+leave
				})
			},
			listData(pages){
				service.entire(this,'get',service.api_root.user.getOwnList,{ //申诉记录
					page:pages,
					token:uni.getStorageSync('token')
				},function(self,res){
					if(self.page > 1){
						let data = self.appeal
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
						self.appeal = res.data
					}
				})
			},
			iscover_listData(pages){
				service.entire(this,'get',service.api_root.user.getList,{ //被申诉记录
					page:pages,
					token:uni.getStorageSync('token')
				},function(self,res){
					if(self.page > 1){
						let data = self.cover_appeal
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
						self.cover_appeal = res.data
					}
				})
			},
			isappeal(){
				this.show = 0
				this.load = '上拉加载更多'
				this.page = 1
				this.maxPage = true
				this.listData(this.page)
			},
			iscover_appeal(){
				this.show = 1
				this.load = '上拉加载更多'
				this.page = 1
				this.maxPage = true
				this.iscover_listData(this.page)
			}
		},
		onReachBottom(){
			if(this.maxPage == false) return
			let num = this.page + 1
			this.page = num
			if(this.show == 0)this.listData(num)
			if(this.show == 1)this.iscover_listData(num)
			
		},
		onShow() {
			this.listData(this.page)
		}
	}
</script>

<style scoped>
	.content{
		color: #B8C6E0;
		font-size: 32rpx;
		overflow: hidden;
	}
	.content .top{
		overflow: hidden;
		margin: 0 30rpx;
		border: 1px solid #35BFFD;
	}
	.content .top view{
		float: left;
		width: 50%;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
	}
	.appeal{
		margin-top: 30rpx;
	}
	.cover_appeal{
		margin-top: 30rpx;
	}
	.show{
		color: #fff;
		background: #23BAFD;
	}
	.list{
		background: #3B4374;
		overflow: hidden;
		padding: 20rpx;
		margin-bottom: 10rpx;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
		font-size: 30rpx;
	}
	.load{
		text-align: center;
	}
</style>
