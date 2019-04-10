<template>
  <div class="page">
    <div class="inner_page">
      <p>订单</p>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import bottomBar from '../common/tabar.vue'

  export default {
    name: 'Order',
    data() {
      return {}
    },
    created() {
    },
    methods: {},
    computed: {},
    components: {
      bottomBar
    }
  }
</script>

<style lang="less" scoped>
  .page {

  }
</style>
