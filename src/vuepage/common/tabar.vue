<template>
  <div class="tab">
    <div class="img_box" @click="setIndex(0, '/Home')">
      <span class="iconfont icon-shouye iconStyle" :class="{selColor:$route.meta.theIndex == 1}"></span>
      <p class="iconTxt" :class="{selColor:$route.meta.theIndex == 1}">首页</p>
    </div>
    <div class="img_box" @click="setIndex(1, '/Discuss')">
      <span class="iconfont icon-luntan iconStyle" :class="{selColor:$route.meta.theIndex == 2}"></span>
      <p class="iconTxt" :class="{selColor:$route.meta.theIndex == 2}">论坛</p>
    </div>
    <div class="img_box" @click="setIndex(2, '/Order')">
      <span class="iconfont icon-dingdan iconStyle" :class="{selColor:$route.meta.theIndex == 3}"></span>
      <p class="iconTxt" :class="{selColor:$route.meta.theIndex == 3}">订单</p>
    </div>
    <div class="img_box" @click="setIndex(3, '/My')">
      <span class="iconfont icon-wode iconStyle" :class="{selColor:$route.meta.theIndex == 4}"></span>
      <p class="iconTxt" :class="{selColor:$route.meta.theIndex == 4}">我的</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },

    methods: {
      setIndex(val, path) {
        this.$router.push({path: path})
      }
    },
    computed: {},
    created() {
    },
    mounted() {

    }
  }

</script>

<style lang="less">
  .tab {
    width: 100%;
    height: 0.96rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    border-top: 1px solid #ddd;
    .img_box {
      width: 0.6rem;
      height: 0.76rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: center;
      .iconStyle {
        font-size: 0.4rem;
        text-align: center;
      }
      .iconTxt {
        text-align: center;
        font-size: 0.2rem;
      }
      .selColor {
        color: #04BE02;
      }
    }
  }


</style>
