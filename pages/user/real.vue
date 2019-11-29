<template>
	<view class="content">
		<view class="" v-if="show == 5">
			
		</view>
		<view class="" v-else-if="show == 1">
			<view class="test">
				<view class="form_ipt">
					<text>姓名：</text>
					<input type="text" value="" placeholder="请输入姓名" v-model="lists.realname" disabled/>
				</view>
				<view class="form_ipt">
					<text>身份证：</text>
					<input type="text" value="" placeholder="请输入身份证" maxlength="18" v-model="lists.idnum" disabled/>
				</view>
			</view>
			<view class="photo">
				<view class="photo_test">
					拍照请上传你的证件照片
				</view>
				<view class="photo_left">
					<image class="upload_img" :src="api+lists.heads" mode="aspectFit"></image>
					<!-- <button>上传身份证正面</button> -->
				</view>
				<view class="photo_rigth">
					<image class="upload_img"  :src="api+lists.tails" mode="aspectFit"></image>
					<!-- <button >上传身份证背面</button> -->
				</view>
			</view>
			<button class="confirm">已实名</button>
		</view>
		<view class="show" v-else-if="show == 0">
			正在审核中
		</view>
		<view v-else>
			<view class="test">
				<view class="form_ipt">
					<text>姓名：</text>
					<input type="text" value="" placeholder="请输入姓名" v-model="realname" />
				</view>
				<view class="form_ipt">
					<text>身份证：</text>
					<input type="text" value="" placeholder="请输入身份证" maxlength="18" v-model="idnum" />
				</view>
			</view>
			<view class="photo">
				<view class="photo_test">
					拍照请上传你的证件照片
				</view>
				<view class="photo_left">
					<view class="" v-show="photo1">
						<image src="../../static/image/positive.png" mode="aspectFit"></image>
					</view>
					<image class="upload_img" v-show="imgSrc1" :src="imgSrc1" mode="aspectFit"></image>
					<button @click="upload(1)">上传身份证正面</button>
				</view>
				<view class="photo_rigth">
					<view class="" v-show="photo2">
						<image src="../../static/image/back.png" mode="aspectFit"></image>
					</view>
					<image class="upload_img" v-show="imgSrc2" :src="imgSrc2" mode="aspectFit"></image>
					<button @click="upload(2)">上传身份证背面</button>
				</view>
			</view>
			<button class="confirm" @click="confirm">确认</button>
		</view>

	</view>
</template>

