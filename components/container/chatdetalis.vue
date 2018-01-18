<template>
	<div style="background: #FAFAFC;">
		<ul class="list">
			<li>
				<div class="" v-if="1">
					<img src="../../public/img/0.jpg">
					<p>木木</p>
				</div>
				<div class="" v-if="0">
					<img src="../../public/img/more.png">
				</div>
			</li>

			<li>
				<div class="" v-if="0">
					<img src="../../public/img/0.jpg">
					<p>木木</p>
				</div>
				<div class="" v-if="1">
					<img src="../../public/img/more.png">
				</div>
			</li>
		</ul>

		<div class="all" v-for="a in arr">
			<p v-text="a.tit"> </p>
			<div class="weui_cell_ft" v-if="a.bool"> 
				<input class="weui_switch" type="checkbox" _v-100525be="">
			</div>
		</div>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: [{tit:"聊天小程序"}, {tit:"查找聊天记录"}, {tit:"置顶聊天",bool:1}, {tit:"消息免打扰",bool:1}, {tit:"设置当前聊天背景"}, {tit:"清空聊天记录"}, {tit:"投诉"}]
			}
		}
	}
</script>

<style scoped="scoped">
	.list {
		width: 100%;
		height: 100px;
		margin: 10px 15px;
		overflow: hidden;
		background: white;
	}
	
	.list>li {
		width: 85px;
		float: left;
		height: 100px;
		margin: 10px 0px 10px;
		list-style: none;
		background: #FFFFFF;
	}
	
	.list>li img {
		display: block;
		width: 55px;
		height: 55px;
		border-radius: 50%;
		overflow: hidden;
		margin-left: 15px;
	}
	
	.list>li p {
		width: 85px;
		line-height: 50px;
		text-align: center;
		color: #353535;
		height: 50px;
	}
	
	.all {
		width: 100%;
		height: 45px;
		line-height: 45px;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		background: #FFFFFF;
		margin: 15px 0;
	}
	
	.all>p {
		float: left;
		flex: 1;
		margin-left: 15px;
	}
	
	.all>span {
		float: right;
		width: 100px;
		height: 45px;
		text-align: right;
		margin-right: 15px;
		border-radius: 45%;
		border: 1px solid #979797;
	}
</style>