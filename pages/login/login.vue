<template class="page">
	<view class="content">
		<view class="logo">
			<image :src="img" mode="widthFix"></image>
		</view>
		<view class="form">
			<view class="form_test">
				登录
			</view>
			<view class="form_ipt">
				<input type="text" value="" placeholder="请输入您的手机号" v-model="account"/>
			</view>
			<view class="form_ipt">
				<input type="text"  password="true"  value=""  placeholder="请输入密码" v-model="password"/>
			</view>
			<view class="form_remember">
				<label class="radio" @click="checked = !checked">
					<radio value="" v-bind:checked="checked" style="transform:scale(0.7)" />记住密码
				</label>
				<view class="right"  @click="jump('../reg/forget')" >
					忘记密码
				</view>
			</view>
			<view class="btn">
				<view class="form_btn">
					<button type="" @click="sign()">登录</button>
				</view>
			</view>
		</view>
		<view class="form_btn">
			<button class="reg" type="" @click="jump('../reg/reg')">
				快速注册
			</button>
		</view>
		<view>
			
		</view>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data(){
			return{
				account:'',
				password:'',
				img:'',
				checked:false,
				test:''
			}
		},
		methods:{
			jump(url){
				uni.navigateTo({
					url:url
				})
			},
			sign(){
				let that = this
				if(!that.account){
					uni.showToast({
						icon: 'none',
						title: '账号不能为空'
					});
					return;
				}
				if(!that.password){
					uni.showToast({
						icon: 'none',
						title: '密码不能为空'
					});
					return;
				}
				uni.showLoading({
				    title: '登录中',
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
					url:service.api_root.login.login,
					method:'post',
					data:{
						account:that.account,
						password:that.password
					},
					success(res) {
						uni.hideLoading()
						clearTimeout(times)
						uni.showToast({
							icon:'none',
							title:res.data.msg
						})
						if(res.data.code == 200){
							uni.setStorageSync('token',res.data.data.token)
							uni.setStorageSync('logo',that.img)
							if(that.checked == true){
								uni.setStorageSync('account',that.account)
								uni.setStorageSync('password',that.password)
							}else{
								uni.removeStorageSync('password',that.password)
							}
							uni.switchTab({
								url:'../index/index'
							})
						}
					}
				})
				
			}
		},
		onShow(){
			let that = this
			uni.removeStorageSync('token');
			uni.removeStorageSync('notice_record');
			if(uni.getStorageSync('password')){
				that.account = uni.getStorageSync('account')
				that.password = uni.getStorageSync('password')
				that.checked = true
			}else{
				that.account = uni.getStorageSync('account')
			}
			uni.request({
				url:service.api_root.login.logo,
				success(res) {
					// console.log(res.data.data.site_logo)
					that.img = res.data.data.site_logo
					that.test = res.data.data.site_name
					uni.setStorageSync('test',that.test)
				}
			})
		}
	}
</script>

<style scoped>
	.page{
		/* height: 100%; */
	}
	.content{
		background: rgb(44,61,122);
		height: 100%;
	}
	.logo{
		text-align: center;
		margin-bottom: 80rpx;
	}
	.logo image{
		width: 200rpx;
		margin-top: 120rpx;
		height: 200rpx;
	}
	.form{
		margin: 0 40rpx;
		background: #fff;
		border-radius: 15rpx;
		padding: 40rpx 40rpx;
	}
	.form_test{
		font-size: 46rpx;
		font-weight: bold;
		color: #3a467c;
	}
	.form_ipt{
		margin-top: 20rpx;
		padding-left: 0;
		background: #fff;
	}
	.form_ipt input{
		color: #000;
		font-size: 28rpx;
		padding: 20rpx 0;
		border-bottom: 1rpx solid #eee;
	}
	.form_remember{
		color: #23bafd;
		font-size: 26rpx;
	}
	    
	.form_remember .radio{
		float: left;
		height: 50rpx;
		line-height: 50rpx;
	}
	.form_remember .right{
		float: right;
		height: 50rpx;
		line-height: 50rpx;
	}
	.form_btn{
		margin-top: 30rpx;
	}
	.form_btn .reg{
		margin: 60rpx 10%;
		height: 80rpx;
		line-height: 80rpx;
		border: solid 1px #859dbd;
		color: #9bb5ce;
		background: rgb(45,52,100);
		font-size: 28rpx;
	}
	.btn{
		margin-top: 80rpx;
	}
</style>
