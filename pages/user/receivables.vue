<template>
	<view class="content">
		<view class="" v-if='show == 0'>
			
		</view>
		<view class="" v-else>
			<view class="form_ipt">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							收款渠道：
						</view>
						<view class="uni-list-cell-db">
							<picker @change="bindPickerChange" :value="index" :range="array">
								<view class="uni-input">{{array[index]}}</view>
							</picker>
						</view>
					</view>
				</view>
			</view>
			<view class="form_ipt">
				<text>账号：</text>
				<input type="text" value="" placeholder="请输入账号" v-model="account" />
			</view>
			<view class="p_upload" @click="upload()">
				<view class="upload" v-show="photo">
					<view class="">
						<image src="../../static/image/photo.png" mode=""></image>
					</view>
					<text>点击上传收款二维码</text>
				</view>
				<image class="upload_img" v-show="imgSrc" :src="imgSrc" mode="aspectFit"></image>
			</view>
			
			<button @click="btn()">确认</button>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default {
		data() {
			return {
				imgSrc: '',
				photo: true,
				array: ['支付宝', '微信'],
				index: 0,
				token: uni.getStorageSync('token'),
				account: '',
				type:1,
				show:0
			}
		},
		onReady() {
			service.entire(this, 'get', service.api_root.user.getReceivables, {
				token: this.token
			}, function(self, res) {
				
				if(res.data != ''){
					self.account = res.data.account_pay
					self.imgSrc = service.api + res.data.code_img
					self.photo = false
					self.type = res.data.type
					console.log(res.data.type)
					self.index = Number(res.data.type) - 1
				}
				self.show = 1
			})
		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.target.value
				this.type = Number(e.target.value) + 1
			},
			upload() {
				let that = this
				
				uni.chooseImage({
					count: 1,
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
							return
						},10000)
						uni.uploadFile({
								url: service.api_root.user.updateIdImage + '?token=' + uni.getStorageSync('token'),
								filePath: res.tempFilePaths[0],
								name: 'idimg',
								formData: {
									filename: 'idimg'
								},
								success: function(reg) {
									uni.hideLoading()
									clearTimeout(times)
									let reg_data = JSON.parse(reg.data)
									
									uni.showToast({
										icon: 'none',
										title: reg_data.msg
									})
									if(reg_data.code == 200){
										that.photo = false
										that.imgSrc = service.api+reg_data.data.path
									}
								}
							})
					}
				})
			},
			btn() { //点击确认
				let that = this
				// console.log(that.account.length)
				if( !that.account ||that.account.length < 1 ){
					uni.showToast({
						icon: 'none',
						title: '用户名不能为空'
					});
					return;
				}
				
				if (!that.imgSrc) {
					uni.showToast({
						icon: 'none',
						title: '请上传收款二维码'
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
				console.log(that.imgSrc.split(service.api)[1])
				console.log(that.account)
				console.log(that.type)
				service.entire(this, 'post', service.api_root.user.saveReceivables + '?token=' + that.token, {
					account_pay: that.account,
					type: that.type,
					code_img: that.imgSrc.split(service.api)[1]
				}, function(self, res) {
					uni.hideLoading()
					clearTimeout(times)
					
					uni.showToast({
						icon: 'none',
						title: res.msg
					})
					if(res.code == 200){
						setTimeout(function(){
							uni.switchTab({
								url:'../index/my'
							})
						},1500)
					}
				})
				// function func() {
				// 	let P = new Promise(function(resolve, reject) {
				// 		uni.uploadFile({ //上传图片
				// 			url: service.api_root.user.updateIdImage + '?token=' + that.token,
				// 			filePath: that.imgSrc,
				// 			name: 'filename',
				// 			formData: {
				// 				filename: 'filename'
				// 			},
				// 			success(res) {
				// 				resolve(JSON.parse(res.data).data.path)
				// 			}
				// 		})
				// 	})
				// 	return P
				// }
				// func().then(function(value) { //确认提交
				// 	service.entire(this, 'post', service.api_root.user.saveReceivables + '?token=' + that.token, {
				// 		account_pay: that.account,
				// 		type: that.index,
				// 		code_img: value
				// 	}, function(self, res) {
				// 		console.log(res)
				// 		uni.showToast({
				// 			icon: 'none',
				// 			title: res.msg
				// 		})
				// 		if(res.code == 200){
				// 			setTimeout(function(){
				// 				uni.switchTab({
				// 					url:'../index/my'
				// 				})
				// 			},1500)
				// 		}
				// 	})
				// })
			},

		},


	}
</script>

<style scoped>
	.content {
		padding: 0 30rpx;
		overflow: hidden;
	}

	.form_ipt {
		margin: 20rpx 0;
	}

	.uni-list {
		width: 100%;
	}

	.uni-list-cell {
		color: #E3E9FF;
		font-size: 32rpx;
		display: flex;
		width: 100%;
	}

	.uni-list-cell-db {
		flex-grow: 2;
		color: #fff;
	}

	.p_upload {
		margin-top: 60rpx;
		background: #525B8B;
		width: 100%;
		overflow: hidden;
		height: 430rpx;
		position: relative;
	}

	.p_upload .upload_img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.p_upload .upload {
		width: 50%;
		margin: 0 auto;
		margin-top: 100rpx;
	}

	.upload view {
		height: 215rpx;
		background: #4C5388;
		position: relative;
	}

	.upload text {
		display: inline-block;
		width: 100%;
		text-align: center;
		font-size: 30rpx;
		color: #7D94C3;
	}

	.upload view image {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 90rpx;
		height: 90rpx;
	}

	button {
		margin: 60rpx 0;
		background: #4BD4FE;
		color: #fff;
	}

	.verification {
		margin-bottom: 20rpx;
		margin-top: 40rpx;
		height: 90rpx;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
	}

	.verification input {
		flex-grow: 2;
		display: inline-block;
		height: 90rpx;
		color: #fff;
		background: #3B4374;
		margin-right: 20rpx;
		border-radius: 10rpx;
		padding-left: 20rpx;
	}

	.verification button {
		height: 90rpx;
		line-height: 90rpx;
		width: 250rpx;
		text-align: center;
		font-size: 32rpx;
		display: inline-block;
		background: #3B4374;
		color: #fff;
		border-radius: 10rpx;
	}
</style>
