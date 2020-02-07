<template>
  <div class="c-tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CTabsPane",
    props: {
      name: {
        type: String,
        required: true,
      }
    },
    computed: {

    },
    mounted(){

    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-tabs-pane {

  }
</style>