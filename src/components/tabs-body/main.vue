<template>
  <div class="c-tabs-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CTabsBody",
    inject: ['eventBus'],
    created() {
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-tabs-item {
    padding: 12px;
    border: 1px solid $grey-light-color;

  }
</style>