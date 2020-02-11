<template>
  <aside class="c-aside" :style="asideStyle">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: "CAside",
  computed: {
    asideStyle() {
      return {
        width: this.width + "px"
      };
    }
  },
  props: {
    width: {
      type: [Number, String],
      default: 300
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-aside {
  flex-shrink: 0;
}
</style>
