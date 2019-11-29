<template>
	<view class="content">
		<view class="" v-if="show == 0">

		</view>
		<view class="" v-else>
			<view class="code_box">
				<view class="code">
					<image @click="preview(data.url_code)" :src="data.url_code" mode="widthFix"></image>
				</view>
				<view class="invitation">
					邀请码：<text>{{data.icode}}</text>
				</view>
				<view class="code_text">
					<text class="copy" @click="copy(data.url)">复制邀请链接</text>
					<text class="copy" @click="preservation(data.url_code)">保存图片</text>
				</view>
			</view>
			<!-- <view class="test">
				1、每推荐一个用户注册可得50元保证金，可提现
			</view>
			<view class="test">
				2、好友每次还款可获得5%-10%手续费提成
			</view>
			<view class="test">
				3、好友每次众筹可获得3%-8%收益分成
			</view> -->
		</view>

	</view>
</template>

<script>
	import service from '../../service.js'
	import js_sdk from '../../js_sdk/ican-H5Api/ican-H5Api.js'
	export default {
		data() {
			return {
				data: '',
				show: 0,

			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/user/friendlist'
			});
		},
		methods: {
			copy(data) {
				uni.setClipboardData({
					data: data,
					success: function(res) {
						uni.showToast({
							icon: 'none',
							title: '复制成功'
						})
					}
				})
			},
			preservation(Url) {
				// #ifdef APP-PLUS
				//在app内运行
				let filename = Math.random() + ".png"
				plus.downloader.createDownload(Url, {
					filename: "_downloads/" + filename
				}, (download, status) => {
					if (status == 200) { //下载成功  
						plus.gallery.save(download.filename, () => {
							uni.hideLoading();
							uni.showToast({
								icon: 'none',
								title: '保存成功！'
							});
						})
					}
				}).start()
				// #endif


				//#ifdef H5 || MP-WEIXIN
				//在H5运行
				// uni.showToast({
				// 	icon: 'none',
				// 	title: '请长按图片选择保存！'
				// })
				
				 var blob=new Blob([''], {type:'application/octet-stream'});
				 
				    var url = URL.createObjectURL(blob);
				 
				    var a = document.createElement('a');
				 
				    a.href = Url;
				 
				    a.download = Url.replace(/(.*\/)*([^.]+.*)/ig,"$2").split("?")[0];
				 
				    var e = document.createEvent('MouseEvents');
				 
				    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				 
				    a.dispatchEvent(e);
				 
				    URL.revokeObjectURL(url);

					var imgs = document.getElementsByTagName("img");
					 
					for(var i = 0,o;o = imgs[i];i++){
					 
						o.addEventListener(triggerEvent,function(){
					 
							var url = this.getAttribute("src");
					 
							saveAs(url);
					 
						},false);
					 
					}
				//#endif	



			},
			preview(url) {
				let arr = [url]
				uni.previewImage({
					urls: arr,
					longPressActions: {
						itemList: ['保存图片'],
						success: function(data) {
							// #ifdef APP-PLUS
							//在app内运行
							let filename = Math.random() + ".png"
							plus.downloader.createDownload(url, {
								filename: "_downloads/" + filename
							}, (download, status) => {
								if (status == 200) { //下载成功  
									plus.gallery.save(download.filename, () => {
										uni.hideLoading();
										uni.showToast({
											icon: 'none',
											title: '保存成功！'
										});
									})
								}
							}).start()
							// #endif
							
							
							//#ifdef H5 || MP-WEIXIN
							//在H5运行
							uni.showToast({
								icon: 'none',
								title: '此功能仅能在APP中使用'
							})
							//#endif	
							
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			}
		},
		onShow() {
			service.entire(this, 'get', service.api_root.user.qrcode + '?token=' + uni.getStorageSync('token'), {}, function(
				self, res) {
				self.data = res.data
				self.show = 5
			})
		}
	}
</script>

<style scoped>
	.content {
		color: #B8C6E0;
		font-size: 32rpx;
		overflow: hidden;
	}

	.code_box {
		width: 94%;
		margin: 30rpx 3%;
		background: #3D4375;
		text-align: center;
		overflow: hidden;
		/* height: 600rpx; */
		padding: 40rpx 0;
	}

	.code {
		/* margin-top: 100rpx; */
	}

	.code image {
		width: 65%;
		max-width: 640rpx;

	}

	.invitation {
		margin: 40rpx 0;
		font-size: 24rpx;
	}

	.invitation text {
		font-size: 32rpx;
		color: #55DBFE;
	}

	.code_text {}

	.code_text text {
		display: inline-block;
		width: 40%;
		margin: 0 5%;
		height: 60rpx;
		line-height: 60rpx;
		color: #fff;
		border-radius: 20rpx;
	}

	.copy {
		background: #45CFFD;
	}

	.preservation {
		background: #7989AB;
	}

	.test {
		font-size: 26rpx;
		color: #7489AC;
		margin-left: 3%;
		margin-bottom: 5rpx;

	}
</style>
