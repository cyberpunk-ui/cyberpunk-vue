<template>
  <div class="c-tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
  export default {
    name: "CTabsHead",
    inject: ['eventBus'],
    created() {
      console.log(this.eventBus);
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-tabs-head {

  }
</style>