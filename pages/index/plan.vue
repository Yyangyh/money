<template>
	<view class="content">
		<view class="plan">
			<view>
				<text :class="{show:show == 0}" @click='show = 0'>众筹计划</text>
				<text :class="{show:show == 1}" @click='show = 1'>还款计划</text>
			</view>
		</view>
		<view v-if="show == 0">
			<view class="loan">
				<view class="test" v-for="item in data" @click="jump('../planpage/debt?type='+item.type)">
					<view class="loan_test1">{{item.money}}</view>
					<view class="loan_test2">{{item.name}}</view>
					
				</view>
			</view>
			<view class="repayment">
				<text class="repayment_left">
					可还款总额：<text class="color">￥{{money}}</text>
				</text>
				<text class="repayment_right" @click="activation()">去付款</text>
			</view>
			<view class="speed">
				<view class="repayment_plan">
					还款计划
				</view>
				<view class="repayment_speed" v-for="(item,index) in crowdfunding" :key="index">
					<text>第{{item.stage}}阶段</text>
					<progress :percent="item.percent" stroke-width='12' />
					<text class="total">{{item.money}}/{{item.debt_total}}</text>
				</view>

			</view>
		</view>
		<view v-else-if="show == 1">
			<!-- <view class="no_time">
				<image src="../../static/image/noplan.png" mode="aspectFit"></image>
				<view class="">
					暂无相关计划
				</view>
			</view> -->
			<view class="plan_list">
				<view class="record" @click="record('../planpage/record')">
					还款历史记录
				</view>
				<view class="plan_box" v-for="(item,index) in repayment" :key="index" v-if="item.status == 1">
					<view class="plan_test">
						还款者姓名：{{item.realname}}
					</view>
					<view class="plan_test">
						还款者电话：{{item.account}}
					</view>
					<view class="plan_test">
						还款者等级：{{item.levelname}}
					</view>
					<!-- <view class="plan_test">
						还款者微信：{{item.weixin}}
					</view> -->
					<view class="bottom">
						<view class="left" @click="examine(item.id)">
							审核中
						</view>
						<view class="right"  @click="record('../planpage/details?index='+index)">
							详情
						</view>
						<!-- <view class="right" @click="record('../planpage/appeal?upid='+item.id)">
							申诉
						</view> -->
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
	export default {
		components: {cmdProgress},
		data() {
			return {
				show: 0,
				token: uni.getStorageSync('token'),
				crowdfunding: '',
				money: '0.00',
				staus: '',
				repayment: '',
				data:'',
				state:0
				
			}
		},
		methods: {
			jump(url) {
				if (this.staus == 0) {
					uni.showToast({
						icon: 'none',
						title: '当前已有债务或债务正在审核中'
					})
					return
				}
				uni.navigateTo({
					url: url
				})
			},
			record(url){
				uni.navigateTo({
					url: url
				})
			},
			activation() {
				if(this.state == 0){
					uni.showToast({
						icon:'none',
						title:'暂未可还款金额'
					})
					 return
				}
				uni.navigateTo({
					url: '../planpage/activation'
				})
			},
			examine(id) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '是否通过审核',
					confirmText:'通过审核',
					success: function(res) {
						if (res.confirm) {
							service.entire(this, 'post', service.api_root.index.up_list + '?token=' + that.token, {//通过还款计划审核
								id:id
							}, function(self, res) { 
								if(res.code == 200){
									uni.request({
										url:service.api_root.index.get_list + '?token=' + that.token,
										data:{
											status:'1'
										},
										method:'get',
										success(reg) {
											that.repayment = reg.data.data
										}
									})
								}
								uni.showToast({
									icon:"none",
									title:res.msg
								})
							})
							
						}
					}
				});
			}
		},
		onShow() {
			
			service.entire(this, 'get', service.api_root.index.examine + '?token=' + this.token, {}, function(self, res) { //检查是否有正在审核的债务
				// console.log(res)
				self.staus = res.data.staus
			})
			service.entire(this, 'get', service.api_root.index.crowdfunding + '?token=' + this.token, {}, function(self, res) { //众筹计划
				if(res.code == 200){
					self.state = 1
					let list = res.data.datas
					for (let s of list) {
						s.money = s.money.split('.')[0]
						s.debt_total = s.debt_total.split('.')[0]
						for (let k in s) {
							s.percent = (1 - ((s.debt_total - s.money) / s.debt_total)) * 100
						}
					}
					self.crowdfunding = list
					self.money = res.data.money
				}
				
				let debts = res.data.debts
				console.log(debts)
				let data = [
					{type:1,name:'信用卡',money:'+'},
					{type:2,name:'房贷',money:'+'},
					{type:3,name:'车贷',money:'+'},
					{type:0,name:'其他',money:'+'},
				]
				for (let s of data) {
					for (let k of debts) {
						if(s.type == k.type) s.money = k.money
					}
				}
				self.data = data
			})
			service.entire(this, 'get', service.api_root.index.get_list + '?token=' + this.token, {
				status:'1'
			}, function(self, res) { //还款计划
				// console.log(res)
				self.repayment = res.data
			})
		}
	}
