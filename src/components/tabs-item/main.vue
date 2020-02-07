<template>
  <div class="c-tabs-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CTabsItem",
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      name: {
        type: String,
        required: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-tabs-item {

  }
</style>