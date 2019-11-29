<template>
	<view class="content">
		{{info.home_bottom_text}}
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data(){
			return{
				content:'',
				info:uni.getStorageSync('info')
			}
		},
		methods:{},
	}
</script>

<style scoped>
	.content{
		padding: 30rpx 30rpx;
		overflow: hidden;
		color: #B8C6E0;
		text-align: center;
		font-size: 32rpx;
	}

	
</style>
