<template>
	<view class="content">
		<view class="w_test">
			<view class="test_left">
				可提现金额：￥0.00
			</view>
			<view class="test_right">
				全部提现
			</view>
		</view>
		<view class="money">
			<view class="m_test">
				提现金额
			</view>
			<view class="m_number">
				<view class="form_ipt">
					<text>￥</text>
					<input type="text" value="" placeholder="请输入提现金额"/>
				</view>
			</view>
		</view>
		<view class="w_mode">
			<view class="m_test">
				提现方式
			</view>
			<view class="w_last">
				<radio-group name="radio" @change="change">
					<view class="mode">
						<image src="../../static/image/alipay.png" mode="aspectFit"></image>
						<text>提现到支付宝</text>
						<label>
							<radio value="radio1" checked />
						</label>
						
					</view>
					
					<view class="mode">
						<image src="../../static/image/bank.png" mode="aspectFit"></image>
						<text>提现到银行卡</text>
						<label>
							<radio value="radio2" />
						</label>
					</view>
					<view class="" v-show="show == 'radio1'">
						<view class="form_ipt">
							<text>姓名：</text>
							<input type="text" value="" placeholder="请输入姓名"/>
						</view>
						<view class="form_ipt">
							<text>支付宝账号：</text>
							<input type="text" value="" placeholder="请输入支付宝账号"/>
						</view>
						<view class="form_ipt">
							<text>确认账号：</text>
							<input type="text" value="" placeholder="请输入确认账号"/>
						</view>
					</view>
					<view class="" v-show="show == 'radio2'">
						<view class="form_ipt">
							<text>姓名：</text>
							<input type="text" value="" placeholder="请输入姓名"/>
						</view>
						<view class="uni-list-cell">
							<view class="uni-list-cell-left">
								选择银行
							</view>
							<view class="uni-list-cell-db">
								<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
									<view class="uni-input">{{array[index]}}</view>
								</picker>
							</view>
						</view>
						<view class="form_ipt">
							<text>银行卡号：</text>
							<input type="text" value="" placeholder="请输入银行卡号"/>
						</view>
						<view class="form_ipt">
							<text>确认卡号：</text>
							<input type="text" value="" placeholder="请输入确认卡号"/>
						</view>
					</view>
				</radio-group>
			</view>
		</view>
		<button>提现</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				show:'radio1',
				array: ['中国','美国', '巴西', '日本'],
				index:0
			}
		},
		methods:{
			change(e){
				this.show = e.detail.value
				
			},
			bindPickerChange: function(e) {
				
				this.index = e.target.value
			},
		}
	}
</script>

<style scoped>
	.content{
		overflow: hidden;
		color: #B8C6E0;
		font-size: 32rpx;
	}
	.w_test{
		overflow: hidden;
		padding: 20rpx 30rpx;
		
	}
	.w_test .test_left{
		float: left;
	}
	.w_test .test_right{
		float: right;
		color: #E95F5D;
		text-decoration: underline;
	}
	.money{
		background: #525B8B;
		padding: 20rpx 0 0 20rpx;
		/* height: 50rpx; */
	}
	.money .m_test{
		padding-left: 20rpx;
	}
	.form_ipt{
		background: #525B8B;
	}
	.w_mode{
		background: #525B8B;
		margin: 30rpx 0;
		padding: 20rpx 30rpx 0 30rpx;
	}
	.w_mode .m_test{
		margin-bottom: 20rpx;
	}
	.w_mode .mode{
		display: flex;
		align-items: center;
		padding: 20rpx 0;
		border-bottom: 2rpx solid #B8C6E0;
	}
	.w_mode image{
		width: 60rpx;
		height: 60rpx;
		margin-right: 20rpx;
	}
	.w_mode label{
		display: flex;
		justify-content: flex-end;
		flex-grow: 2;
	}
	.uni-list-cell{
		height: 90rpx;
		line-height: 90rpx;
		display: flex;
	}
	.uni-list-cell-left{
		padding-left: 20rpx;
		color: #E3E9FF;
		margin-right: 20rpx;
	}
	.uni-list-cell-db{
		flex-grow: 2;
	}
	button{
		color: #fff;
		background: #4BD4FE;
		margin: 60rpx 10%;
	}
</style>
