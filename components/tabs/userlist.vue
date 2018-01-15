<template>
	<div>
		<xsearch></xsearch>
		<xcontent></xcontent>
	</div>
</template>

<script>
	import xsearch from '../public/xsearch.vue';
	import xcontent from '../public/xcontent.vue';
	export default{
		components:{
			xsearch,
			xcontent
		}
	}
</script>

<style>
</style>