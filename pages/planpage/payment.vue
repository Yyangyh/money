<template>
	<view class="content">
		<view class="loan">
			借款人信息
		</view>
		<view class="loan_new">
			<view class="top">
				<view>
					姓名：{{data.realname}}
				</view>
				<view>
					身份证：{{data.idnum}}
				</view>
			</view>
		</view>
		<view class="p_code">
			<view class="code">
				<image :src="code_img" mode="aspectFit"></image>
			</view>
			<view class="test_code">
				<text  v-if="data.type ==1">微信</text>
				<text  v-if="data.type ==0">支付宝</text>
				收款码
			</view>
			<view class="account">
				<text v-if="data.type ==1">微信</text>
				<text v-if="data.type ==0">支付宝</text>
				账号：<text>{{data.account_pay}}</text>
			</view>
			<view class="p_money">
				付款金额：<text>{{data.money}}</text>元
			</view>
		</view>
		<view class="p_test">
			请扫描上方的二维码付款{{data.money}}元，并且备注您的姓名+金额，如：李某某+{{data.money}}元
		</view>
		<view class="p_upload" @click="upload()">
			<view class="upload" v-show="photo">
				<view class="">
					<image src="../../static/image/photo.png" mode=""></image>
				</view>
				<text>点击上传打款凭证</text>
			</view>
			<image class="upload_img" :src="imgSrc" mode="aspectFit"></image>
		</view>
		<button @click="btn()">确认</button>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default {
		data() {
			return {
				imgSrc: '',
				photo: true,
				code_img: '',
				data: '',
				uid: '',
				logid: ''
			}
		},
		methods: {
			upload() {
				let that = this
				uni.chooseImage({
					count: 1,
					sourceType: ['album'], //从相册选择
					success(res) {
						that.imgSrc = res.tempFilePaths[0]
						that.photo = false
					}
				})
			},
			btn() {
				let that = this
				if(!that.imgSrc){
					uni.showToast({
						icon:'none',
						title:'请上传打款凭证'
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
				uni.uploadFile({
					url: service.api_root.planpage.update_voucher+'?token='+uni.getStorageSync('token'),
					filePath: that.imgSrc,
					name: 'file',
					formData: {
						uid: that.uid,
						logid: that.logid
					},
					success: (res) => {
						uni.hideLoading()
						clearTimeout(times)
						
						let data = JSON.parse(res.data)
						
						uni.showToast({
							icon:"none",
							title:data.msg
						})
						if(data.code == 200){
							setTimeout(function(){
								uni.navigateBack({
								    delta: 1
								});
							},1500)
						}
					}
				});
			}
		},
		onLoad(options) {
			this.uid = options.uid
			this.logid = options.logid
			if(options.src){
				
				this.imgSrc = service.api+options.src
				this.photo = false
			}
			service.entire(this, 'get', service.api_root.user.getReceivables, {
				token: uni.getStorageSync('token'),
				uid: options.uid
			}, function(self, res) {
				
				self.code_img = service.api + res.data.code_img
				self.data = res.data
			})
		}
	}
</script>

<style scoped>
	.content {
		padding: 0 30rpx;
		color: #B8C6E0;
	}

	.loan {
		font-size: 26rpx;
		margin: 10rpx 0;
	}

	.loan_new {
		color: #8299b8;
		background: #434f80;
		font-size: 28rpx;
		padding: 10px 10rpx;
	}

	.p_code {
		box-sizing: border-box;
		padding-top: 30rpx;
		margin-top: 30rpx;
		width: 100%;
		height: 700rpx;
		text-align: center;
		background: #525B8B;
	}

	.p_code .code {
		margin: 0 auto;
	}

	.p_code .code image {
		height: 470rpx;
		width: 100%;
	}

	.p_code .test_code {
		text-align: center;
		font-size: 24rpx;
	}

	.p_code .p_money {
		text-align: center;
		margin-top: 20rpx;
	}

	.p_code .p_money text {
		color: #3FC4FD;
	}

	.p_code .account {
		font-size: 26rpx;
		margin-top: 10rpx;
	}

	.p_code .account text {
		color: #3FC4FD;
	}

	.p_test {
		margin: 20rpx 0;
		padding: 0 50rpx;
		font-size: 24rpx;
	}

	.p_upload {
		background: #525B8B;
		width: 100%;
		overflow: hidden;
		position: relative;
		height: 430rpx;
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
</style>
