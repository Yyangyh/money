<template>
	<view class="content">
		
		<!-- <load></load> -->
		<view class="status_bar">
		            <!-- 这里是状态栏 -->
		  </view>
		<view class="top">
			<image  @click="jump('../indexpage/news')" src="../../static/image/notice.png" mode=""></image>
			<text>{{test}}</text>
			<image src="../../static/image/headset.png" mode=""></image>
		</view>
		
		<view class="top_img">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper"  :autoplay="autoplay" :interval="interval" :duration="duration"
						 :circular='circular'>
							<swiper-item v-for="(item,index) in img_list" :key='item.id'>
								<image class="bang_img" :src="item.pic" mode="scaleToFill"></image>
								<!-- <view class="swiper-item" :style="{background:'url('+item.pic+') 0 0 no-repeat',backgroundSize:'100% 100%'}"></view> -->
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		
		</view>
		
		<view class="more">
			<image src="../../static/image/more.png" mode="widthFix"></image>
			<view class="box">
				<view class="uni-swiper-msg">
					<swiper vertical="true" autoplay="true" circular="true" interval="3000">
						<swiper-item v-for="(item, index) in msg" :key="index">
							<text class="sw_left">{{item.account}}</text>
							<text class="sw_right">还款金额:{{item.money}}元</text>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		
		<view class="help">
			<!-- <view class="help_plan">
				<view class="help_left purple">帮还赚利息</view>
				<view class="help_rigth">
					<text class="help_top">无忧裂变计划 长期稳定高收入</text><br/>
					<view class="help_bottom">帮助他人还卡赚利息，轻松摆脱债务</view>
				</view>
			</view>
			<view class="help_plan">
				<view class="help_left red">申请代理</view>
				<view class="help_rigth">
					<text class="help_top">无忧裂变计划 长期稳定高收入</text><br/>
					<view class="help_bottom">长期稳定高收入</view>
				</view>
			</view> -->
			<view class="test">
				特色产品
			</view>
			<view class="newsList" v-for="item in lists" :key='item.id'  @click="jump('../indexpage/getArticle?id='+item.id)">
				<view class="left">
					<image :src="item.image_input" mode="scaleToFill"></image>
				</view>
				<view class="right">
					<view class="newsList_title">
						{{item.title}}
					</view>
					<view class="newsList_concet">
						{{item.synopsis}}
					</view>
				</view>
			</view>
			<!-- <image src="../../static/image/index_img1.png" mode="widthFix"></image>
			<image src="../../static/image/index_img2.png" mode="widthFix"></image>
			<image src="../../static/image/index_img3.png" mode="widthFix"></image>
			<image src="../../static/image/index_img4.png" mode="widthFix"></image> -->
		</view>
		<view class="test">
			<view class="test_top">
				{{test}}学院
				<text>学习更多还卡知识摆脱卡奴</text>
			</view>
			<view class="test_list">
				<view class="test_img" v-for="item in article" :key='item.id' @click="jump('../indexpage/visit?id='+item.id)">
					<image :src="item.image_input" mode="scaleToFill"></image>
					<view class="">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
		<view class="notice" v-if="notice_show"> 
			<image src="../../static/image/close.png" mode="aspectFit" @click="close()"></image>
			<view class="notice_title">
				{{notice.title}}
			</view>
			<view class="notice_content">
				{{notice.content}}
			</view>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	import load from "../common/load.vue"
	export default {
		components:{
			load
		},
		data() {
			return {
				//轮播
				img_list:'',
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				circular: true,
				Lbtlist:'',
				api_root:'',
				//轮播
				notice:'',
				notice_show:false,
				notice_record:true,
				article:'',
				msg : [],
				lists:'',
				test:uni.getStorageSync('test')
			}
		},
		onLoad() {
			if(uni.getStorageSync('token') == ''){
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}
			
			if(this.notice_record == true){ //公告
				service.entire(this,'get',service.api_root.index.notice,{token:uni.getStorageSync('token')},function(self,res){
					if(res.data != ''){
						self.notice_show = true
						self.notice = res.data[0]
					}
				})
			}
			
			service.entire(this,'get',service.api_root.index.info,{token:uni.getStorageSync('token')},function(self,res){ //用户个人信息
				self.img_list = res.data.banner
				self.article = res.data.articlelist
				uni.setStorageSync('user',res.data.member)
			})
			
			service.entire(this,'get',service.api_root.index.nearRepayment,{token:uni.getStorageSync('token')},function(self,res){ //近期还款信息
				
				self.msg = res.data
			})
			
			service.entire(this,'get',service.api_root.index.lists,{token:uni.getStorageSync('token')},function(self,res){ //特色产品文章列表
				
				self.lists = res.data
			})
			
		},
		methods: {
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			close(){
				this.notice_show = false
				this.notice_record = false
				uni.setStorageSync('notice_record',this.notice_record)
			}
		}
	}
</script>