<script>
	import service from '../../service.js'
	export default {
		data() {
			return {
				show: 5,
				imgSrc1: '',
				imgSrc2: '',
				photo1: true,
				photo2: true,
				realname: '',
				idnum: '',
				lists:'',
				api:''
			}
		},
		methods: {
			upload(type) {
				let that = this
					uni.chooseImage({
						count: 1,
						sourceType: ['album'], //从相册选择
						success(res) {
							uni.showLoading({
								title: '上传中',
								mask: true
							});
							let times = setTimeout(function() {
								uni.hideLoading()
								uni.showToast({
									icon: 'none',
									title: '网络请求错误，请稍后再试'
								})
								return
							}, 10000)

							uni.uploadFile({
								url: service.api_root.user.updateIdImage + '?token=' + uni.getStorageSync('token'),
								filePath: res.tempFilePaths[0],
								name: 'idimg' + type,
								formData: {
									filename: 'idimg' + type
								},
								success: function(reg) {
									uni.hideLoading()
									clearTimeout(times)
									let reg_data = JSON.parse(reg.data)
									console.log(that['photo'+type])
									uni.showToast({
										icon: 'none',
										title: reg_data.msg
									})
									if (reg_data.code == 200) {
										that['photo'+type] = false
										that['imgSrc'+type] = service.api + reg_data.data.path
									}
								}
							})
						}
					})
				

			},
			confirm() { 

				let that = this
				if (that.realname.length<2) {
					uni.showToast({
						icon: 'none',
						title: '请输入两位以上姓名'
					})
					return
				}
				if (!that.idnum) {
					uni.showToast({
						icon: 'none',
						title: '请输入身份证号码'
					})
					return
				}
				if (!that.imgSrc1) {
					uni.showToast({
						icon: 'none',
						title: '请上传身份证正面'
					})
					return
				}
				if (!that.imgSrc2) {
					uni.showToast({
						icon: 'none',
						title: '请上传身份证背面'
					})
					return
				}
				
				let data = {
					realname: that.realname,
					idnum: that.idnum,
					idimg1: that.imgSrc1.split(service.api)[1],
					idimg2: that.imgSrc2.split(service.api)[1],
				}
				uni.showLoading({
					title: '提交中',
					mask: true
				});
				let times = setTimeout(function() {
					uni.hideLoading()
					uni.showToast({
						icon: 'none',
						title: '网络请求错误，请稍后再试'
					})
					return
				}, 10000)

				uni.request({
					url: service.api_root.user.upIdentityCard + '?token=' + uni.getStorageSync('token'),
					method: 'post',
					data: data,
					success(res) {
						uni.hideLoading()
						clearTimeout(times)
						uni.showToast({
							icon: 'none',
							title: res.data.msg
						})
						if (res.data.code == 200) {
							setTimeout(function() {
								uni.switchTab({
									url: '../index/my'
								});
							}, 1500)
						}
					}
				})


				// function func(){
				// 	let P = new Promise((resolve,reject) =>{  //Promise异步
				// 		let data = {
				// 			realname:that.realname,
				// 			idnum: that.idnum,
				// 		}
				// 		upload_img(1,data,resolve)
				// 	})
				// 	return P
				// }
				// func().then(function(value){
				// 	let data = value
				// 	let P = new Promise((resolve,reject) =>{
				// 		upload_img(2,data,resolve)
				// 	})
				// 	return P
				// })
				// .then(function(value){
				// 	uni.request({
				// 		url:service.api_root.user.upIdentityCard+'?token='+uni.getStorageSync('token'),
				// 		method:'post',
				// 		data:value,
				// 		success(res) {
				// 			// uni.hideLoading();
				// 			console.log(res)
				// 			uni.showToast({
				// 				icon:'none',
				// 				title:res.data.msg
				// 			})
				// 			if(res.data.code == 200){
				// 				setTimeout(function(){
				// 					uni.switchTab({
				// 						url: '../index/my'
				// 					},1500);
				// 				})
				// 			}
				// 		}
				// 	})
				// })
				function upload_img(type, data, resolve) {
					uni.uploadFile({
						url: service.api_root.user.updateIdImage + '?token=' + uni.getStorageSync('token'),
						filePath: that['imgSrc' + type],
						name: 'idimg' + type,
						// formData: {
						// 	filename: 'idimg' + type
						// },
						success: function(reg) {
							let reg_data = JSON.parse(reg.data)
							if (reg_data.code == 200) {
								data['idimg' + type] = reg_data.data.path
								resolve(data)
							}
						}
					})
				}
			},


		},
		onShow() {
			let that = this
			that.api = service.api
			service.entire(this, 'get', service.api_root.user.realname, {
				token: uni.getStorageSync('token')
			}, function(self, res) {
				that.show = res.data.status
				if(that.show == 1){
					self.lists = res.data
				}else{
					that.show = 2
				}
				if(res.data.status == 0){
					that.show = 0
				}
			})
		}
	}
</script>

<style scoped>
	.content {
		overflow: hidden;
	}

	.test {
		padding: 0 20rpx;
		margin: 40rpx 0;
	}

	.form_ipt {
		margin-bottom: 20rpx;
	}

	.photo {
		height: 400rpx;
		overflow: hidden;
		background: #525B8B;
	}

	.photo image {
		height: 160rpx;
		width: 100%;
	}

	.photo_test {
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;

		font-size: 32rpx;
		color: #D9E1FB;
	}

	.photo_left {
		height: 210rpx;
		padding-top: 30rpx;
		float: left;
		background: #262A56;
		width: 46%;
		margin: 0 2%;
		position: relative;
	}

	.photo_left .upload_img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.photo_rigth {
		padding-top: 30rpx;
		height: 210rpx;
		width: 46%;
		margin: 0 2%;
		float: left;
		background: #262A56;
		position: relative;

	}

	.photo_rigth .upload_img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.photo button {
		height: 60rpx;
		width: 100%;
		line-height: 60rpx;
		font-size: 28rpx;
		background: #54D2FD;
		color: #262A56;
		position: absolute;
		bottom: -60rpx;

	}

	.confirm {
		margin: 40rpx 20rpx;
		color: #fff;
		background: #54D2FD;
	}

	.show {
		color: #B8C6E0;
		text-align: center;
		margin-top: 50rpx;
	}
</style>
