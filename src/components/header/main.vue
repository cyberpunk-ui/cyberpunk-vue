<template>
  <header class="c-header" :style="headerStyle">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "CHeader",
  computed: {
    headerStyle() {
      return {
        height: this.height + "px"
      };
    }
  },
  props: {
    height: {
      type: [Number, String],
      default: 60
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-header {
  flex-shrink: 0;
}
</style>