<style scoped>
	
	.content{
		padding: 0 2%;
		padding-bottom: 120rpx;
		overflow: hidden;
		overflow-x: hidden;
	}
	
	.top_img{
		color: #FFFFFF;
		text-align: right;
		background: #3A3D46;
		border-radius: 10upx;
		/* min-height: 300upx; */
		height: 300upx;
		/* margin: 156upx 26upx 20upx; */
		/* margin: 20upx 26upx; */
		margin-top: 110rpx;
	}
	.swiper-item{
		height: 100%;
	}
	.bang_img{
		width: 100%;
		/* height: 100%; */
		height: 300upx; 
	}
	.top{
	  position: fixed;
	  left: 0;
	  width: 100%;
	  box-sizing: border-box;
	  text-align: center;
	  color: #fff;
	  background: #343C6D;
	  overflow: hidden;
	  height: 100rpx;
	  padding: 20rpx 20rpx;
	  font-size: 32rpx;
	  font-weight: bold;
	  z-index: 888;
	  top: var(--status-bar-height);
	 }
	 .status_bar {
	       height: var(--status-bar-height);
	       width: 100%;
	    top: 0;
	    left: 0;
	    z-index: 888;
	    background: #343C6D;
	    position: fixed;
	   }
	.top image{
		width: 50rpx;
		height: 50rpx;
	}
	.top image:nth-of-type(1){
		float: left;
	}
	.top image:nth-of-type(2){
		float: right;
	}
	
	.more {
		height: 180rpx;
		box-sizing: border-box;
		overflow: hidden;
	}
	.more image{
		margin-top: 20rpx;
		width: 96%;
		position: absolute;
		
	}
	.newsList{
		display: flex;
		margin-bottom: 22rpx;
		overflow: hidden;
		background: #fff;
		border-radius: 10rpx;
	}
	.newsList .right{
		width: 50%;
		height: 160rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		
	}
	.newsList .left{
		width: 320rpx;
		height: 160rpx;
		margin-right: 4%;
	}
	.newsList .left image{
		width: 320rpx;
		height: 160rpx;
	}
	.newsList_title{
		font-size: 32rpx;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #444653;
	}
	.newsList_concet{
		margin-top: 20rpx;
		font-size: 24rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		color: #9fa7ba;
	}
	
	.box{
		height: 50rpx;
		overflow: hidden;
		position: relative;
		bottom: -122rpx;
	}
	.uni-swiper-msg{
		color: #4a93c4;
		text-align: center;
		font-size: 28rpx;

	}
	
	
	.swiper-item{
		height: 100%;
		border-radius: 20rpx;
	}
	.sw_left{
		margin-right: 20rpx;
	}
	.help{
		margin-top: 30rpx;
		color: #AFBBE5;

	}
	.help .test{
		font-size: 28rpx;
		margin-bottom: 10rpx;
	}
	.help image{
		width: 100%;
	}
	.help_plan{
		height: 200rpx;
		color: #fff;
		margin-bottom: 30rpx;
	}
	
	.help_plan .help_left{
		float: left;
		text-align: center;
		line-height: 200rpx;
		width: 50%;
	}
	.help_plan .help_rigth{
		height: 200rpx;
		border-bottom-right-radius: 20rpx;
		border-top-right-radius: 20rpx;
		float: right;
		width: 50%;
		background: #fff;
		padding: 20rpx;
		box-sizing: border-box;
		font-size: 28rpx;
	}
	.help_plan .help_rigth .help_top{
		color: #36395A;
		
	}
	.help_plan .help_rigth .help_bottom{
		color: #7F8C9E;
		margin-top: 10rpx;
	}
	.purple{
		background: linear-gradient(to right, #B7CBFD , #7F96E6);
	}
	.red{
		background: linear-gradient(to right, #FFBF96 , #F18857);
	}
	.test .test_top{
		color: #B4C0EA;
		font-size: 32rpx;
	}
	.test .test_top text{
		margin-left: 20rpx;
		font-size: 30rpx;
		color: #6A78A1;
	}
	.test_list{
		overflow: hidden;
	}
	.test_img{
		width: 48%;
		float: left;
		height: 400rpx;
		background: #fff;
		margin: 1%;
		border-bottom-left-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
	}
	.test_img image{
		width: 100%;
		height: 300rpx;
		border-bottom: 1rpx solid rgba(0,0,0,.2);
	}
	.test_img view{
		width:100%;
		text-align: center;
		font-size: 32rpx;
		height: 80rpx;
		color: #353A60;
		line-height: 80rpx;
	}
	.notice{
		width: 80%;
		position: fixed;
		background: #fff;
		border-radius: 10rpx;
		padding: 40rpx 10rpx;
		z-index: 999;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		height: 600rpx;
	}
	.notice image{
		width: 50rpx;
		height: 50rpx;
		position: absolute;
		right: 10rpx;
		top: 10rpx;
	}
	.notice .notice_title{
		text-align: center;
	}
	.notice .notice_content{
		font-size: 30rpx;
		text-indent: 60rpx;
	}
</style>
