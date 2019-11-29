<template>
	<view class="content">
		<view class="test">
			<view class="">
				申诉内容：
			</view>
			{{data.content}}
		</view>
		<view class="image" v-if="imglist">
			<image v-for="(item,index) in imglist" :key='index' :src="item" mode="widthFix"></image>
		</view>
		<button @click="btn()" v-if="leave == 1">撤诉</button>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data() {
			return {
				data:'',
				imglist:'',
				id:'',
				leave:0
			}
		},
		methods:{
			btn(){
				let that = this
				uni.showModal({
					title: '提示',
					content: '是否撤诉？',
					confirmText:'撤诉',
					success: function(res) {
						if (res.confirm) {
							service.entire(this, 'get', service.api_root.user.revoke, {//撤诉
								id:that.id,
								token:uni.getStorageSync('token')
							}, function(self, res) { 
								
								uni.showToast({
									icon:"none",
									title:res.msg
								})
								if(res.code == 200){
									setTimeout(function(){
										uni.navigateBack({
										    delta: 1
										});
									},1500)
								}
								
							})
							
						}
					}
				});
			}
		},
		onLoad(options) {
			this.id = options.id
			this.leave = options.leave
			service.entire(this,'get',service.api_root.user.detail,{
				token:uni.getStorageSync('token'),
				id:options.id
			},function(self,res){
				self.data = res.data
				if(res.data.imglist){
					let list=[]
					for (let s of res.data.imglist) {
						list.push(service.api+s)
					}
					self.imglist =list
				}
				
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
	.test{
		margin: 30rpx 0;
		padding: 0 20rpx;
	}
	.image{
		width: 100%;
		text-align: center;
	}
	.image image{
		width: 90%;
		margin-bottom: 30rpx;
	}
	button{
		margin: 20rpx 20rpx;
		background: #4BD4FE;
		color: #fff;
	}
</style>
