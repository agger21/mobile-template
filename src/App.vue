<template>
  <div id="app">
    <transition leave-active-class='fadeOut animated' enter-active-class='fadeIn animated'>
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    created() {

    }
  }

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  #app {
    height: 100%;
  }
</style>
