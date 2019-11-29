<template>
	<view class="content">
		<view class="test">
			<view class="form_ipt">
				<text>债务类型：</text>
				<input type="text" value="" v-model="text" disabled/>
			</view>
			<view class="form_ipt">
				<text>债务金额：</text>
				<input type="text" value="" v-model="money" placeholder="请输入金额"/>
			</view>
		</view>
		<view class="upload" @click="upload()">
			<view class=""  v-if="photo">
				<image class="photo" src="../../static/image/photo.png" mode="aspectFit"></image>
			</view>
			<image class="upload_img"  v-if="imgSrc" :src="imgSrc" mode="aspectFit"></image>
		</view>
		<button @click="btn()">提交审核</button>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data(){
			return{
				imgSrc:'',
				photo:true,
				money:'',
				token:uni.getStorageSync('token'),
				type:'',
				text:''
			}
		},
		methods:{
			upload(){
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
										that.imgSrc = service.api+reg_data.data.path
										that.photo = false
									}
								}
							})
					}
				})
			},
			btn(){
				let that = this
				if(that.money <600){
					uni.showToast({
						icon:'none',
						title:'输入金额需大于600'
					})
					return
				}
				if(that.money >5000000){
					uni.showToast({
						icon:'none',
						title:'输入金额不能大于5000000'
					})
					return
				}
				if(!that.imgSrc){
					uni.showToast({
						icon:'none',
						title:'请上传债务凭证'
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
				service.entire(this,'post',service.api_root.planpage.addDebt+'?token='+that.token,{
					type:that.type,
					money:that.money,
					voucher_img:that.imgSrc.split(service.api)[1]
				},function(self,res){
					uni.hideLoading()
					clearTimeout(times)
					uni.showToast({
						icon:'none',
						title:res.msg
					})
					if(res.code == 200){
						setTimeout(function(){
							uni.switchTab({
								url: '../index/plan'
							});
						},1500)
						
					}
				})
				
				
			}
		},
		onLoad(options) {
			this.type = options.type
			if(options.type == 0) this.text ='其他'
			if(options.type == 1) this.text ='信用卡' 
			if(options.type == 2) this.text ='房贷'
			if(options.type == 3) this.text ='车贷'
		},
		
	}
</script>

<style scoped>
	.content{
		padding: 0 30rpx;
	}
	.test{
		margin-top: 20rpx;
	}
	.form_ipt{
		margin-bottom: 20rpx;
	}
	.upload{
		margin-top: 40rpx;
		width: 100%;
		height: 480rpx;
		background: #525B8B;
		overflow: hidden;
		position: relative;
	}
	.upload view{
		width: 50%;
		height: 50%;
		margin-top: 120rpx;
		margin-left: 25%;
		background: #4C5388;
		position: relative;
	}
	.upload .upload_img{
		position: absolute;
		 top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.upload view .photo{
		/* positioin: absolute; */
	    top: 50%;
	    left: 50%;
		position: absolute !important; 
	    transform: translate(-50%, -50%);
	  	height: 90rpx;
		width: 90rpx;
	}
	button{
		margin: 40rpx 0;
		background: #4BD4FE;
		color: #fff;
	}
</style>
