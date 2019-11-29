<template>
	<view class="">
		<web-view :webview-styles="webviewStyles" :src="src"></web-view>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data() {
			return {
				src: ''
			}
		},
		onShow() {
			this.src = service.api + '/routine/download'
		}
	}
</script>

<style>
</style>
