<template>
  <div
    class="c-menu-item"
    :class="classes"
    :data-name="name"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CMenuItem",
  inject: ['root', 'direction'],
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
  created() {
    this.root.addItem(this)
  },
  computed: {
    classes() {
      return {
        active: this.active,
        vertical: this.direction === 'vertical'
      }
    }
  },
  methods: {
    onClick(){
      this.root.namePath = []
      /* istanbul ignore next */
      this.$parent.updateNamePath && this.$parent.updateNamePath()
      this.$emit('add:selected', this.name)
      this.root.closeAllPopover()
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/var";

.c-menu-item {
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.3s;
  a {
    color: inherit;
    text-decoration: none;
  }
  &.active {
    color: $black-color;
    background-color: $primary-color;
    font-weight: $button-font-weight;
  }
  &:hover:not(.active){
    background-color: $grey-light-color;
  }
}
</style>
