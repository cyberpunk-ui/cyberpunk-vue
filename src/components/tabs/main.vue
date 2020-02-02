<template>
  <div class="c-tabs">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CTabs",
    props: {
      activeName: String,
    },
    computed: {

    },
    mounted(){

    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-tabs {

  }
</style>