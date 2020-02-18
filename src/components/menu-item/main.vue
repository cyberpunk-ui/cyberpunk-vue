<template>
  <div
    class="c-menu-item"
    :class="{active}"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CMenuItem",
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  data(){
    return {
      active: false
    }
  },
  methods: {
    onClick(){
      this.$emit('add:selected', this.name)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-menu-item {
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.3s;
  &.active {
    color: $black-color;
    background-color: $primary-color;
    font-weight: $button-font-weight;
  }
}
</style>
