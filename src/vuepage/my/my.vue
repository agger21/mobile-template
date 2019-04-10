<template>
  <div class="page">
    <div class="inner_page">
      <span>我的</span>
    </div>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import bottomBar from '../common/tabar.vue'

  export default {
    name: 'My',
    data() {
      return {}
    },
    created() {
    },
    mounted() {

    },
    methods: {},
    components: {
      bottomBar
    }
  }
</script>

<style lang="less" scoped>
  .page {

  }


</style>
