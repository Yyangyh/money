<template>
	<view class="content">
		
		<view class="text">
			<view>申诉内容：</view>
			<textarea  placeholder-style="color:#7D94C3" placeholder="请输入申诉内容" v-model="font"/>
		</view>
		<view class="p_upload" v-for="(item,index) in list" :key='index'>
			<view class="" @click="upload(index)">
				<view class="upload" v-show="item.photo">
					<view class="">
						<image src="../../static/image/photo.png" mode=""></image>
					</view>
					<text>点击上传图片</text>
				</view>
				<image class="upload_img"  v-show="item.Src" :src="item.Src" mode="aspectFit"></image>
			</view>
			<text class="close" @click='close(index)'>删除</text>
		</view>
		<view class="add" @click="add()">
			添加图片
		</view>
		<button @click="btn()">确认</button>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data(){
			return{
				upid:'',
				imgSrc:'',
				photo:true,
				font:'',
				list:[{Src:'',photo:true}],
				token:uni.getStorageSync('token')
				
			}
		},
		methods:{
			upload(index){   //上传图片
				let that = this
				
				uni.chooseImage({
					count:1,
					sourceType: ['album'], //从相册选择
					success(res) {
						uni.showLoading({
						    title: '上传中',
							mask:true
						});
						let times = setTimeout(function(){
							uni.hideLoading()
							uni.showToast({
								icon:'none',
								title:'网络请求错误，请稍后再试'
							})
						},10000)
						uni.uploadFile({
							url: service.api_root.user.updateIdImage + '?token=' + that.token,
							filePath: res.tempFilePaths[0],
							name: 'idimg',
							formData: {
								filename: 'idimg'
							},
							success: function (reg) {
								uni.hideLoading()
								clearTimeout(times)
								let reg_data = JSON.parse(reg.data)
								uni.showToast({
									icon: 'none',
									title: reg_data.msg
								})
								if(reg_data.code == 200){
									that.list[index].Src = service.api+reg_data.data.path
									that.list[index].photo = false
								}
							}
						})
					}
				})
			},
			close(index){ //删除图片
				let data = this.list
					data.splice(index,1)
				this.list = data
			},
			add(){  //添加图片
				
				if(this.list.length == 3){
					uni.showToast({
						icon:'none',
						title:'最多只能上传三张图片'
					})
					return
				}
				let obj = {Src:'',photo:true}
				let data = this.list
					data.push(obj)
				this.list = data
			},
			btn(){  //提交申诉内容
				// console.log(this.list)
				if(!this.font){
					uni.showToast({
						icon:'none',
						title:'申诉内容不能为空'
					})
					return
				}
				uni.showLoading({
				    title: '提交中',
					mask:true
				});
				let times = setTimeout(function(){
					uni.hideLoading()
					uni.showToast({
						icon:'none',
						title:'网络请求错误，请稍后再试'
					})
					return
				},10000)
				let data ={
					content:this.font,
					uplog_id:this.upid
				}
				this.list.forEach((value,index) =>{
					if(value.Src){
						data['imgList'+index] = value.Src.split(service.api)[1]
					}
				})
				service.entire(this,'post',service.api_root.planpage.ask+'?token='+this.token,data,function(self,res){
					uni.hideLoading()
					clearTimeout(times)
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 200){
						setTimeout(function(){
							uni.redirectTo({
								url:'./activation'
							})
						},1500)
					}
				})
			}
		},
		onLoad(options) {
			this.upid = options.upid
		},
	}
</script>

<style scoped>
	.content{
		padding: 0 30rpx;
		overflow: hidden;
	}
	.p_upload{
		margin-top: 60rpx;
		background: #525B8B;
		width: 100%;
		overflow: hidden;
		height: 430rpx;
		position: relative;
		z-index: 1;
	}
	.p_upload .upload_img{
		position: absolute;
		 top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.p_upload .upload{
		width: 50%;
		margin: 0 auto;
		margin-top: 100rpx;
	}
	.p_upload .close{
		border: 1rpx solid #7D94C3;
		font-size: 28rpx;
		color: #4BD4FE;
		padding: 0 10rpx;
		display: inline-block;
		height: 50rpx;
		/* width: 50rpx; */
		text-align: center;
		line-height: 50rpx;
		position: absolute;
		right: 20rpx;
		top: 20rpx;
		z-index: 60;
	}
	.add{
		color: #4BD4FE;
		font-size: 32rpx;
		margin-top: 12rpx;
	}
	.upload view{
		height: 215rpx;
		background: #4C5388;
		position: relative;
	}
	.upload text{
		display: inline-block;
		width: 100%;
		text-align: center;
		font-size: 30rpx;
		color: #7D94C3;
	}
	.upload view image{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		width: 90rpx;
		height: 90rpx;
	}
	button{
		margin: 60rpx 0;
		background: #4BD4FE;
		color: #fff;
	}
	.text{
		width: 100%;
		margin-top: 30rpx;
	}
	.text view{
		color: #fff;
		margin-bottom: 30rpx;
		font-size: 30rpx;
	}
	.text textarea{
		color: #fff;
		width: 100%;
		height: 250rpx;
		border: 1rpx solid #7D94C3;
		padding-left: 10rpx;
	}
</style>
