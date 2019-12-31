<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "c-button-group",
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-button-group {
    display: inline-flex;
    vertical-align: middle;
    > button {
      border-right: 1px solid rgba($black-color, 0.1);
    }
  }
</style>