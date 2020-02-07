<template>
  <div class="c-tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CTabsItem",
    inject: ['eventBus'],
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
    data() {
      return {
        active: false,
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    },
    computed: {
      classes() {
        return {
          active: this.active,
          disabled: this.disabled,
        }
      },
    },
    methods: {
      onClick(){
        if (this.disabled) return;
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/theme';

  .c-tabs-item {
    display: block;
    font-size: $tabs-item-font-size;
    padding: $tabs-item-padding;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: $grey-light-color;
    &:hover {
      color: $black-color;
      background-color: $primary-dark-color;
    }
    &.active {
      color: $black-color;
      background-color: $primary-color;
    }
    &.disabled {
      color: lighten(grey, 5%);
      cursor: not-allowed;
      background-color: darken($grey-light-color, 5%);
      &:hover {
        background-color: darken($grey-light-color, 5%);
      }
    }
  }
</style>