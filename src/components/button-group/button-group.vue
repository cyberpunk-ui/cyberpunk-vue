<template>
  <span class="c-button-group">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: "CButtonGroup",
  }
</script>

<style lang="scss" scoped>
  @import '../../style/var';

  .c-button-group {
    display: inline-flex;
    vertical-align: middle;
    > button {
      border-right: 1px solid rgba($black-color, 0.1);
    }
  }
</style>