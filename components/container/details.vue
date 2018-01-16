<template>
  <div>
      <xheader name="详细资料"></xheader>
      <div class="_cover-content _effect" _v-cada3410=""> <div class="_full _scroll" _v-cada3410=""> <div class="weui_cells" _v-cada3410=""> <div class="weui_cell" _v-cada3410=""> <div class="card_pic _left" _v-cada3410="" style="background-image: url(&quot;//ad-gold-cdn.xitu.io/14999138688354f1720f589d2d33db77f026bb07c8f67.jpg&quot;);"> </div> <div class="card_line" _v-cada3410=""> <div class="remark" _v-cada3410=""> <span _v-cada3410="">阿涛</span><span class="gender gender-man" _v-cada3410=""></span> </div> <p class="wxid" _v-cada3410=""><span _v-cada3410="">微信号:</span><span _v-cada3410="">wxid_yangtao</span></p> <p class="nickname" _v-cada3410=""> <span _v-cada3410="">昵称:</span> <span _v-cada3410="">杨涛</span> </p> </div> </div> </div> <div class="weui_cells weui_cells_access" _v-cada3410=""> <div class="weui_cell" href="javascript:;" _v-cada3410=""> <div class="weui_cell_bd weui_cell_primary" _v-cada3410=""> <p _v-cada3410="">设置备注和标签</p> </div> <div class="weui_cell_ft" _v-cada3410=""> </div> </div> <div class="weui_cell" href="javascript:;" _v-cada3410=""> <div class="weui_cell_bd weui_cell_primary" _v-cada3410=""> <div _v-cada3410=""> <span _v-cada3410="">电话号码</span>&nbsp;&nbsp; <a href="tel:18812345678" _v-cada3410="">18812345678</a> </div> </div> </div> </div> <div class="weui_cells weui_cells_access weui_cells_apm" _v-cada3410=""> <a class="weui_cell" href="javascript:;" _v-cada3410=""> <div class="weui_cell_bd weui_cell_primary" _v-cada3410=""> <span class="apm _left" _v-cada3410="">地区</span> <div class="apm_content" _v-cada3410=""></div> </div> </a> <a class="weui_cell weui_cells_photos" href="javascript:;" _v-cada3410=""> <div class="weui_cell_bd weui_cell_primary" _v-cada3410=""> <span class="apm _left" _v-cada3410="">个人相册</span> <div class="apm_content" _v-cada3410=""></div> </div> <div class="weui_cell_ft" _v-cada3410=""></div> </a> <a class="weui_cell" href="javascript:;" _v-cada3410=""> <div class="weui_cell_bd weui_cell_primary" _v-cada3410=""> <span class="apm _left" _v-cada3410="">更多</span> <div class="apm_content" _v-cada3410=""></div> </div> <div class="weui_cell_ft" _v-cada3410=""><span _v-cada3410=""></span></div> </a> </div> </div> </div>
  </div>
</template>
<script>
	import xheader from '../public/xheader.vue'
export default {
  methods:{
      show(){
            this.$store.state.bool=true
        }
  },
  components:{
  	xheader
  }
}
</script>
<style>
 .header{
    height: 45px;
    width: 100%;
    background: #000;
    color:#fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
 }
</style>
