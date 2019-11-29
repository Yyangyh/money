<template>
	<view class="content">
		<view class="form_ipt">
			<text>姓名：</text>
			<input type="text" value="" placeholder="请输入姓名"/>
		</view>
		<view class="form_ipt">
			<text>储蓄卡账号：</text>
			<input type="text" value="" placeholder="请输入储蓄卡账号"/>
		</view>
		<view class="p_upload" @click="upload()">
			<view class="upload" v-show="photo">
				<view class="">
					<image src="../../static/image/photo.png" mode=""></image>
				</view>
				<text>点击上传储蓄卡图片</text>
			</view>
			<image class="upload_img"  v-show="imgSrc" :src="imgSrc" mode="aspectFit"></image>
		</view>
		<button>确认</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				imgSrc:'',
				photo:true
			}
		},
		methods:{
			upload(){
				let that = this
				uni.chooseImage({
					count:1,
					sourceType: ['album'], //从相册选择
					success(res) {
						that.imgSrc = res.tempFilePaths[0]
						that.photo = false
					}
				})
			}
		}
	}
</script>

<style scoped>
.content{
		padding: 0 30rpx;
		overflow: hidden;
	}
	.form_ipt{
		margin: 20rpx 0;
	}
	.p_upload{
		margin-top: 60rpx;
		background: #525B8B;
		width: 100%;
		overflow: hidden;
		height: 430rpx;
		position: relative;
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
</style>
