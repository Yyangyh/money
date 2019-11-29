<template>
	<view class="content">
		<image src="../../static/image/upgrade.png" mode="widthFix"></image>
		<view class="agreement">
			<label class="radio" @click="checked = !checked">
				<radio value="" v-bind:checked="checked" />我已认真阅读并同意以上协议
			</label>
			<button @click="btn()">立即申请</button>
		</view>
	</view>
</template>

<script>
	export default{
			
		data(){
			return{
				checked:false
			}
		},
		methods:{
			btn(){
				uni.showToast({
					icon:'none',
					title:'正在努力开发中...'
				})
			}
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		height: 100%;
		
	}
	.content image{
		width: 100%;
		height: 100%;
		padding-bottom: 220rpx;
	}
	.agreement{
		text-align: center;
		color: #B8C6E0;
		position: fixed;
		
		bottom: 0;
		left: 0;
		width: 100%;
		height: 200rpx;
		padding: 20rpx 0;
		
		background-color: #222a5b;
	}
	.agreement .radio{
		font-size: 28rpx;
		
	}
	.agreement button{
		margin: 0 20rpx;
		color: #fff;
		margin-top: 30rpx;
		background: #48D0FF;
	}
</style>
