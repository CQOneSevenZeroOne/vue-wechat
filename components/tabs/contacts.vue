<template>
	<div>
		<xheader name="通讯录" look="" like="true"></xheader>
		<xsearch />
		<div class="weui-cells">
			<a :href="option.href" v-for='option in contactsOptions'>
				<div class="weui-cell">
					<div class="weui-cell__hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
					<div class="weui-cell__bd">
						<p v-text='option.name'></p>
					</div>
				</div>
			</a>
		</div>
		<a  href="#/details" style="color:#000;">
			<div class="weui_cells weui_cells_access" _v-32554b3e="">
				<div class="weui_cell" _v-32554b3e="" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
					<div class="weui_cell_hd" _v-32554b3e=""> <img style="width: 35px;margin-right: 5px;display: block;" _v-32554b3e="" src="//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg"></div>
					<div class="weui_cell_bd weui_cell_primary" _v-32554b3e="">
						<p _v-32554b3e="">阿涛</p>
					</div>
				</div>
			</div>
		</a>
	</div>
</template>
<script>
	import xsearch from "../public/xsearch.vue";
	import xheader from '../public/xheader.vue'
	export default {
		data() {
			return {
				contactsOptions: [{
						href: "#/newfriends",
						name: "新的朋友"
					},
					{
						href: "#/together",
						name: "群聊"
					},
					{
						href: "#/newfriends",
						name: "标签"
					},
					{
						href: "#/newfriends",
						name: "公众号"
					}
				]
			};
		},
		components: {
			xsearch,
			xheader
		}
	};
</script>
<style>
	a{
		color: #000000;
	}
</style>