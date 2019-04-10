<template>
  <div class="page">
    <div class="inner_page">
      <span>首页</span>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>

  import bottomBar from '../common/tabar.vue'

  export default {
    name: 'Home',
    data() {
      return {}
    },
    created() {
      this.$store.dispatch('goods/toGetGoods').then((res) => {
        console.log(res, 'home下的请求完成')
      })

    },
    mounted() {

    },
    methods: {},
    computed: {
      goodsMsg() {
        return this.$store.state.goods.goodsMsg;
      }
    },
    watch: {
      goodsMsg: {
        handler() {
          console.log(this.goodsMsg, '参数变化')
        },
        deep: true
      }
    },
    components: {
      bottomBar
    }
  }

</script>

<style lang="less" scoped>
  .page {

  }


</style>
