<template>
	<div>
		<div class="login-header">登陆微信</div>
		<div class="weui-cells_form">
			<div class="weui-cell">
				<div class="weui-cell__hd"><label class="weui-label">账 号</label></div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="text" placeholder="手机号" v-model="username" @blur="testUsername">
				</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd"><label class="weui-label">密 码</label></div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="password" placeholder="密码" v-model="pwd" @blur="testPwd">
				</div>
			</div>
			<a href="javascript:;" class="weui-btn weui-btn_primary" @click="loginbtn">登陆</a>
			<div class="weui-footer">
				<p class="weui-footer__links">
					<a href="#/register" class="weui-footer__link">没有账号？去注册</a>
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
		<!--toast-->
		<div id="toast" v-show="isToastShow">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-icon-success-no-circle weui-icon_toast"></i>
				<p class="weui-toast__content">登陆成功</p>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from "jquery";
	import io from "socketClient";
	export default {
		data() {
			return {
				username: '',
				isUsernameCorrect: false,
				pwd: '',
				isPwdCorrect: false,
				userIndex: 0,
				userList: [],
				msg: '',
				isMsgShow: false,
				isToastShow: false,
				socket:io("http://localhost:7878"),
			}
		},
		methods: {
			testUsername() {
				let isExist = false;
				for(let i = 0; i < this.userList.length; i++) {
					if(this.username == this.userList[i].username) {
						isExist = true;
						this.userIndex = i;
						break;
					}
				}
				if(isExist) {
					this.isUsernameCorrect = true;
				}
			},
			testPwd() {
				if(this.userList[this.userIndex].pwd == this.pwd) {
					this.isPwdCorrect = true;
				}
			},
			loginbtn() {
				if(this.isUsernameCorrect && this.isPwdCorrect) {
					let self = this;
					$.ajax({ //数据回传设置session和cookie
						type: "post",
						url: "http://localhost:7878/session",
						data: {
							username: self.username,
							pwd: self.pwd
						},
						success(data) {			
							if(data == "ok") {
								self.isToastShow = true;
								self.$store.state.isLogin = true;
								self.$store.state.userId = self.userList[self.userIndex].id;
								self.$store.state.portrait = self.userList[self.userIndex].portrait;
								setTimeout(()=>{
									location.href = "#/tab/wechat";
								},1200)
								
							}
						}

					})

				} else {
					this.isMsgShow = true;
					this.msg = "账号或密码错误";
				}
			},
			hideMsg() {
				this.isMsgShow = false;
			}
		},
		mounted() {
			let self = this;
			$.ajax({
				type: "post",
				url: "http://localhost:7878/login",
				success(data) {
					self.userList = data;
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