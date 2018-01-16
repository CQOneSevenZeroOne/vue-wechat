<template>
  <div>
      <xheader name="新的朋友"></xheader>
      <xsearch></xsearch>
      <div class="weui_cells margin-top-0" _v-2747733a=""> <div class="weui_cell" _v-2747733a=""> <dl class="add-tel-address" _v-2747733a=""> <dt _v-2747733a=""><span class="iconfont icon-iphone-address" _v-2747733a=""></span></dt> <dd _v-2747733a="">添加手机联系人</dd> </dl> </div> </div>
      <div class="weui_cells message-list" _v-2747733a=""> <div class="weui_cell" _v-2747733a=""> <div class="weui_cell_hd" _v-2747733a=""> <img src="//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg" alt="" style="width:40px;margin-right:5px;display:block" _v-2747733a=""> </div> <div class="weui_cell_bd weui_cell_primary" _v-2747733a=""> <p _v-2747733a=""><b _v-2747733a="">陌生人</b></p> <p _v-2747733a=""><span _v-2747733a="">我是群聊""的</span><span _v-2747733a="">陌生人</span></p> </div> <div class="weui_cell_ft" _v-2747733a="">已添加</div> </div> <div class="weui_cell" _v-2747733a=""> <div class="weui_cell_hd" _v-2747733a=""><img src="//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg" alt="" style="width:40px;margin-right:5px;display:block" _v-2747733a=""></div> <div class="weui_cell_bd weui_cell_primary" _v-2747733a=""> <p _v-2747733a=""><b _v-2747733a="">陌生人</b></p> <p _v-2747733a=""><span _v-2747733a="">我是群聊""的</span><span _v-2747733a="">陌生人</span></p> </div> <div class="weui_cell_ft" _v-2747733a="">已拒绝</div> </div> <div class="weui_cell" _v-2747733a=""> <div class="weui_cell_hd" _v-2747733a=""><img src="//ad-gold-cdn.xitu.io/14999140634069b6825290779221783b3b59fbba0addd.jpg" alt="" style="width:40px;margin-right:5px;display:block" _v-2747733a=""></div> <div class="weui_cell_bd weui_cell_primary" _v-2747733a=""> <p _v-2747733a=""><b _v-2747733a="">陌生人</b></p> <p _v-2747733a=""><span _v-2747733a="">我是群聊""的</span><span _v-2747733a="">陌生人</span></p> </div> <div class="weui_cell_ft" _v-2747733a=""> <a href="javascript:;" class="weui_btn weui_btn_mini weui_btn_primary" _v-2747733a="">接受</a> </div> </div> </div>
  </div>
</template>
<script>
import xsearch from "../public/xsearch.vue";
import xheader from "../public/xheader.vue";
export default {
  data() {
    return {};
  },
  components: {
    xsearch,
    xheader
  }
};
</script>
<style>
.add-tel-address[_v-2747733a]{
    margin: 0 auto;
    text-align: center;
}
.add-tel-address dt .iconfont[_v-2747733a]{
    font-size: 35px;
    color: #4bb94b;
}
.add-tel-address dd[_v-2747733a]{
    font-size: 14px;
    color: #929292;
}
.message-list .weui_cell_primary p b[_v-2747733a]{
    font-size: 18px;
    font-weight: normal;
}
.message-list .weui_cell_primary p span[_v-2747733a]{
    font-size: 14px;
    color: #888888;
}
</style>
