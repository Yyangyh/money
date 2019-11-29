<template>
	<view class="content">
		<view class="form_ipt">
			<text>收货人：</text>
			<input type="text" value="" placeholder="请输入收货人姓名" v-model="name"/>
		</view>
		<view class="form_ipt">
			<text>手机号：</text>
			<input type="text" value="" placeholder="请输入手机号" v-model="phone"/>
		</view>
		<view class="form_ipt">
			<text>邮编：</text>
			<input type="text" value="" placeholder="请输入邮编" v-model="post_code"/>
		</view>
		<view class="form_ipt">
			<text>所在省份：</text>
			<input type="text" value="" placeholder="请输入所在省份" v-model="province"/>
		</view>
		<view class="form_ipt">
			<text>所在市：</text>
			<input type="text" value="" placeholder="请输入所在市" v-model="city"/>
		</view>
		<view class="form_ipt">
			<text>所在区：</text>
			<input type="text" value="" placeholder="请输入所在区" v-model="district"/>
		</view>
		<view class="detailed_add">
			<text>详细收货地址</text>
			<input type="text" value="" placeholder="请输入详细地址:如道路、门牌号、小区等" v-model="detail"/>
		</view>
		<view class="form_ipt">
			<view class="uni-list-cell-db">设置为默认</view>
            <switch class="switch" style="transform:scale(0.6)"  @change="switchChange" :checked="checked"/>
		</view>
		<button @click="btn()">保存</button>
	</view>
</template>

<script>
	import service from '../../service.js'
	export default{
		data(){
			return{
				data:'',
				id:'',
				account:'',
				name:'',
				phone:'',
				province:'',
				city:'',
				district:'',
				detail:'',
				post_code:'',
				is_default:false,
				checked:false
			}
		},
		methods:{
			switchChange(e){
				
				if(e.detail.value == true) this.is_default = 1
				if(e.detail.value == false) this.is_default = 0
			},
			btn(){
				let data = {
					real_name:this.name,
					phone:this.phone,
					province:this.province,
					city:this.city,
					district:this.district,
					detail:this.detail,
					post_code:this.post_code,
					is_default:this.is_default,
					longitude:'',
					latitude:''
				}
				if(this.id){
					data.id = this.id
				}
				service.entire(this,'post',service.api_root.user.saveAddress+'?token='+uni.getStorageSync('token'),data,function(self,res){
					
				})
			}
		},
		onLoad(options) {
			
			if(options){
				let data = uni.getStorageSync('address')[options.index]
				this.name = data.real_name
				this.phone = data.phone
				this.province = data.province
				this.city = data.city
				this.district = data.district
				this.detail = data.detail
				this.post_code = data.post_code
				
				if(data.is_default == 1){
					this.checked = true
					this.is_default = 1
				} 
				this.id = options.id
			}
			
		}
	}
</script>

<style scoped>
	.content{
		color: #B8C6E0;
		font-size: 32rpx;
		overflow: hidden;
	}
	.form_ipt{
		margin-bottom: 2rpx;
	}
	.detailed_add{
		color: #E3E9FF;
		background: #3B4374;
		height: 150rpx;
		padding-left: 20rpx;
		margin-bottom: 2rpx;
	}
	.detailed_add text{
		display: inline-block;
		margin: 20rpx 0;
	}
	.uni-list-cell-db{
		width: 80%;
	}
	button {
		margin: 60rpx 5%;
		background: #4BD4FE;
		color: #fff;
	}
</style>
