<template>
	<view class="load">
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		onReady() {
			uni.showLoading({
				title: '加载中'
			});
		}
	}
</script>

<style scoped>
	.load{
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		background: rgba(0,0,0,.7);
	}
</style>
