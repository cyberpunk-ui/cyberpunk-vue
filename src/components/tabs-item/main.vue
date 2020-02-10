<template>
  <div class="c-tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CTabsItem",
    inject: ['eventBus'],
    data() {
      return {
        active: false,
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      name: {
        type: String | Number,
        required: true,
      }
    },
    created() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name
        })
      }
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
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        this.$emit('click', this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/var';

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