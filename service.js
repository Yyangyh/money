// const api = ''
const api = 'http://ck15.8396048.com'

const api_root = {
	info:{
		msg: api+'/routine/debt/msg',//获取信息
	},
	login: {
		//login: api + '/routine/login/login'//登录
		login: api+'/routine/login/login',//登录
		logo: api+'/routine/login/get_enter_logo', //获取logo图
		
	},
	reg:{
		reg: api+'/routine/login/register' ,//注册
		verifycode: api+'/routine/login/verifycode', //验证码
		forget: api+'/routine/login/forget', //忘记密码
	},
	index:{
		info: api+'/routine/home/info'  ,//首页数据
		notice: api+'/routine/login/getHomePop', //公告
		get_list: api+'/routine/user/get_check_level_list',//还款计划列表
		up_list: api+'/routine/user/up_check_level_list',//审核还款计划
		examine: api+'/routine/debt/examine',//检查是否能上传新债务
		crowdfunding: api+'/routine/debt/crowdfunding',//众筹计划列表
		visit: api+'/routine/auth_api/visit',//文章详情
		nearRepayment: api+'/routine/debt/nearRepayment',//近期还款信息 
		lists: api+'/routine/article/lists',//特色产品文章
		getArticle: api+'/routine/article/getArticle',//特色产品文章详情
	},
	user:{
		realname: api+'/routine/user/realname', //实名验证
		updateIdImage: api+'/routine/user/updateIdImage', //上传图片
		upIdentityCard: api+'/routine/user/upIdentityCard' ,//提交实名
		addressList: api+'/routine/user/addressList' ,//地址详情
		saveAddress: api+'/routine/user/saveAddress' ,//添加修改地址
		saveReceivables: api+'/routine/debt/saveReceivables' ,//收款方式(修改、添加)
		getReceivables: api+'/routine/debt/getReceivables' ,//获取收款方式详情
		mygroup: api+'/routine/user/mygroup' ,//好友列表
		qrcode: api+'/routine/user/qrcode' ,//邀请码
		detail: api+'/routine/complaint/detail',//申诉详情
		revoke: api+'/routine/complaint/revoke',//撤诉
		getOwnList: api+'/routine/complaint/getOwnList',//获取我申诉别人的记录
		getList: api+'/routine/complaint/getList',//获取申诉我的记录
		myteams: api+'/routine/user/myteams',//我的团队
		message: api+'/routine/home/message',//留言
		
	},
	planpage:{
		addDebt: api+'/routine/debt/addDebt',//添加债务
		get_check_up: api+'/routine/user/get_check_up_list',//收款人列表
		update_voucher: api+'/routine/user/update_voucher',//上传打款凭证
		history: api+'/routine/user/get_check_level_list',//还款历史记录
		adjustment: api+'/routine/user/adjustment',//重新分配（冻结情况）
		ask: api+'/routine/complaint/ask',//申诉
	}
	
}
const entire = function(self,type,url,data,func){
	
	uni.request({
		url:url,
		data:data,
		method:type,
		success(res) {
			let res_list = res.data
			// console.log(res_list)
			if(res_list.code == 401){
				uni.removeStorageSync('token')
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}else{
				func(self,res_list)
			}
		}
	})
}

const load_entire = function(self,type,url,data,func){  //点击后显示加载中
	uni.showLoading({
	    title: '加载中',
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
		url:url,
		data:data,
		method:type,
		success(res) {
			uni.hideLoading()
			clearTimeout(times)
			let res_list = res.data
			// console.log(res_list)
			if(res_list.code == 401){
				uni.removeStorageSync('token')
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}else{
				func(self,res_list)
			}
		}
	})
}



const throttle = function(){ //节流
	
}
export default{
	api,
	api_root,
	entire,
	load_entire
}