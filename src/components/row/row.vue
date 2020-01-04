<template>
  <div class="c-row" :style="{padding: `0 -${gutter}px`,}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "c-row",
    props: {
      gutter: {
        type: [String, Number]
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-row {
    display: flex;
  }
</style>