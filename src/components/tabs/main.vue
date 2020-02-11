<template>
  <div class="c-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "CTabs",
  props: {
    selected: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    if (this.$children.length === 0) {
      console &&
        console.warn &&
        console.warn(
          "c-tabs component should contain c-tabs-head & c-tabs-body, Please complete."
        );
    }

    this.$children.forEach(vm => {
      if (vm.$options.name === "CTabsHead") {
        vm.$children.forEach(childVm => {
          if (
            childVm.$options.name === "CTabsItem" &&
            childVm.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, childVm);
          }
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-tabs {
}
</style>
