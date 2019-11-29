<template>
	<view class="content">
		<view class="form_ipt">
			<text>手机号：</text>
			<input type="text" value="" placeholder="请输入手机号" maxlength='11' v-model="account"/>
		</view>
		
		<view class="verification">
			<input type="text" value="" placeholder="请输入验证码" maxlength='6' v-model="verifycode"/>
			<button class="" @click="obtain()" v-model="verification" :disabled="disabled">
				{{verification}}
			</button>
		</view>
		<view class="form_ipt">
			<text>密码：</text>
			<input type="text" password="true" value="" placeholder="请输入新密码"  v-model="password"/>
		</view>
		<view class="form_ipt">
			<text>确认密码：</text>
			<input type="text"  password="true" value="" placeholder="请再次输入新密码" v-model="repassword"/>
		</view>
		
		<view class="form_btn">
			<button type="" @click="register()" >提交</button>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data(){
			return{
				verification:'获取验证码',
				disabled:false,
				account:'',
				username:'',
				password:'',
				repassword:'',
				verifycode:'',
			}
		},
		methods:{
			obtain(){ //获取验证码
				var that = this
				uni.request({
					url:service.api_root.reg.verifycode,//service.api_root.reg.verifycode,  //'/routine/login/verifycode',
					method:'get',
					data:{
						account:that.account,
						temp:'sms_forget'
					},
					success(res) {
						
						uni.showToast({
							icon:'none',
							title:res.data.msg
						})
						if(res.data.code == 200){
							that.verification = '60s'
							that.disabled = true
							that.timer = setInterval(function(){
								let num = that.verification.split('s')[0]
								num --
								that.verification = num+'s'
							},1000)
						}
						
					}
				})
			},
			register(){ //注册
				let that = this
				// if(!(/^1[3-9][0-9]\d{8,11}$/.test(that.account))){
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '手机号码格式不正确'
				// 	});
				// 	return;
				// }
				
				if(that.password != that.repassword){
					uni.showToast({
						icon: 'none',
						title: '密码不一致'
					});
					return;
				}
				if(that.password.length < 6){
					uni.showToast({
						icon: 'none',
						title: '密码最少需要六位'
					});
					return;
				}
				if(that.verifycode.length < 6){
					uni.showToast({
						icon: 'none',
						title: '验证码最少需要六位'
					});
					return;
				}
				let data = {
					account:that.account,
					password:that.password,
					repassword:that.repassword,
					verifycode:that.verifycode,
					
				}
				uni.showLoading({
				    title: '提交中',
					mask:true
				});
				let times = setTimeout(function(){
					uni.hideLoading()
					uni.showToast({
						icon:'none',
						title:'网络请求错误，请稍后再试'
					})
					return
				},10000)
				uni.request({
					url:service.api_root.reg.forget,
					method:'post',
					data:data,
					success(res) {
						uni.hideLoading()
						clearTimeout(times)
						uni.showToast({
							icon:'none',
							title:res.data.msg
						})
						if(res.data.code == 200){
							setTimeout(function(){
								uni.redirectTo({
									url:'../login/login'
								})
							},1500)
						}
					}
				})
			}
		},
		watch:{
			verification(curval,oldval){// 监听定时器的num值
				if(curval == '-1s'){
					clearInterval(this.timer)
					this.verification = '重新获取'
					this.disabled = false
				}
			}
		},
		
		
	}
</script>

<style scoped>
	.content{
		padding: 80rpx 30rpx 0 30rpx;
		background: rgb(44,61,122);
		height: 100%;
	}
	.verification{
		margin-bottom: 20rpx;
		height: 90rpx;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
	}
	.verification input{
		flex-grow: 2;
		display: inline-block;
		height: 90rpx;
		color: #fff;
		background: #3B4374;
		margin-right: 20rpx;
		border-radius: 10rpx;
		padding-left: 20rpx;
	}
	
	.verification button{
		height: 90rpx;
		line-height: 90rpx;
		width: 250rpx;
		text-align: center;
		font-size: 32rpx;
		display: inline-block;
		background: #3B4374;
		color: #fff;
		border-radius: 10rpx;
	}
	.form_ipt{
		margin-bottom: 20rpx;
	}
</style>
