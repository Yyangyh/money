<template>
	<view class="content">
		<view class="news" v-for="(item,index) in data" :key='index'>
			<view class="news_top" @click="show = index">
				<text class="left" v-if="item.type == 0">
					债务审核详情
				</text>
				<text class="left" v-if="item.type == 1">
					实名审核详情
				</text>
				<text class="left" v-if="item.type == 2">
					保证金明细
				</text>
				<text class="right">
					{{item.time}}
				</text>
			</view>
			<view class="mews_bottom" v-show="show == index">
				{{item.msg}}
			</view>
		</view>
		<view class="load">
			{{load}}
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	import uniLoadMore from "../../components/uni-load-more/uni-load-more.vue"
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				show: '',
				data:'',
				page:1,
				maxPage:true,
				load:'上拉加载更多'
			}
		},
		methods:{
			 listData(pages){
				service.entire(this,'get',service.api_root.info.msg,{
					page:pages,
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
	.content {
		color: #B8C6E0;
		font-size: 32rpx;
		overflow: hidden;
		padding-top: 20rpx;
	}

	.news {
		background: #343C6D;
		padding: 0 30rpx;
		overflow: hidden;
		margin-bottom: 10rpx;
	}

	.news_top {
		height: 90rpx;
		line-height: 90rpx;
	}

	.mews_bottom {
		padding-bottom: 30rpx;
	}

	.news .left {
		float: left;
		color: #fff;
	}

	.news .right {
		float: right;
		font-size: 24rpx;
	}
	.load{
		text-align: center;
	}
</style>
