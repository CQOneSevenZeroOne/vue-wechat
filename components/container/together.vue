<template>
  <div>
      <xheader name="群聊"></xheader>
      <xsearch />
      <div class="text" v-for="a in num">
          <div class="pic"><img src="../../public/img/timg.jpeg" alt=""></div>
          <div class="cont">
              <p>
                  web前端交流群<span v-text="a"></span>
              </p>
          </div>
      </div>
  </div>
</template>
<script>
import xsearch from "../public/xsearch.vue";
import xheader from '../public/xheader.vue'
export default {
  data() {
    return {
        num:[0,1,2,3,4,5]
    };
  },
  components: {
    xsearch,
    xheader
  }
}
</script>
<style>
    .top{
        width: 100%;
        height: 45px;
        background: #000;
        color:#fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .top div a{
        color: #fff;
        text-decoration: none;
    }
    .text{
        padding: 10px 15px;
        position: relative;
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
    .text .pic img{
        width: 35px;
        border: 0;
        margin-right: 10px;
        display: block;
    }
    .text .cont{
        -webkit-box-flex: 1;
        flex: 1;
    }
</style>
