<template>
	<div class="weui-tabbar">
		<!--:class='{weui-bar__item_on:checkedId==0}'-->
		<a href="#/tab/wechat" class="weui-tabbar__item " :class="{'weui-bar__item_on':checkedId==0}" @click='check(0)'>
			<span style="display: inline-block;position: relative;">
                        <img :src="wechat" alt="" class="weui-tabbar__icon">
                        <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
			</span>
			<p class="weui-tabbar__label">微信</p>
		</a>
		<a href="#/tab/contacts" class="weui-tabbar__item" :class="{'weui-bar__item_on':checkedId==1}" @click='check(1)'>
			<img :src="connect" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label">通讯录</p>
		</a>
		<a href="#/tab/discovery" class="weui-tabbar__item" :class="{'weui-bar__item_on':checkedId==2}" @click='check(2)'>
			<span style="display: inline-block;position: relative;">
                        <img :src="found" alt="" class="weui-tabbar__icon">
                        <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
			</span>
			<p class="weui-tabbar__label">发现</p>
		</a>
		<a href="#/tab/mine" class="weui-tabbar__item" :class="{'weui-bar__item_on':checkedId==3}" @click='check(3)'>
			<img :src="me" alt="" class="weui-tabbar__icon">
			<p class="weui-tabbar__label">我</p>
		</a>
	</div>
</template>

<script>
	import wechat from '../../public/img/wechat.png';
	import connect from '../../public/img/connect.png';
	import found from '../../public/img/found.png';
	import me from '../../public/img/me.png';
	
	export default{
		data(){
			return{
				wechat,
				connect,
				found,
				me,
				checkedId:0,
			}
		},
		methods:{
			check(id){
				this.checkedId = id;
			}
		}
	}
</script>

<style>

</style>