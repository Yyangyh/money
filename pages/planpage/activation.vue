<template>
	<view class="content">
		<view class="" v-if='info == false'>
			
		</view>
		<view class="highest" v-else-if='info == 4'>
			{{info_test}}
		</view>
		<view class="highest" v-else-if="info == true">
			{{info_test}}
		</view>
		<view class="test_last" v-else>
			<view class="last_son" v-if="check">
				<view class="top">
					<view>
						姓名：{{check_m.realname}}
					</view>
					<view>
						身份证：{{check_m.idnum}}
					</view>
				</view>
				<view class="bottom">
					<text class="left">打款金额：<text class="color">{{check_m.money}}</text></text>
					<block>
						<text class="right" @click="jump(check_m.uid,check_m.logid)" v-if="check_m.status == 3">去打款</text>
						<text class="right" @click="jump(check_m.uid,check_m.logid,check_m.complaint_status,check_m.status,check_m.voucher)"
						 v-else-if="check_m.status == 1">审核中</text>
						<text class="right" v-else>完成付款</text>
					</block>
					<block>
						<text class="right" v-if="check_m.status == 1 && check_m.complaint_status == -1" @click="jump(check_m.logid)">
							申诉
						</text>
						<text class="right" v-else-if="check_m.status == 1 && check_m.complaint_status == 0" @click="details(check_m.complaint_id,1)">
							申诉中
						</text>
						<text class="right" v-else-if="check_m.status == 1 && check_m.complaint_status == 1" @click="details(check_m.complaint_id,0)">
							申诉完成
						</text>
					</block>
				</view>
			</view>
			<view class="last_son">
				<view class="top">
					<view>
						姓名：{{up_m.realname}}
					</view>
					<view>
						身份证：{{up_m.idnum}}
					</view>
				</view>
				<view class="bottom">
					<text class="left">打款金额：<text class="color">{{up_m.money}}</text></text>
					<block>
						<text class="right" @click="jump(up_m.uid,up_m.logid)" v-if="up_m.status == 3">去打款</text>
						<text class="right" @click="jump(up_m.uid,up_m.logid,up_m.complaint_status,up_m.status,up_m.voucher)" v-else-if="up_m.status == 1">审核中</text>
						<text class="right" @click="frozen(up_m.uid)" v-else-if="up_m.status == 0">冻结中</text>
						<text class="right" v-else>完成付款</text>
					</block>
					<block>
						<text class="right" v-if="up_m.status == 1 &&  up_m.complaint_status == -1" @click="jump(up_m.logid)">
							申诉
						</text>
						<text class="right" v-else-if="up_m.status == 1 && up_m.complaint_status == 0" @click="details(up_m.complaint_id,1)">
							申诉中
						</text>
						<text class="right" v-else-if="up_m.status == 1 && up_m.complaint_status == 1" @click="details(up_m.complaint_id,0)">
							申诉完成
						</text>
					</block>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	import service from '../../service.js'
	export default {
		data() {
			return {
				check_m: '',
				up_m: '',
				info: false,
				info_test: '',
				check: false,
			}
		},
		methods: {
			jump(uid, logid, status, type, src) { //跳转判断
				if (uid && logid) {
					
					if (status == 0) {
						uni.showToast({
							icon: 'none',
							title: '当前已在申诉中，不能更改审核信息'
						})
						return
					} else if (type == 1) {
						uni.navigateTo({
							url: '/pages/planpage/payment?uid=' + uid + '&logid=' + logid + '&src=' + src
						})
						return
					}
					uni.navigateTo({
						url: '/pages/planpage/payment?uid=' + uid + '&logid=' + logid
					})
				} else {
					uni.navigateTo({
						url: '/pages/planpage/appeal?upid=' + uid
					})
				}

			},
			frozen(uid) {
				uni.showModal({
					title: '提示',
					content: '该账户已被冻结，是否选择重新分配？',
					confirmText: '重新分配',
					success: function(res) {
						if (res.confirm) {
							service.entire(this, 'post', service.api_root.planpage.adjustment + '?token=' + uni.getStorageSync('token'), { //重新分配
								uid: uid
							}, function(self, res) {
								uni.showToast({
									icon: "none",
									title: res.msg
								})
								if (res.code == 200) {
									setTimeout(function() {
										service.entire(this, 'get', service.api_root.planpage.get_check_up + '?token=' + uni.getStorageSync('token'), {},
											function(self, res) {
												if (res.data.list == '') { //判断是否可升级
													self.info = true
													self.info_test = res.data.info
												}
												if (res.data.list.check_member) { //判断是否有check_member
													self.check_m = res.data.list.check_member
													self.check = true
												}
												self.up_m = res.data.list.up_member
											})
									}, 1000)
								}
							})

						}
					}
				});
			},
			listdata() {
				service.entire(this, 'get', service.api_root.planpage.get_check_up + '?token=' + uni.getStorageSync('token'), {},
					function(self, res) {
						if(res.code == 200){
							self.info = 5
							if (res.data.list == '') { //判断是否可升级
								self.info = true
								self.info_test = res.data.info
							}
							if (res.data.list.check_member) { //判断是否有check_member
								self.check_m = res.data.list.check_member
								self.check = true
							}
							self.up_m = res.data.list.up_member
						}else{
							self.info = 4
							self.info_test = res.msg
						}
						
					})
			},
			details(id, leave) {
				uni.navigateTo({
					url: '../user/appealDetails?id=' + id + '&leave=' + leave
				})
			}
		},
		onShow() {
			this.listdata()
		}
	}
</script>

<style scoped>
	.content {
		overflow: hidden;
		color: #B8C6E0;
		font-size: 32rpx;
		padding: 0 30rpx;
	}

	.last_son {
		margin-top: 30rpx;
		color: #95adc8;
		background: #000;
	}

	.last_son .top {
		background: #343c6d;
		font-size: 26rpx;
		padding: 20rpx 10rpx;
	}

	.last_son .bottom {
		background: #3b4375;
		overflow: hidden;
		padding: 10rpx 10rpx;
	}

	.last_son .bottom .color{
		font-weight: bold;
		color: #36d1ff;
	}

	.last_son .bottom .left {
		float: left;
	}

	.last_son .bottom .right {
		float: right;
		margin-right: 10rpx;
		color: #fff;
		width: 160rpx;
		text-align: center;
		background: #35bffd;
		/* padding: 0rpx 10rpx; */
	}

	.highest {
		text-align: center;
	}
</style>
