<template>
	<view class="content">
		<view class="" v-if="show == 0">
			
		</view>
		<view class="" v-else>
			<view class="title" >
				{{data.title}}
			</view>
			<image :src="data.image_input" mode="widthFix"></image>
			<!-- <view class="test" v-html="data.content">
			</view> -->
			<rich-text  class="test" :nodes="richtext"></rich-text>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data() {
			return {
				data:'',
				show:0,
				richtext:''
			}
		},
		onLoad(options) {
			service.entire(this,'get',service.api_root.index.getArticle,{
				token:uni.getStorageSync('token'),
				id:options.id
			},function(self,res){
				
				self.data = res.data
				self.show = 1
				let richtext=  res.data.content
				const regex = new RegExp('<img', 'gi');
				const regexP = new RegExp('<p', 'gi');
				const regexspan = new RegExp('<span', 'gi')
				richtext= richtext.replace(regex, `<img style="max-width: 100%;"`);
				richtext= richtext.replace(regexP, `<p style="word-wrap:break-word;word-break:normal;"`);
				richtext= richtext.replace(regexspan, `<span style="word-wrap:break-word;word-break:normal;white-space: pre-wrap;"`);
				self.richtext = richtext;
			})
		}
	}
</script>

<style scoped>
	.content{
		text-align: center;
		color: #B8C6E0;
	}
	.title{
		margin: 20rpx 0;
		font-size: 36rpx;
	}
	image{
		width: 90%;
	}
	.test{
		text-align: left;
		font-size: 28rpx;
		margin: 0 15rpx;
	}
	.test >>> img{
		width: 100%;
	}
	.test >>> p{
		word-wrap: break-word !important;
		word-break: normal !important;
	}
	.test >>> span{
		word-wrap: break-word !important;
		word-break: normal !important;
		white-space: pre-wrap !important;
	}
</style>
