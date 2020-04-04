<template>
  <div class="c-row" :style="rowStyles" :class="rowClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CRow",
  props: {
    gutter: {
      type: [String, Number]
    },
    align: {
      type: String,
      validator(value) {
        return ["left", "center", "right"].includes(value);
      }
    }
  },
  computed: {
    rowStyles() {
      const { gutter } = this;
      return {
        marginLeft: `${-gutter / 2}px`,
        marginRight: `${-gutter / 2}px`
      };
    },
    rowClasses() {
      const { align } = this;
      return [align && `align-${align}`];
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter || 0;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-row {
  display: flex;
  flex-wrap: nowrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-center {
    justify-content: center;
  }
  &.align-right {
    justify-content: flex-end;
  }
}
</style>
