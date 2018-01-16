<template>
	<header class="app-header" style="" _v-c8294afa="">
		<div class="_effect" _v-c8294afa="">
			<div class="_cover-top" _v-60c89da3="" _v-c8294afa="" style="overflow:visible">
				<div class="other" _v-60c89da3=""> 
					<span @click="hide" class="iconfont icon-tips-jia" _v-60c89da3="" v-show="look"></span> 
					<span class="iconfont icon-tips-add-friend" _v-60c89da3="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"  v-show="like"></span>
					<ul v-show="number" class="tips-menu tips-close" _v-60c89da3="">
						<li _v-60c89da3=""> <span class="iconfont icon-tips-xiaoxi" _v-60c89da3=""></span>
							<div _v-60c89da3="">发起群聊</div>
						</li>
						<li _v-60c89da3=""> <span class="iconfont icon-tips-add-friend" _v-60c89da3=""></span>
							<div _v-60c89da3="">添加朋友</div>
						</li>
						<li _v-60c89da3=""> <span class="iconfont icon-tips-saoyisao" _v-60c89da3=""></span>
							<div _v-60c89da3="">扫一扫</div>
						</li>
						<li _v-60c89da3=""> <span class="iconfont icon-tips-fukuan" _v-60c89da3=""></span>
							<div _v-60c89da3="">收付款</div>
						</li>
					</ul>
					<div class="tips-masker" _v-60c89da3="" style="display: none;"></div>
				</div>
				<div class="center" _v-60c89da3="" >{{name}} <span class="parentheses" _v-60c89da3=""  v-show="look">12</span> </div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		props:["name","look","like"],
		data() {
			return {
				number:0
			}
		},
		methods: {
			hide(){
				this.number = !this.number
			}
		}
	}
</script>
<style>
	/*赵琳琳*/
	div,span{vertical-align: baseline;}
	._effect { opacity: 1;transition: .3s all ease; }
	._cover-top {position: relative;z-index: 2;overflow: hidden;height: 45px;padding: 0 15px 0 10px;line-height: 45px;background: linear-gradient(to bottom, #303036, #3c3b40);opacity: 1;color: #ffffff;user-select: none;-webkit-user-select: none;transition: .22s all ease;}
	.other {position: absolute;right: 15px;}
	.other .iconfont { font-size: 22px;}
	.other .tips-menu {position: absolute;z-index: 10;width: 133px;font-size: 16px;right: -10px;top: 54px;text-align: left;border-radius: 2px;background-color: #49484b;padding: 0 15px;-webkit-transform-origin: 90% 0%;transform-origin: 90% 0%;}
	.other .tips-menu li {position: relative;height: 40px;line-height: 40px;list-style: none;}
	.other .tips-menu .iconfont {float: left;font-size: 16px;margin-right: 15px;}
	.center {margin: 0 auto;text-align: center;}
	.other .tips-menu::before {width: 0;height: 0;position: absolute;top: -8px;right: 15px;content: "";border-width: 0 6px 8px;border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #49484b rgba(0, 0, 0, 0);border-style: solid;}
	*:before,*:after {box-sizing: inherit;}
	.parentheses {}
	.parentheses:before { content: "(";}
	.parentheses:after {content: ")";}
</style>