</script>

<style scoped>
	.content {
		color: #B8C6E0;
		background: #2E3264;
		overflow: hidden;
		padding: 0 20rpx;
		padding-bottom: 100rpx;
	}

	.plan view {
		margin: 40rpx 10%;
		display: flex;
		background: #2E3264;
		color: #35BFFD;
		/* padding: 2rpx; */
		border: 2rpx solid #35BFFD;
	}

	.plan view text {
		font-size: 36rpx;
		flex-grow: 1;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		display: inline-block;
	}

	.show {
		color: #fff;
		background: #35BFFD;
		/* border: 2rpx solid #35BFFD; */
	}

	.loan {
		/* overflow: hidden; */
		display: flex;

	}

	.loan .test {
		text-align: center;
		width: 25%;
		background: #3B4374;
		border-radius: 10rpx;
		height: 200rpx;
		flex-grow: 1;
		margin-right: 20rpx;
		padding-top: 60rpx;
		box-sizing: border-box;
	}

	.loan view:nth-of-type(4) {
		margin-right: 0rpx;
	}

	.loan view>view {
		height: 40rpx;
		line-height: 40rpx;
	}

	.loan view .loan_test1 {
		font-size: 20rpx;

	}

	.loan view .loan_test2 {
		font-size: 30rpx;
	}
	.loan view .loan_test3{
		font-size: 26rpx;
	}
	.repayment {
		margin-top: 40rpx;
		overflow: hidden;
		background: #3B4374;
		padding: 0 15rpx;
		border-radius: 10rpx;
	}

	.repayment text {
		height: 100rpx;
		line-height: 100rpx;
	}

	.repayment .repayment_left {
		float: left;
		
	}
	
	.repayment .repayment_right {
		float: right;
		color: #35BFFD;
	}
	
	.repayment .repayment_left  .color {
		color: #35BFFD;
	}
	.speed {
		margin-top: 40rpx;
	}

	.repayment_plan {
		margin-bottom: 30rpx;
		font-size: 32rpx;
	}

	.repayment_speed {
		margin-bottom: 30rpx;
		font-size: 28rpx;
		display: flex;
		justify-content:space-between;
	}

	.repayment_speed progress {
		/* flex-grow: 2; */
		min-width: 45%;
		width: auto;
		margin: 0 20rpx;
	}
	.total{
		width: 30%;
		font-size: 26rpx;
	}
	.no_time {
		text-align: center;
		margin-top: 300rpx;
		font-size: 32rpx;
	}

	.no_time image {
		width: 200rpx;
		height: 170rpx;
	}
	.record{
		width: 80%;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 30rpx;
		font-size: 28rpx;
		text-align: center;
		margin: 0 10%;
		background: #35bffd;
		color: #fff;
		margin-bottom: 20rpx;
	}
	.plan_list {
		width: 100%;
	}

	.plan_list .plan_box {
		width: 100%;
		padding: 10rpx 20rpx;
		font-size: 32rpx;
		height: 290rpx;
		background: #3B4374;
		position: relative;
		box-sizing: border-box;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
	}

	.plan_list .plan_box .plan_test {
		margin-bottom: 10rpx;
	}

	.plan_box .bottom {
		width: 95%;
		overflow: hidden;
		position: absolute;
		bottom: 20rpx;

	}

	.plan_box .bottom view {
		background: #35bffd;
		color: #fff;
		text-align: center;
		width: 150rpx;
		border-radius: 10rpx;
		padding: 10rpx 0;
	}

	.plan_box .bottom .left {
		float: left;
		margin-right: 20rpx;
	}

	.plan_box .bottom .right {
		float: right;
	}
</style>
