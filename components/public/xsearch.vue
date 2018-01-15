<template>
	<div>
		<div class="weui-search-bar" :class="{'weui-search-bar_focusing':isShowSearchBar}" id="searchBar">
			<form class="weui-search-bar__form">
				<div class="weui-search-bar__box">
					<i class="weui-icon-search"></i>
					<input v-model="searchInput" type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
					<a href="javascript:" class="weui-icon-clear" id="searchClear" @click="clearSearchInput"></a>
				</div>
				<label @click="showSearchBar" class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
			</form>
			<a @click="hideSearchBar" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
		</div>
		<!--实时搜索文本-->
		<div v-show="isShowSearchResult" class="weui-cells searchbar-result" id="searchResult" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
			<div class="weui-cell weui-cell_access" v-for="site in data">
				<div class="weui-cell__bd weui-cell_primary">
					<p>{{site.title}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		data() {
			return {
				searchInput:'',
				isShowSearchBar: false,
				isShowSearchResult: false,
				data:[]
			}
		},
		methods: {
			showSearchBar() {
				this.isShowSearchBar = true;
			},
			hideSearchBar() {
				this.isShowSearchBar = false;
			},
			clearSearchInput(){
				this.searchInput = "";
			}
		},
		watch:{
			searchInput(){
				let self = this;
				$.ajax({
					type:"GET",
					url:"http://localhost:7878/?input="+encodeURI(self.searchInput),
					success(data){
						data = JSON.parse(data);
						self.data = data;
					}
				})
			},
			data(){
				if(this.data != []){
					this.isShowSearchResult = true;
				}
				if(this.searchInput == ""){
					this.isShowSearchResult = false;
				}
			}
		}
	}
</script>

<style>

</style>