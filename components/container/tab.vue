<template>
	<div class="tab">
		<router-view></router-view>
		<xfooter></xfooter>
	</div>
</template>

<script>
	import xfooter from '../public/xfooter.vue'
	export default{
		components:{
			xfooter
		}
	}
</script>

<style>
	.tab{
	background:#F8F8F8;
	height:100%;
}
html,body{
	height:100%
}
</style>