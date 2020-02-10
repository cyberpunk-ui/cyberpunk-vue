<template>
  <div class="c-tabs-pane" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CTabsPane",
    inject: ['eventBus'],
    data() {
      return {
        active: false,
      }
    },
    props: {
      name: {
        type: String,
        required: true,
      }
    },
    computed: {
      classes() {
        return {
          active: this.active
        }
      },
    },
    created() {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../style/var';

  .c-tabs-pane {
    display: none;
    &.active{
      display: block;
    }
  }
</style>