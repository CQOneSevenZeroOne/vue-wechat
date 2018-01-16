<template>
	<div>
		<xheader name="微信" look="true" like=""></xheader>
		<xsearch></xsearch>
		<xcontent></xcontent>
	</div>
</template>

<script>
	import xsearch from '../public/xsearch.vue';
	import xcontent from '../public/xcontent.vue';
	import xheader from '../public/xheader.vue';
	export default{
		components:{
			xsearch,
			xcontent,
			xheader
		}
	}
</script>

<style>
</style>