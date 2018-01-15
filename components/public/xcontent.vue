<template>
	<div>
		<a href="#/chat" v-for="items in users">
			<div class="weui-cell">

				<div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
					<img :src='items.portrait' style="width: 50px;display: block">
					<span class="weui-badge" style="position: absolute;top: -.4em;right: -.4em;">8</span>
				</div>
				<div class="weui-cell__bd">
					<p v-text='items.username'></p>
					<p style="font-size: 13px;color: #888888;">帅哥你好</p>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
	import img from '../../public/img/touxiang.jpg';
	import $ from 'jquery';
	export default {
		data() {
			return {
				img: img,
				users: []
			}
		},
		mounted() {
			let self = this;
			$.ajax({
				type: "post",
				dataType: 'json',
				url: "http://localhost:7878/getUser",
				success(data) {
					self.users = data;
					console.log(data);
				}
			})
		}
	}
</script>

<style>
	a {
		color: #000000;
	}
</style>