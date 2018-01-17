<template>
	<div>
		<div class="login-header">注册</div>
		<div class="weui-cells_form">
			<div class="weui-cell">
				<div class="weui-cell__hd"><label class="weui-label">用户名</label></div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="text" placeholder="手机（用于登陆）" @blur="testUsername" v-model="username">
				</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd"><label class="weui-label">昵称</label></div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="text" placeholder="昵称" @blur="testNickname" v-model="nickname">
				</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd"><label class="weui-label">密 码</label></div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="password" placeholder="密码" @blur="textPwd" v-model="pwd">
				</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd"><label class="weui-label">确认密码</label></div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="password" placeholder="请与密码保持一致" v-model="pwdRepeat" @blur="testPwdRepeat">
				</div>
			</div>
			<a href="javascript:;" class="weui-btn weui-btn_primary" @click="register">注册</a>
			<div class="weui-footer">
				<p class="weui-footer__links">
					<a href="#/login" class="weui-footer__link">已有账号？去登陆</a>
				</p>
			</div>
		</div>
		<!--pop-->
		<div class="js_dialog" id="iosDialog2" style="opacity: 1;" v-show='isMsgShow'>
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__bd" v-text="msg"></div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="hideMsg">知道了</a>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	import $ from "jquery";
	export default {
		data() {
			return {
				username: '',
				isUsernameCorrect: false,
				nickname: '',
				isNicknameCorrect: false,
				pwd: '',
				isPwdCorrect: false,
				pwdRepeat: '',
				isRePwdCorrect: false,
				allUser: [],
				msg:'',
				isMsgShow:false
			}
		},
		methods: {
			textPwd() {    //验证密码格式
				let reg = /[\w]{6,}/;
				if(reg.test(this.pwd)) {
					this.isPwdCorrect = true;
				} else {
					this.isPwdCorrect = false;
				}
			},
			testPwdRepeat() {  //验证密码格式
				if(this.pwdRepeat == this.pwd) {
					this.isRePwdCorrect = true;
				} else {
					this.isRePwdCorrect = false;
				}
			},
			testUsername() {  //验证用户名格式
				let reg =  /^1[3|5|7|8][0-9]{9}$/;
				let isExist = false;
				if(!reg.test(this.username)){
					return;
				}
				for(let i=0;i<this.allUser.length;i++) {
					if(this.username == this.allUser[i].username) {
						isExist = true;
						break;
					}
				}
				if(reg.test(this.username) && !isExist) {
					this.isUsernameCorrect = true;
				}
			},
			testNickname(){
				let isExist = false;
				console.log(this.allUser);
				for(let i=0;i<this.allUser.length;i++) {
					if(this.nickname == this.allUser[i].nickname) {
						isExist = true;
						break;
					}
				}
				if(!isExist){
					this.isNicknameCorrect = true;
				}
			},
			hideMsg(){  //关闭弹框
				this.isMsgShow = false;
			},
			register() {  //注册
				if(!this.isUsernameCorrect) {
					this.isMsgShow = true;
					this.msg = "请输入正确的手机号或该号码已被注册";
					return;
				}
				if(!this.isPwdCorrect){
					this.isMsgShow = true;
					this.msg = "密码只能由数字和字母组成，长度不能小于6位";
					return;
				}
				if(!this.isRePwdCorrect){
					this.isMsgShow = true;
					this.msg = "密码输入不一致";
					return;
				}
				if(!this.isNicknameCorrect){
					this.isMsgShow = true;
					this.msg = "该昵称已被占用";
					return;
				}
				let self = this;
				let rtime = new Date();
				rtime = rtime.getFullYear()+'-'+rtime.getMonth()+1+'-'+rtime.getDate()+" "+rtime.getHours()+":"+rtime.getMinutes()+":"+rtime.getSeconds();
				$.ajax({
					type:"post",
					url:"http://localhost:7878/register",
					data:{
						username: self.username,
						pwd: self.pwd,
						nickname: self.nickname,
						rtime:rtime
					},
					success(data){
						if(data == "ok"){
							location.href = "#/success";
						}
					}
				})
			}
		},
		mounted() {
			let self = this;
			$.ajax({
				type: "get",
				url: "http://localhost:7878/getAllUser",
				success(data) {
					self.allUser = data;
				}
			})
		}
	}
</script>

<style>
	.login-header {
		width: 100%;
		height: 45px;
		background: #35353A;
		text-align: center;
		color: #fff;
		line-height: 45px;
		font-size: 18px;
		margin-bottom: 10px;
	}
	
	.weui-btn {
		width: 90%;
		margin: 10px auto;
	}
</style>