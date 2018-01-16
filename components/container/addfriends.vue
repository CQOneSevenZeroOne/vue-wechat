<template>
	<div>
		<xheader name="添加朋友"></xheader>
		<div class="weui-search-bar" id="searchBar" :class="{'weui-search-bar_focusing':searchTab}">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input class="weui-search-bar__input" id="searchInput" placeholder="手机号/微信号" required="" type="search">
                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                </div>
                <label class="weui-search-bar__label" id="searchText" @click="searchtab">
                    <i class="weui-icon-search"></i>
                    <span>手机号/微信号</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" @click="hidetab">取消</a>
        </div>
        <p class="addftit">我的微信号:<span v-text="addfname"></span></p>
        <div class="addfbar">
        	<a  v-for="arr in addfselet" class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd"><img :src="arr.img" alt="" style="width:40px;margin-right:15px;display:block"></div>
                <div class="weui-cell__bd weui-cell_primary">
                    <p v-text="arr.tit"></p>
                    <p class="addfspre" v-text="arr.tit1"></p>
                </div>
                <span class="weui-cell__ft"></span>
			</a>
        </div>
	</div>

</template>

<script>
	import xheader from '../public/xheader.vue'
	 export default{
	 	data(){
	 		return{
	 			addfname:"mmm",
	 			addfselet:[{img:"/img/radar.png",tit:"雷达添加朋友",tit1:"添加身边朋友"},
	 					{img:"/img/facetoface.png",tit:"面对面建群",tit1:"与身边的朋友进入同一个群聊"},
	 					{img:"/img/saoyisao.png",tit:"扫一扫",tit1:"扫描二维码名片"},
	 					{img:"/img/contact.png",tit:"手机联系人",tit1:"添加通讯录中的朋友"},
	 					{img:"/img/pubnum.png",tit:"公众号",tit1:"获得更多资讯和服务"}
	 					
	 			],
	 			searchTab:0
	 		}
	 	},
	 	methods:{
	 		searchtab(){
	 			this.searchTab= 1
	 		},
	 		hidetab(){
	 			this.searchTab= 0
	 		}
	 	},
	 	components:{
	 		xheader
	 	}
	 }
	
</script>

<style scoped=" scoped">
	.addftit{
		width: 100%;
		text-align: center;
		height: 45px;
		line-break: 45px;
	}
	.weui-cell__bd{
		height: 50px;
	}
	.addfspre{
		font-size: 14px;
		color: #B7B7B7;
	}
</style>